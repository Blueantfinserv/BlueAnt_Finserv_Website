import os
import glob
from PIL import Image

def optimize_raster(input_path, output_path, max_width=None, quality=85):
    try:
        with Image.open(input_path) as im:
            # Handle alpha channel
            if im.mode not in ('RGB', 'RGBA'):
                if 'transparency' in im.info or im.mode in ('LA', 'P'):
                    im = im.convert('RGBA')
                else:
                    im = im.convert('RGB')
            
            # Resize if max_width specified
            if max_width and im.width > max_width:
                height = int(im.height * (max_width / im.width))
                im = im.resize((max_width, height), Image.Resampling.LANCZOS)
            
            im.save(output_path, 'WEBP', quality=quality, method=4)
            sz_in = os.path.getsize(input_path)
            sz_out = os.path.getsize(output_path)
            return sz_in, sz_out
    except Exception as e:
        print(f"Error converting {input_path}: {e}")
        return None

images_to_convert = [
    # (relative path, max_width, quality)
    ('public/blueAnt.png', 512, 90),
    ('public/Footerlogo.png', 640, 85),
    ('public/01 whatsapp image.png', 800, 85),
    ('public/02 whatsapp.png', 800, 85),
    ('public/03 whatsapp.png', 800, 85),
    ('public/04 whatsapp.png', 800, 85),
    ('public/Rohit Raman.png', 600, 85),
    ('public/Sachin Narang.png', 400, 85),
    ('public/Rahul Kumar.png', 400, 85),
    ('public/Avesh Kumar Prajapati.png', 400, 85),
    ('public/Rajnish Kumar.png', 400, 85),
    ('public/Vishnu Dutt.png', 400, 85),
    ('public/Jitendra Kumar.png', 400, 85),
    ('public/Harsh Pandey.png', 400, 85),
    ('public/Preeti Mahara.png', 400, 85),
    ('public/Monika Soni.png', 400, 85),
    ('public/Vikram_Agarwal.png', 400, 85),
    ('public/Divya_Gupta.jpg', 400, 85),
    ('public/Yogendra_Kumar.png', 400, 85),
    ('public/Mukesh_Kumar.png', 400, 85),
    ('public/Nidhi_Belwal.png', 500, 85),
    ('public/Vikash_Kumar.jpg', 400, 85),
    ('public/ant_3d_coins.png', 800, 85),
    ('public/blueant_phone_mockup_colorful.png', 800, 85),
    ('public/phone-mockup-precize.png', 800, 85),
]

# Also convert all workshop images
for p in glob.glob('public/workshop-*.jpg'):
    images_to_convert.append((p.replace('\\', '/'), 900, 82))

total_orig = 0
total_webp = 0

print(f"{'Image':<40} {'Original':>10} {'WebP':>10} {'Saved %':>10}")
print("-" * 75)

for rel_path, max_w, q in images_to_convert:
    if not os.path.exists(rel_path):
        continue
    base, _ = os.path.splitext(rel_path)
    webp_path = base + '.webp'
    res = optimize_raster(rel_path, webp_path, max_width=max_w, quality=q)
    if res:
        sz_in, sz_out = res
        total_orig += sz_in
        total_webp += sz_out
        saved_pct = (1 - sz_out / sz_in) * 100
        print(f"{os.path.basename(rel_path):<40} {sz_in/1024:>8.1f} KB {sz_out/1024:>8.1f} KB {saved_pct:>9.1f}%")

print("=" * 75)
print(f"TOTAL: Original {total_orig/1024/1024:.2f} MB -> WebP {total_webp/1024/1024:.2f} MB (Saved {(1 - total_webp/total_orig)*100:.1f}%)")
