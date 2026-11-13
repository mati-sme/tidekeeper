// Tidekeeper 3D: underwater biomes, displaced sea floor with caustics, god rays, instanced Gloom with eyes,
// the Minnow sub, Guardians, particles, bloom + grade. The hub shows the Ark resting on the reef.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { WORLDS, FRIENDS, CHAPTERS } from './core.js';

const NOISE = `float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*vn(p);p*=2.03;a*=.5;}return s;}`;
const rnd = (a, b) => a + Math.random() * (b - a);
function glowTex() { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.35, 'rgba(255,255,255,.5)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); }
function rayTex() { const c = document.createElement('canvas'); c.width = 64; c.height = 256; const x = c.getContext('2d'), g = x.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 256);
  const h = x.createLinearGradient(0, 0, 64, 0); h.addColorStop(0, 'rgba(0,0,0,1)'); h.addColorStop(0.5, 'rgba(0,0,0,0)'); h.addColorStop(1, 'rgba(0,0,0,1)'); x.globalCompositeOperation = 'destination-out'; x.fillStyle = h; x.fillRect(0, 0, 64, 256); return new THREE.CanvasTexture(c); }
const GradeShader = { uniforms: { tDiffuse: { value: null }, uVig: { value: 0.9 }, uTint: { value: new THREE.Color(1, 1, 1) }, uTime: { value: 0 }, uHurt: { value: 0 } },
  vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader: `uniform sampler2D tDiffuse;uniform float uVig,uTime,uHurt;uniform vec3 uTint;varying vec2 vUv;
  void main(){vec2 uv=vUv+vec2(sin(vUv.y*14.+uTime*1.3),cos(vUv.x*12.+uTime))*0.0009;vec4 c=texture2D(tDiffuse,uv);float d=distance(vUv,vec2(.5));
  c.rgb*=mix(1.,smoothstep(.85,.25,d),uVig);c.rgb*=uTint;c.rgb=mix(c.rgb,vec3(1.,.25,.3),uHurt*smoothstep(.3,.75,d));gl_FragColor=c;}` };

