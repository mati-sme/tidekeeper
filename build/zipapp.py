import os, sys, zipfile, stat
src, out = sys.argv[1], sys.argv[2]
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED, compresslevel=6) as z:
    for root, dirs, files in os.walk(src, followlinks=False):
        for name in sorted(dirs + files):
            p = os.path.join(root, name); st = os.lstat(p)
            if stat.S_ISLNK(st.st_mode):
                zi = zipfile.ZipInfo(p); zi.create_system = 3; zi.external_attr = (0o120755 << 16)
                z.writestr(zi, os.readlink(p), compress_type=zipfile.ZIP_STORED)
                if name in dirs: dirs.remove(name)
            elif stat.S_ISDIR(st.st_mode):
                zi = zipfile.ZipInfo(p + '/'); zi.create_system = 3; zi.external_attr = (0o40755 << 16) | 0x10; z.writestr(zi, b'')
            else:
                zi = zipfile.ZipInfo.from_file(p, p); zi.create_system = 3; zi.external_attr = (st.st_mode & 0xFFFF) << 16; zi.compress_type = zipfile.ZIP_DEFLATED
                with open(p, 'rb') as f: z.writestr(zi, f.read())
