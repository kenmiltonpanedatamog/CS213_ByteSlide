import os
import shutil

indices_to_keep = {1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 13, 15, 17, 18, 19, 20, 22, 24, 26, 27, 28, 29, 34, 35, 36, 37, 38, 44, 46, 49, 51, 55, 93, 101, 102, 109, 116, 118, 124, 151, 152, 153, 154, 170, 173, 175, 182, 188, 189, 190, 192, 193, 196, 201, 202, 207, 208, 210, 211, 216, 223, 228, 238, 244, 251, 252, 289, 290, 291, 293, 303, 305, 306, 308, 311, 318, 319, 337, 340, 344, 351, 352, 353, 354, 360, 361, 364, 370, 399, 406, 414, 415, 441, 443, 446, 447, 451, 455, 471, 500}

print(f"Keeping {len(indices_to_keep)} items.")

base_dir = '/home/kmpt/Documents/code repos/CS213_ByteSlide'
concepts_file = os.path.join(base_dir, '500-computer-concepts.txt')
images_dir = os.path.join(base_dir, 'images')

with open(concepts_file, 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    try:
        idx = int(line.split('.')[0])
        if idx in indices_to_keep:
            new_lines.append(line)
    except ValueError:
        pass

with open(concepts_file, 'w') as f:
    f.writelines(new_lines)

removed_count = 0
for img_file in os.listdir(images_dir):
    if img_file.endswith('.jpg'):
        idx = int(img_file.split('.')[0])
        if idx not in indices_to_keep:
            os.remove(os.path.join(images_dir, img_file))
            removed_count += 1
            
print(f"Removed {removed_count} images.")