export class Scene3D {
  constructor(canvas) {
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.05; r.outputColorSpace = THREE.SRGBColorSpace;
    this.scene = new THREE.Scene(); this.scene.fog = new THREE.FogExp2(0x2bb3c9, 0.022);
    this.camera = new THREE.PerspectiveCamera(52, 1, 0.1, 400); this.scene.add(this.camera);
    this.glow = glowTex(); this.t = 0; this.shake = 0; this.hurt = 0; this.mode = 'hub'; this.world = -1; this.quality = 'high'; this.camZ = 0;
    this.U = { uTime: { value: 0 } };
    this.buildLights(); this.buildSky(); this.buildFloor(); this.buildRays(); this.buildSnow(); this.buildSub(); this.buildGloom(); this.buildShots(); this.buildBoss(); this.buildParticles(); this.buildFish(); this.buildArk(); this.buildFx();
    this.decor = [];
    const comp = this.composer = new EffectComposer(r); comp.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.55, 0.5, 0.82); comp.addPass(this.bloom);
    this.grade = new ShaderPass(GradeShader); comp.addPass(this.grade); comp.addPass(new OutputPass());
    this.resize(); addEventListener('resize', () => this.resize()); this.setWorld(0); this.setQuality('high');
  }
  setQuality(q) { this.quality = q; const pr = q === 'low' ? 1 : q === 'med' ? Math.min(devicePixelRatio, 1.5) : Math.min(devicePixelRatio, 2); this.renderer.setPixelRatio(pr); this.bloom.enabled = q !== 'low'; this.snow.visible = q !== 'low'; this.resize(); if (this.world >= 0) { const w = this.world; this.world = -1; this.setWorld(w); } }
  resize() { this._off = -1; const w = innerWidth, h = innerHeight; this.renderer.setSize(w, h, false); this.composer.setSize(w, h); this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); }
  buildLights() { this.hemi = new THREE.HemisphereLight(0xbff4ff, 0x1a3a40, 1.4); this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xfff2d6, 2.2); this.sun.position.set(6, 30, 8); this.scene.add(this.sun, this.sun.target);
    this.subLight = new THREE.PointLight(0xfff0c0, 30, 26, 1.6); this.scene.add(this.subLight); }
  buildSky() { this.skyU = { top: { value: new THREE.Color() }, bot: { value: new THREE.Color() }, uTime: this.U.uTime };
    const m = new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false, uniforms: this.skyU,
      vertexShader: 'varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader: `uniform vec3 top,bot;uniform float uTime;varying vec3 vP;${NOISE}void main(){float y=vP.y*.5+.5;vec3 c=mix(bot,top,smoothstep(.2,.95,y));
      float s=fbm(vP.xz*6.+uTime*.05)*smoothstep(.7,1.,y);c+=top*s*.35;gl_FragColor=vec4(c,1.);}` });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(300, 32, 16), m); this.scene.add(this.sky); }
  buildFloor() { const geo = new THREE.PlaneGeometry(170, 240, 120, 170); geo.rotateX(-Math.PI / 2); this.cell = 170 / 120;
    const m = this.floorMat = new THREE.MeshStandardMaterial({ color: 0xe7d3a2, roughness: 0.92, metalness: 0 });
    this.floorU = { uTime: this.U.uTime, uOff: { value: new THREE.Vector2() }, uCaus: { value: 1 }, uTint: { value: new THREE.Color(1, 1, 1) }, uLava: { value: 0 }, uGlow: { value: 0 } };
    m.onBeforeCompile = s => { Object.assign(s.uniforms, this.floorU);
      s.vertexShader = `uniform vec2 uOff;varying vec3 vW;varying float vH;${NOISE}
      float hgt(vec2 p){float lane=smoothstep(7.,26.,abs(p.x));return fbm(p*.045)*3.5+fbm(p*.16)*.9+lane*lane*(9.+fbm(p*.03+3.)*10.);}\n` + s.vertexShader
        .replace('#include <beginnormal_vertex>', `vec2 wp=position.xz+uOff;float e=.6;float hc=hgt(wp);vec3 objectNormal=normalize(vec3(hgt(wp-vec2(e,0))-hgt(wp+vec2(e,0)),2.*e,hgt(wp-vec2(0,e))-hgt(wp+vec2(0,e))));`)
        .replace('#include <begin_vertex>', 'vec3 transformed=position;transformed.y+=hc;vW=vec3(wp.x,hc,wp.y);vH=hc;');
      s.fragmentShader = `uniform float uTime,uCaus,uLava,uGlow;uniform vec3 uTint;varying vec3 vW;varying float vH;${NOISE}
      float caus(vec2 p){p*=.35;float t=uTime*.6;float c=0.;for(int i=0;i<3;i++){vec2 q=p+vec2(sin(t+p.y*1.7),cos(t*.8+p.x*1.3))*.6;c+=abs(sin(q.x*2.1+t)+sin(q.y*2.3-t*.7));p*=1.6;}return pow(max(0.,1.-c*.28),4.);}\n` + s.fragmentShader
        .replace('#include <color_fragment>', '#include <color_fragment>\n float n=fbm(vW.xz*.25);diffuseColor.rgb*=uTint*mix(.72,1.18,n)*mix(1.,.8,smoothstep(2.,14.,vH));')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance+=vec3(.75,.95,1.)*caus(vW.xz)*uCaus*1.1;float lv=smoothstep(.62,.7,fbm(vW.xz*.12+uTime*.03))*uLava;totalEmissiveRadiance+=vec3(1.,.35,.08)*lv*2.5;vec2 gc=floor(vW.xz*1.3);float gs=h21(gc);float gd=length(fract(vW.xz*1.3)-.5);totalEmissiveRadiance+=mix(vec3(.2,.9,1.),vec3(.9,.4,1.),h21(gc+7.))*step(.93,gs)*smoothstep(.22,.0,gd)*(.6+.4*sin(uTime*2.+gs*40.))*uGlow*2.5;'); };
    this.floor = new THREE.Mesh(geo, m); this.floor.position.y = -7; this.scene.add(this.floor); }
  buildRays() { const tex = rayTex(); this.rays = [];
    for (let i = 0; i < 9; i++) { const m = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.12, color: 0xdffaff, fog: false });
      const p = new THREE.Mesh(new THREE.PlaneGeometry(rnd(3, 7), 60), m); p.userData = { x: rnd(-30, 30), z: rnd(-80, -10), ph: rnd(0, 6) }; p.rotation.z = rnd(-0.35, -0.15); this.scene.add(p); this.rays.push(p); } }
  buildSnow() { const N = 1600, pos = new Float32Array(N * 3); for (let i = 0; i < N; i++) { pos[i * 3] = rnd(-40, 40); pos[i * 3 + 1] = rnd(-8, 22); pos[i * 3 + 2] = rnd(-90, 20); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.snowU = { uTime: this.U.uTime, uCam: { value: new THREE.Vector3() }, uCol: { value: new THREE.Color(0xffffff) }, map: { value: this.glow } };
    const m = new THREE.ShaderMaterial({ uniforms: this.snowU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: `uniform float uTime;uniform vec3 uCam;varying float vA;void main(){vec3 p=position;p.y+=sin(uTime*.3+p.x)*.4-uTime*.25;p.x+=sin(uTime*.2+p.z*.3)*.5;
      p=mod(p-uCam+vec3(40.,8.,90.),vec3(80.,30.,110.))+uCam-vec3(40.,8.,90.);vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp(90./-mv.z,1.,6.);vA=smoothstep(90.,10.,-mv.z);gl_Position=projectionMatrix*mv;}`,
      fragmentShader: 'uniform sampler2D map;uniform vec3 uCol;varying float vA;void main(){gl_FragColor=vec4(uCol,texture2D(map,gl_PointCoord).a*.5*vA);}' });
    this.snow = new THREE.Points(g, m); this.snow.frustumCulled = false; this.scene.add(this.snow); }
  buildSub() { const s = this.sub = new THREE.Group(), yel = new THREE.MeshPhysicalMaterial({ color: 0xffc83d, roughness: 0.35, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.2 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x2b3a4a, roughness: 0.5, metalness: 0.6 }), brass = new THREE.MeshStandardMaterial({ color: 0xd9a441, roughness: 0.3, metalness: 0.9 });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.8, 1.6, 8, 20), yel); body.rotation.x = Math.PI / 2; s.add(body);
    const glass = new THREE.MeshPhysicalMaterial({ color: 0xbff6ff, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.38, clearcoat: 1, emissive: 0x2a6f80, emissiveIntensity: 0.3 });
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.62, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), glass); dome.position.set(0, 0.55, -0.15); s.add(dome);
    const pilot = new THREE.Mesh(new THREE.SphereGeometry(0.26, 16, 12), new THREE.MeshStandardMaterial({ color: 0xf2c6a0, roughness: 0.6 })); pilot.position.set(0, 0.7, -0.1); s.add(pilot);
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x5a3420, roughness: 0.8 })); hair.position.set(0, 0.74, -0.05); s.add(hair);
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.42, 24), new THREE.MeshBasicMaterial({ color: 0xfff6d0 })); lens.position.set(0, 0, -1.62); lens.rotation.y = Math.PI; s.add(lens);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.07, 8, 24), brass); ring.position.z = -1.6; s.add(ring);
    for (const sx of [-1, 1]) { const fin = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.08, 0.5), yel); fin.position.set(sx * 0.95, -0.1, 0.9); s.add(fin);
      const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.9, 12), dark); pod.rotation.x = Math.PI / 2; pod.position.set(sx * 0.85, -0.35, -0.2); s.add(pod); }
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.8, 0.5), yel); tail.position.set(0, 0.45, 1.2); s.add(tail);
    const peri = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.7, 8), brass); peri.position.set(0.35, 0.9, 0.3); s.add(peri);
    this.prop = new THREE.Group(); for (let i = 0; i < 3; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.7, 0.05), brass); b.rotation.z = i * 2.094; b.position.y = 0; this.prop.add(b); } this.prop.position.z = 1.75; s.add(this.prop);
    this.shield = new THREE.Mesh(new THREE.SphereGeometry(1.9, 24, 16), new THREE.MeshBasicMaterial({ color: 0x7fdc8a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })); s.add(this.shield);
    this.pal = new THREE.Group(); const pb = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.8, 6, 12), new THREE.MeshStandardMaterial({ color: 0x8fb8d8, roughness: 0.4 })); pb.rotation.x = Math.PI / 2; this.pal.add(pb);
    const pf = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.4, 8), pb.material); pf.position.set(0, 0.3, 0.1); this.pal.add(pf); this.palBody = pb; s.add(this.pal); this.pal.visible = false;
    this.scene.add(s); }
  buildGloom() { const N = 160, geo = new THREE.IcosahedronGeometry(1, 3), ph = new Float32Array(N); for (let i = 0; i < N; i++) ph[i] = Math.random() * 6.28; geo.setAttribute('aPh', new THREE.InstancedBufferAttribute(ph, 1));
    const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25, metalness: 0.05, emissive: 0x3a0a55, emissiveIntensity: 0.9 });
    m.onBeforeCompile = s => { s.uniforms.uTime = this.U.uTime; s.vertexShader = 'uniform float uTime;attribute float aPh;\n' + s.vertexShader.replace('#include <begin_vertex>',
      'vec3 transformed=position+normal*(sin(position.y*4.+uTime*3.+aPh)*.07+sin(position.x*5.+uTime*2.3+aPh*1.7)*.06+sin(position.z*3.+uTime*1.7)*.05);'); };
    this.gloom = new THREE.InstancedMesh(geo, m, N); this.gloom.instanceMatrix.setUsage(THREE.DynamicDrawUsage); this.gloom.count = 0; this.gloom.frustumCulled = false; this.scene.add(this.gloom);
    this.eyeW = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 12, 10), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, emissive: 0x222222 }), N * 2);
    this.eyeP = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 10, 8), new THREE.MeshBasicMaterial({ color: 0x14081f }), N * 2);
    for (const e of [this.eyeW, this.eyeP]) { e.count = 0; e.frustumCulled = false; this.scene.add(e); }
    this.chest = new THREE.InstancedMesh(new THREE.BoxGeometry(1.4, 1, 1), new THREE.MeshStandardMaterial({ color: 0x8a5a2b, roughness: 0.6, emissive: 0xffb547, emissiveIntensity: 0.25 }), 12); this.chest.count = 0; this.chest.frustumCulled = false; this.scene.add(this.chest);
    const cg = new THREE.ConeGeometry(0.35, 1, 8); cg.rotateX(Math.PI / 2); this.critter = new THREE.InstancedMesh(cg, new THREE.MeshStandardMaterial({ color: 0xffa94d, emissive: 0xff7a2f, emissiveIntensity: 0.6, roughness: 0.4 }), 12); this.critter.count = 0; this.critter.frustumCulled = false; this.scene.add(this.critter);
    this.critHalo = new THREE.InstancedMesh(new THREE.RingGeometry(0.9, 1.1, 24), new THREE.MeshBasicMaterial({ color: 0xfff1a8, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false }), 12); this.critHalo.count = 0; this.critHalo.frustumCulled = false; this.scene.add(this.critHalo);
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._v = new THREE.Vector3(); this._s = new THREE.Vector3(); this._c = new THREE.Color(); this._e = new THREE.Euler(); }
  buildShots() { const g = new THREE.SphereGeometry(1, 8, 6); this.shots = new THREE.InstancedMesh(g, new THREE.MeshBasicMaterial({ color: new THREE.Color(0x9ffcff).multiplyScalar(2.2) }), 600); this.shots.count = 0; this.shots.frustumCulled = false; this.scene.add(this.shots);
    this.bul = new THREE.InstancedMesh(g, new THREE.MeshBasicMaterial({ color: new THREE.Color(0xff5fd2).multiplyScalar(1.8) }), 300); this.bul.count = 0; this.bul.frustumCulled = false; this.scene.add(this.bul); }
  buildBoss() { const b = this.boss = new THREE.Group(); const m = this.bossMat = new THREE.MeshStandardMaterial({ color: 0x4a1670, roughness: 0.2, metalness: 0.1, emissive: 0x5a1080, emissiveIntensity: 0.8 });
    m.onBeforeCompile = s => { s.uniforms.uTime = this.U.uTime; s.vertexShader = 'uniform float uTime;\n' + s.vertexShader.replace('#include <begin_vertex>', 'vec3 transformed=position+normal*(sin(position.y*3.+uTime*2.)*.08+sin(position.x*4.+uTime*2.7)*.06);'); };
    const body = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 5), m); b.add(body); this.bossBody = body;
    this.core = new THREE.Mesh(new THREE.SphereGeometry(0.45, 20, 14), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 })); b.add(this.core);
    this.tent = []; for (let k = 0; k < 6; k++) { const arm = []; for (let j = 0; j < 7; j++) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.32 - j * 0.03, 10, 8), m); b.add(s); arm.push(s); } this.tent.push(arm); }
    const ew = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 }), ep = new THREE.MeshBasicMaterial({ color: 0x14081f });
    this.bossEyes = [-1, 1].map(sx => { const e = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 12), ew); e.position.set(sx * 0.36, 0.25, 0.85); const p = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 8), ep); p.position.z = 0.17; e.add(p); b.add(e); return e; });
    b.visible = false; this.scene.add(b);
    this.friend = new THREE.Group(); const fb = new THREE.Mesh(new THREE.SphereGeometry(0.9, 20, 14), new THREE.MeshStandardMaterial({ color: 0x7fdc8a, emissive: 0x7fdc8a, emissiveIntensity: 0.7, roughness: 0.3 })); fb.scale.set(1, 0.7, 1.4); this.friend.add(fb); this.friendBody = fb;
    for (const sx of [-1, 1]) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 8), fb.material); f.scale.set(1.2, 0.2, 0.6); f.position.set(sx * 0.9, 0, 0.2); this.friend.add(f); }
    this.friend.visible = false; this.scene.add(this.friend); }
  buildParticles() { const N = this.PN = 2500; this.pp = new Float32Array(N * 3); this.pv = new Float32Array(N * 3); this.pc = new Float32Array(N * 3); this.pl = new Float32Array(N); this.ps = new Float32Array(N); this.pi = 0;
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(this.pp, 3)); g.setAttribute('color', new THREE.BufferAttribute(this.pc, 3)); g.setAttribute('size', new THREE.BufferAttribute(this.ps, 1));
    const m = new THREE.ShaderMaterial({ uniforms: { map: { value: this.glow } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true,
      vertexShader: 'attribute float size;varying vec3 vC;void main(){vC=color;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=size*300./-mv.z;gl_Position=projectionMatrix*mv;}',
      fragmentShader: 'uniform sampler2D map;varying vec3 vC;void main(){gl_FragColor=vec4(vC,texture2D(map,gl_PointCoord).a);}' });
    this.parts = new THREE.Points(g, m); this.parts.frustumCulled = false; this.scene.add(this.parts); }
  emit(x, y, z, n, col, spd = 6, life = 0.8, size = 0.5, up = 0) { const c = this._c.set(col); if (this.quality === 'low') n = Math.ceil(n / 2);
    for (let k = 0; k < n; k++) { const i = this.pi = (this.pi + 1) % this.PN; const a = Math.random() * 6.283, b = Math.acos(rnd(-1, 1)), s = spd * rnd(0.3, 1);
      this.pp.set([x, y, z], i * 3); this.pv.set([Math.sin(b) * Math.cos(a) * s, Math.cos(b) * s + up, Math.sin(b) * Math.sin(a) * s], i * 3); this.pc.set([c.r, c.g, c.b], i * 3); this.pl[i] = life * rnd(0.6, 1.2); this.ps[i] = size * rnd(0.6, 1.3); } }
  updParticles(dt) { for (let i = 0; i < this.PN; i++) { if (this.pl[i] <= 0) { this.ps[i] = 0; continue; } this.pl[i] -= dt; const k = i * 3; this.pp[k] += this.pv[k] * dt; this.pp[k + 1] += this.pv[k + 1] * dt; this.pp[k + 2] += this.pv[k + 2] * dt;
      this.pv[k] *= 0.95; this.pv[k + 1] = this.pv[k + 1] * 0.95 + 0.6 * dt; this.pv[k + 2] *= 0.95; if (this.pl[i] < 0.3) this.ps[i] *= 0.9; }
    const a = this.parts.geometry.attributes; a.position.needsUpdate = a.color.needsUpdate = a.size.needsUpdate = true; }
  buildFish() { const g = new THREE.ConeGeometry(0.22, 0.9, 6); g.rotateZ(Math.PI / 2); const N = 70; this.fish = new THREE.InstancedMesh(g, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4, emissive: 0x111111 }), N); this.fish.frustumCulled = false;
    this.fishD = []; for (let s = 0; s < 7; s++) { const cx = rnd(-30, 30), cy = rnd(1, 9), cz = rnd(-80, 0), dir = Math.random() < 0.5 ? -1 : 1, col = new THREE.Color().setHSL(Math.random(), 0.7, 0.6);
      for (let k = 0; k < 10; k++) this.fishD.push({ s, ox: rnd(-2, 2), oy: rnd(-1, 1), oz: rnd(-2, 2), cx, cy, cz, dir, ph: rnd(0, 6), col }); }
    this.fishD.forEach((f, i) => this.fish.setColorAt(i, f.col)); this.scene.add(this.fish); }
  buildFx() { this.bombs = []; const g = new THREE.SphereGeometry(1, 24, 16); for (let i = 0; i < 6; i++) { const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x9be7ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })); m.visible = false; this.scene.add(m); this.bombs.push({ m, t: 1 }); }
    this.beam = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 60, 20, 1, true), new THREE.MeshBasicMaterial({ color: 0xe8e4ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })); this.beam.rotation.x = Math.PI / 2; this.scene.add(this.beam); }
  buildArk() { const a = this.ark = new THREE.Group(); const wood = new THREE.MeshStandardMaterial({ color: 0x2f7f8f, roughness: 0.5, metalness: 0.3 }), cream = new THREE.MeshStandardMaterial({ color: 0xf3e3c3, roughness: 0.6 }), brass = new THREE.MeshStandardMaterial({ color: 0xd9a441, roughness: 0.3, metalness: 0.9 });
    const hull = new THREE.Mesh(new THREE.CapsuleGeometry(2.4, 9, 10, 28), wood); hull.rotation.z = Math.PI / 2; hull.scale.set(1, 1, 0.85); a.add(hull);
    const deck = new THREE.Mesh(new THREE.BoxGeometry(9, 0.3, 3.4), cream); deck.position.y = 2.1; a.add(deck);
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.4, 2.4, 20), cream); tower.position.set(1.5, 3.4, 0); a.add(tower);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(1.15, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshPhysicalMaterial({ color: 0xbff6ff, transparent: true, opacity: 0.45, roughness: 0.05, clearcoat: 1 })); dome.position.set(1.5, 4.6, 0); a.add(dome);
    this.lantern = new THREE.Mesh(new THREE.OctahedronGeometry(0.5, 0), new THREE.MeshStandardMaterial({ color: 0xe8e4ff, emissive: 0xe8e4ff, emissiveIntensity: 0.2 })); this.lantern.position.set(1.5, 5, 0); a.add(this.lantern);
    this.arkLights = []; for (let i = 0; i < 24; i++) { const side = i % 2 ? 1 : -1, k = Math.floor(i / 2); const p = new THREE.Mesh(new THREE.CircleGeometry(0.28, 16), new THREE.MeshStandardMaterial({ color: 0x223, emissive: 0xffd27a, emissiveIntensity: 0 }));
      p.position.set(-5 + k * 0.85, 0.6 - (k % 2) * 0.9, side * 2.08); if (side < 0) p.rotation.y = Math.PI; a.add(p); const r = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.05, 6, 16), brass); r.position.copy(p.position); r.rotation.copy(p.rotation); a.add(r); this.arkLights.push(p); }
    this.arkParts = []; const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 6, 10), brass); mast.position.set(-2.5, 5, 0); a.add(mast); this.arkParts.push(mast);
    const sail = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 3.6, 8, 8), new THREE.MeshStandardMaterial({ color: 0xfff4dc, side: THREE.DoubleSide, roughness: 0.8 })); sail.position.set(-2.5, 5.2, 0.05); a.add(sail); this.arkParts.push(sail);
    const prop = new THREE.Group(); for (let i = 0; i < 4; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.6, 0.1), brass); b.rotation.x = i * Math.PI / 2; prop.add(b); } prop.position.set(-7.2, 0, 0); a.add(prop); this.arkProp = prop;
    for (let i = 0; i < 6; i++) { const l = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 8), new THREE.MeshStandardMaterial({ color: 0xffe9a8, emissive: 0xffc96b, emissiveIntensity: 1.5 })); l.position.set(-4 + i * 1.8, 2.6, i % 2 ? 1.5 : -1.5); a.add(l); this.arkParts.push(l); }
    a.position.set(0, -2.6, -6); a.visible = false; this.scene.add(a); }
  setArkProgress(ch) { this.arkLights.forEach((p, i) => p.material.emissiveIntensity = i < ch / 2 ? 1.6 : 0); this.arkParts.forEach((p, i) => p.visible = ch >= 2 + i * 4); this.lantern.material.emissiveIntensity = ch >= 48 ? 3 : 0.2 + ch / 60; }
  setWorld(w) { if (w === this.world) return; this.world = w; const W = WORLDS[w];
    this.scene.fog.color.set(W.fog); this.skyU.top.value.set(W.fog).lerp(new THREE.Color(0xffffff), w >= 4 ? 0.05 : 0.35); this.skyU.bot.value.set(W.water).multiplyScalar(0.35);
    this.scene.fog.density = [0.02, 0.024, 0.022, 0.018, 0.026, 0.03, 0.026][w]; this.floorMat.color.set(W.floor); this.floorU.uCaus.value = [0.9, 0.5, 0.5, 0.8, 0.1, 0.05, 0.3][w]; this.floorU.uGlow.value = w === 5 ? 1 : w === 6 ? 0.5 : 0; this.floorU.uLava.value = w === 4 ? 1 : 0;
    this.hemi.intensity = [1.5, 1.3, 1.2, 1.6, 0.8, 0.7, 0.9][w]; this.hemi.color.set(W.fog).lerp(new THREE.Color(0xffffff), 0.5); this.sun.intensity = [2.4, 1.8, 1.5, 2.2, 0.5, 0.2, 0.8][w];
    this.rays.forEach(r => { r.visible = w <= 3 || w === 6; r.material.color.set(w === 6 ? 0xd8d4ff : 0xdffaff); });
    this.snowU.uCol.value.set(w === 5 ? 0x7cf7ff : w === 4 ? 0xffb07a : 0xffffff);
    this.grade.uniforms.uTint.value.set(w === 4 ? 0xfff0e6 : w === 5 ? 0xe6f0ff : 0xffffff);
    this.fish.visible = w <= 3 || w === 6; this.fishD.forEach((f, i) => { f.col.setHSL(w === 3 ? 0.55 + Math.random() * 0.1 : w === 6 ? 0.7 + Math.random() * 0.1 : Math.random(), 0.7, 0.6); this.fish.setColorAt(i, f.col); }); this.fish.instanceColor.needsUpdate = true;
    this.buildDecor(w); }
  buildDecor(w) { for (const d of this.decor) { this.scene.remove(d.mesh); d.mesh.geometry.dispose(); } this.decor = []; const q = this.quality === 'low' ? 0.5 : this.quality === 'med' ? 0.75 : 1;
    const M = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6, ...o });
    const kelpMat = c => { const m = M(c, { side: THREE.DoubleSide }); m.onBeforeCompile = s => { s.uniforms.uTime = this.U.uTime; s.vertexShader = 'uniform float uTime;\n' + s.vertexShader.replace('#include <begin_vertex>', 'vec3 transformed=position;float k=max(0.,position.y);vec4 ip=instanceMatrix[3];transformed.x+=sin(uTime*1.2+ip.z*.3+k*.4)*k*.08;transformed.z+=cos(uTime+ip.x*.2+k*.3)*k*.05;'); }; return m; };
    const coralGeo = () => { const g = new THREE.CylinderGeometry(0.15, 0.3, 2, 6); g.translate(0, 1, 0); return g; };
    const T = {
      0: [[coralGeo(), M(0xff8fa3), 70, [0.6, 1.6], 0], [new THREE.IcosahedronGeometry(1, 1), M(0xffb36b, { flatShading: true }), 40, [0.6, 1.4], 0.2], [new THREE.SphereGeometry(1, 14, 10), M(0xc77dff, { roughness: 0.9 }), 40, [0.5, 1.2], 0.1], [new THREE.DodecahedronGeometry(1, 0), M(0x9a8f7a, { flatShading: true }), 40, [0.8, 2.2], 0], [(() => { const g = new THREE.PlaneGeometry(0.6, 5, 1, 8); g.translate(0, 2.5, 0); return g; })(), kelpMat(0x4f9a4a), 60, [0.6, 1.2], 0]],
      1: [[(() => { const g = new THREE.PlaneGeometry(1.2, 22, 1, 20); g.translate(0, 11, 0); return g; })(), kelpMat(0x3d8a3a), 150, [0.7, 1.5], 0], [new THREE.DodecahedronGeometry(1, 0), M(0x5a6a4a, { flatShading: true }), 50, [1, 2.6], 0], [(() => { const g = new THREE.PlaneGeometry(0.7, 8, 1, 10); g.translate(0, 4, 0); return g; })(), kelpMat(0x7fbf3a), 90, [0.6, 1.2], 0]],
      2: [[(() => { const g = new THREE.CylinderGeometry(0.7, 0.8, 8, 12); g.translate(0, 4, 0); return g; })(), M(0xb8b2a2), 40, [0.7, 1.4], 0], [new THREE.BoxGeometry(3, 3, 3), M(0x9a9484, { roughness: 0.8 }), 40, [0.6, 1.6], -0.5], [new THREE.TorusGeometry(2.5, 0.45, 8, 20, Math.PI), M(0xa8a292), 18, [0.8, 1.3], 0], [new THREE.TorusGeometry(0.8, 0.18, 6, 12), M(0xd9a441, { metalness: 0.9, roughness: 0.3, emissive: 0x442200 }), 40, [0.6, 1.4], 0.6], [coralGeo(), M(0x6ac4b8), 40, [0.5, 1.2], 0]],
      3: [[new THREE.IcosahedronGeometry(2, 1), M(0xe8f6ff, { flatShading: true, roughness: 0.15, emissive: 0x2a5a7a, emissiveIntensity: 0.4 }), 50, [0.8, 2.6], 0.5], [(() => { const g = new THREE.ConeGeometry(0.6, 5, 6); g.translate(0, 2.5, 0); return g; })(), M(0xbdf3ff, { flatShading: true, roughness: 0.1, emissive: 0x3a8aaa, emissiveIntensity: 0.5 }), 60, [0.6, 1.6], 0], [new THREE.OctahedronGeometry(1.5, 0), M(0xf2fbff, { flatShading: true, transparent: true, opacity: 0.8 }), 30, [0.8, 2], 12]],
      4: [[(() => { const g = new THREE.CylinderGeometry(0.6, 1.4, 7, 9); g.translate(0, 3.5, 0); return g; })(), M(0x2a2226, { flatShading: true }), 45, [0.7, 1.6], 0], [(() => { const g = new THREE.SphereGeometry(0.7, 10, 8); g.translate(0, 7.2, 0); return g; })(), M(0xff7a2f, { emissive: 0xff5a1f, emissiveIntensity: 2.5 }), 45, [0.7, 1.6], 0], [new THREE.DodecahedronGeometry(1.2, 0), M(0x3a2e30, { flatShading: true }), 60, [0.8, 2.4], 0]],
      5: [[new THREE.SphereGeometry(0.8, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), M(0x7cf7ff, { emissive: 0x3ad7ff, emissiveIntensity: 2, transparent: true, opacity: 0.8 }), 40, [0.6, 1.6], 6], [(() => { const g = new THREE.CylinderGeometry(0.1, 0.2, 1.6, 6); g.translate(0, 0.8, 0); return g; })(), M(0xff9df5, { emissive: 0xff5fd2, emissiveIntensity: 1.8 }), 80, [0.6, 1.8], 0], [new THREE.DodecahedronGeometry(1.2, 0), M(0x1a2048, { flatShading: true }), 50, [0.8, 2.4], 0]],
      6: [[new THREE.OctahedronGeometry(1, 0), M(0xd8d4ff, { flatShading: true, emissive: 0x8a7aff, emissiveIntensity: 1.2, roughness: 0.1, metalness: 0.4 }), 70, [0.5, 2], 0.6], [(() => { const g = new THREE.CylinderGeometry(0.9, 1.3, 10, 7); g.translate(0, 5, 0); return g; })(), M(0x9aa0c8, { flatShading: true }), 30, [0.7, 1.4], 0], [new THREE.DodecahedronGeometry(1.2, 0), M(0x6a6e98, { flatShading: true }), 40, [0.8, 2.2], 0]],
    }[w];
    for (const [geo, mat, n0, [s0, s1], y] of T) { const n = Math.ceil(n0 * q), mesh = new THREE.InstancedMesh(geo, mat, n); mesh.frustumCulled = false; const items = [];
      for (let i = 0; i < n; i++) { const side = Math.random() < 0.5 ? -1 : 1; items.push({ x: side * rnd(8.5, 55), z: this.camZ - rnd(-25, 200), s: rnd(s0, s1), r: rnd(0, 6.28), tilt: rnd(-0.25, 0.25), y, bob: rnd(0, 6) }); }
      this.scene.add(mesh); this.decor.push({ mesh, items }); } }
  floorH(x, z) { return -7; } // decor sits near floor; the shader terrain rises at the sides so we lift with |x|
  updDecor() { const m = this._m, q = this._q, e = this._e, v = this._v, s = this._s;
    for (const d of this.decor) { d.items.forEach((it, i) => { if (it.z > this.camZ + 30) it.z -= 230; else if (it.z < this.camZ - 205) it.z += 230; const lane = Math.max(0, Math.min(1, (Math.abs(it.x) - 7) / 19)); const base = -7 + 2 + lane * lane * 14;
        e.set(it.tilt, it.r, it.tilt * 0.5); q.setFromEuler(e); const clear = this.mode === 'hub' && Math.hypot(it.x, it.z + 6) < 26; v.set(it.x, base + (it.y > 2 ? it.y + Math.sin(this.t + it.bob) * 0.8 : it.y), it.z); s.setScalar(clear ? 0.0001 : it.s); m.compose(v, q, s); d.mesh.setMatrixAt(i, m); }); d.mesh.instanceMatrix.needsUpdate = true; } }
  // ---------- per-frame ----------
  render(dt, game, run) { this.t += dt; this.U.uTime.value = this.t; this.grade.uniforms.uTime.value = this.t; const cam = this.camera;
    if (run) { this.mode = 'run'; this.setWorld(run.w); } else this.mode = 'hub';
    const off = this.mode === 'hub' && innerWidth > 1100 ? Math.round((Math.min(640, innerWidth - 460) + 14 - 86) / 2) : 0; if (off !== this._off) { this._off = off; if (off) cam.setViewOffset(innerWidth, innerHeight, off, 0, innerWidth, innerHeight); else cam.clearViewOffset(); }
    this.ark.visible = this.mode === 'hub'; this.sub.visible = true;
    let subX = 0, subZ = 0;
    if (this.mode === 'run') { subX = run.x; subZ = -run.d; this.sub.position.set(subX, Math.sin(this.t * 2) * 0.12, subZ); this.sub.rotation.set(0.04 * Math.sin(this.t * 1.3), -run.vx * 0.03, -run.vx * 0.05);
      const tx = subX * 0.55, tz = subZ + 13.5; cam.position.lerp(v3(tx, 7.6, tz), Math.min(1, dt * 6)); if (Math.abs(cam.position.z - tz) > 30) cam.position.set(tx, 7.6, tz);
      cam.lookAt(subX * 0.75, 0.2, subZ - 14); this.camZ = subZ;
      this.prop.rotation.z += dt * (12 + (run.boss ? 0 : 18)); this.pal.visible = !!game.companion; if (game.companion) { this.pal.position.set(-2.2 + Math.sin(this.t * 1.7) * 0.3, 0.4 + Math.sin(this.t * 2.3) * 0.3, 0.4); this.palBody.material.color.set(game.companion === 'dolphin' ? 0x8fb8d8 : game.companion === 'turtle' ? 0x7fdc8a : 0xffd166); }
      this.shield.material.opacity = Math.max(0, this.shield.material.opacity - dt * 1.5);
      if (Math.random() < dt * 30) this.emit(subX + rnd(-0.2, 0.2), 0, subZ + 1.9, 1, 0xcff6ff, 1.2, 1.2, 0.18, 1.5);
      this.syncRun(run, dt);
    } else { // hub: orbit the Ark
      this.sub.position.set(4.5 + Math.sin(this.t * 0.6) * 1.5, 1.5 + Math.sin(this.t) * 0.4, -1.5 + Math.cos(this.t * 0.6) * 1.5); this.sub.rotation.set(0, this.t * 0.6 + Math.PI / 2, Math.sin(this.t) * 0.1); this.prop.rotation.z += dt * 10; this.pal.visible = false;
      const a = this.t * 0.06; cam.position.set(Math.sin(a) * 23, 5.5 + Math.sin(this.t * 0.2), -6 + Math.cos(a) * 23); cam.lookAt(0, 1, -6); this.camZ = -6; this.arkProp.rotation.x += dt * 1.2;
      this.gloom.count = this.eyeW.count = this.eyeP.count = this.shots.count = this.bul.count = this.chest.count = this.critter.count = this.critHalo.count = 0; this.boss.visible = false; this.beam.material.opacity = 0;
      if (Math.random() < dt * 6) this.emit(rnd(-6, 6), -1, -6 + rnd(-2, 2), 1, 0xcff6ff, 0.8, 3, 0.2, 1.2); }
    if (this.shake > 0) { cam.position.x += rnd(-1, 1) * this.shake; cam.position.y += rnd(-1, 1) * this.shake; this.shake = Math.max(0, this.shake - dt * 2.5); }
    this.hurt = Math.max(0, this.hurt - dt * 2); this.grade.uniforms.uHurt.value = this.hurt;
    // environment follows camera
    const snap = this.cell; this.floor.position.x = 0; this.floor.position.z = Math.round((this.camZ - 70) / snap) * snap; this.floorU.uOff.value.set(this.floor.position.x, this.floor.position.z);
    this.sky.position.copy(cam.position); this.snowU.uCam.value.copy(cam.position); this.sun.position.set(cam.position.x + 6, 30, this.camZ + 8); this.sun.target.position.set(0, -7, this.camZ - 20);
    this.subLight.position.set(this.sub.position.x, this.sub.position.y + 1, this.sub.position.z - 3);
    this.rays.forEach((r, i) => { const u = r.userData; r.position.set(u.x, 14, this.camZ + u.z); r.lookAt(cam.position.x, 14, cam.position.z); r.rotateZ(-0.25); r.material.opacity = (0.07 + 0.06 * Math.sin(this.t * 0.4 + u.ph)) * (this.world === 6 ? 0.6 : 1); if (r.position.z > cam.position.z) u.z -= 90; });
    this.fishD.forEach((f, i) => { const t = this.t * 2.2 * f.dir + f.cz; let x = ((f.cx + this.t * 2.5 * f.dir + 60) % 120 + 120) % 120 - 60; if (Math.abs(x) < 9) x += Math.sign(x || 1) * 0; v3t.set(x + f.ox, f.cy + f.oy + Math.sin(this.t * 2 + f.ph) * 0.3, this.camZ + f.cz + f.oz);
      if (v3t.z > this.camZ + 15) f.cz -= 90; this._e.set(0, f.dir > 0 ? Math.PI : 0, Math.sin(this.t * 6 + f.ph) * 0.1); this._q.setFromEuler(this._e); this._s.setScalar(1); this._m.compose(v3t, this._q, this._s); this.fish.setMatrixAt(i, this._m); }); this.fish.instanceMatrix.needsUpdate = true;
    this.updDecor(); this.updParticles(dt);
    for (const b of this.bombs) if (b.m.visible) { b.t += dt * 2.2; b.m.scale.setScalar(1 + b.t * 6); b.m.material.opacity = Math.max(0, 0.5 * (1 - b.t)); if (b.t >= 1) b.m.visible = false; }
    this.beam.material.opacity = Math.max(0, this.beam.material.opacity - dt * 0.8);
    if (this.friend.visible) { this.friend.position.y += dt * 3; this.friend.position.z -= dt * 2; this.friend.rotation.y += dt; this.friendT -= dt; if (this.friendT <= 0) this.friend.visible = false; }
    if (this.quality === 'low') this.renderer.render(this.scene, cam); else this.composer.render(); }
  syncRun(run, dt) { const m = this._m, q = this._q, v = this._v, s = this._s, c = this._c; let gi = 0, ei = 0, ci = 0, ki = 0; const sz = -run.d;
    for (const b of run.blobs) { const z = -b.d, y = Math.sin(this.t * 1.5 + b.wob) * 0.4 + (b.big ? 0.5 : 0);
      if (b.kind === 'critter') { if (ki < 12) { q.setFromAxisAngle(Y, Math.sin(this.t * 3 + b.wob) * 0.5 + Math.PI); v.set(b.x, y + 0.3, z); s.setScalar(1); m.compose(v, q, s); this.critter.setMatrixAt(ki, m); q.copy(this.camera.quaternion); s.setScalar(1 + Math.sin(this.t * 4) * 0.1); m.compose(v, q, s); this.critHalo.setMatrixAt(ki, m); ki++; } continue; }
      if (b.kind === 'chest') { if (ci < 12) { q.setFromAxisAngle(Y, this.t + b.wob); v.set(b.x, y, z); s.setScalar(1 + (1 - b.hp / b.max) * 0.2); m.compose(v, q, s); this.chest.setMatrixAt(ci++, m); } continue; }
      if (gi >= 160) continue; const r = b.r * (1 + 0.08 * Math.sin(this.t * 4 + b.wob)); q.identity(); v.set(b.x, y, z); s.set(r, r * 0.9, r); m.compose(v, q, s); this.gloom.setMatrixAt(gi, m);
      const f = b.flash = Math.max(0, (b.flash || 0) - dt * 6); c.set(b.kind === 'gold' ? 0xffc83d : b.big ? 0x5a2a8a : 0x6a2fa0); c.lerp(WHITE, f * 0.8); this.gloom.setColorAt(gi, c); gi++;
      const lx = Math.max(-1, Math.min(1, (run.x - b.x) * 0.1)); for (const sx of [-1, 1]) { if (ei >= 320) break; v.set(b.x + sx * 0.36 * r, y + 0.28 * r, z + 0.8 * r); s.setScalar(0.24 * r); m.compose(v, IQ, s); this.eyeW.setMatrixAt(ei, m); v.x += lx * 0.08 * r; v.z += 0.17 * r; v.y -= 0.03 * r; s.setScalar(0.12 * r); m.compose(v, IQ, s); this.eyeP.setMatrixAt(ei, m); ei++; } }
    this.gloom.count = gi; this.eyeW.count = this.eyeP.count = ei; this.chest.count = ci; this.critter.count = this.critHalo.count = ki;
    for (const x of [this.gloom, this.eyeW, this.eyeP, this.chest, this.critter, this.critHalo]) x.instanceMatrix.needsUpdate = true; if (this.gloom.instanceColor) this.gloom.instanceColor.needsUpdate = true;
    let si = 0; for (const sh of run.shots) { if (si >= 600) break; const tg = sh.tg; const a = Math.atan2(tg.x - sh.x, -(tg.d - sh.d)); q.setFromAxisAngle(Y, a); v.set(sh.x, 0.1, -sh.d); s.set(0.24, 0.24, 1.1); m.compose(v, q, s); this.shots.setMatrixAt(si++, m); } this.shots.count = si; this.shots.instanceMatrix.needsUpdate = true;
    let bi = 0; for (const u of run.bullets) { if (bi >= 300) break; v.set(u.x, 0.2, -u.d); s.setScalar(0.42 + Math.sin(this.t * 10 + bi) * 0.06); m.compose(v, IQ, s); this.bul.setMatrixAt(bi++, m); } this.bul.count = bi; this.bul.instanceMatrix.needsUpdate = true;
    const B = run.boss; this.boss.visible = !!B; if (B) { const R = B.r; this.boss.position.set(B.x, 1.2 + Math.sin(this.t) * 0.5, -B.d); this.bossBody.scale.set(R, R * 0.92, R); this.core.position.set(0, 0, 0); this.core.scale.setScalar(R * (0.55 + 0.45 * (1 - B.hp / B.max)));
      const fc = B.friend >= 0 ? FRIENDS[B.friend].color : 0xffffff; this.core.material.color.set(fc); this.core.material.opacity = 0.25 + 0.6 * (1 - B.hp / B.max);
      this.bossMat.emissive.set(B.final ? 0x8a0a3a : 0x5a1080); this.bossMat.emissiveIntensity = 0.7 + Math.max(0, (B.flash || 0)) * 2; B.flash = Math.max(0, (B.flash || 0) - dt * 5); this.bossMat.opacity = 1;
      this.bossBody.material.transparent = false; this.tent.forEach((arm, k) => arm.forEach((sp, j) => { const a = k / 6 * 6.283 + Math.sin(this.t * 1.5 + k) * 0.4, rr = R * (0.9 + j * 0.35); sp.position.set(Math.cos(a) * rr, -R * 0.4 - j * 0.25 + Math.sin(this.t * 2 + j * 0.6 + k) * 0.4, Math.sin(a) * rr * 0.6); sp.scale.setScalar(R * 0.5); }));
      this.bossEyes.forEach((e, i) => { e.position.set((i ? 1 : -1) * 0.36 * R, 0.25 * R, 0.85 * R); e.scale.setScalar(R); }); }
    for (const f of run.fx) this.onFx(f, run); run.fx.length = 0; }
  onFx(f, run) { const z = -f.d, W = WORLDS[run.w];
    switch (f.t) { case 'pop': this.emit(f.x, 0.3, z, f.big ? 40 : 18, f.kind === 'gold' ? 0xffd166 : 0xd29bff, f.big ? 9 : 6, 0.7, 0.55); this.emit(f.x, 0.3, z, 8, 0xffffff, 3, 0.5, 0.35); this.emit(f.x, 0.3, z, 4, W.accent, 2, 1.2, 0.5, 2); break;
      case 'hit': { const b = run.blobs.find(b => Math.abs(b.x - f.x) < 1.6 && Math.abs(b.d - f.d) < 1.6); if (b) b.flash = 1; if (run.boss && Math.abs(run.boss.d - f.d) < run.boss.r + 1) run.boss.flash = 1; this.emit(f.x, 0.2, z, f.crit ? 8 : 3, f.crit ? 0xfff1a8 : 0xbffcff, f.crit ? 5 : 3, 0.3, f.crit ? 0.6 : 0.35); break; }
      case 'bonk': case 'hurt': this.shake = Math.max(this.shake, 0.35); this.hurt = 0.6; if (f.t === 'bonk') this.emit(f.x, 0.3, z, 20, 0x9a5ad0, 7, 0.6, 0.5); break;
      case 'critter': this.emit(f.x, 0.3, z, 24, 0xfff1a8, 5, 0.9, 0.5, 2); break;
      case 'shield': this.shield.material.opacity = 0.5; break;
      case 'bomb': { const b = this.bombs.find(b => !b.m.visible); if (b) { b.m.visible = true; b.t = 0; b.m.position.set(f.x, 0.3, z); } this.emit(f.x, 0.3, z, 30, 0x9be7ff, 8, 0.6, 0.6); break; }
      case 'beam': this.beam.position.set(f.x, 0.3, -run.d - 30); this.beam.material.opacity = 0.9; this.shake = 0.5; break;
      case 'od': this.emit(run.x, 0, -run.d, 40, 0xffd166, 8, 0.6, 0.5); break;
      case 'boss': this.shake = 0.6; break;
      case 'bossdown': this.shake = 1; this.emit(f.x, 1, z, 160, 0xd29bff, 14, 1.4, 0.9); this.emit(f.x, 1, z, 80, 0xfff1a8, 9, 1.8, 0.7, 2);
        if (f.friend >= 0) { const F = FRIENDS[f.friend]; this.friend.visible = true; this.friendT = 4; this.friend.position.set(f.x, 1, z); this.friendBody.material.color.set(F.color); this.friendBody.material.emissive.set(F.color); this.emit(f.x, 1, z, 60, F.color, 6, 2, 0.8, 1); } break; } }
}
const Y = new THREE.Vector3(0, 1, 0), WHITE = new THREE.Color(0xffffff), IQ = new THREE.Quaternion(); const v3t = new THREE.Vector3(); const v3 = (x, y, z) => v3t.set(x, y, z);
