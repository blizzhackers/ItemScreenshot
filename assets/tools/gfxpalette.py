from PIL import Image, ImageDraw, ImageFont
import os
import struct

def loadPalettes():
    with open("pal.dat", "rb") as f:
        bgr = f.read(3)
        normal = []
        while bgr:
            rgb = [ord(bgr[2]), ord(bgr[1]), ord(bgr[0])]
            basePalette.append(rgb)
            normal.append(rgb)
            bgr = f.read(3)

    with open("invgreybrown.dat", "rb") as f:
        palette = []
        colorIndex = f.read(1)
        while colorIndex:
            palette.append(basePalette[ord(colorIndex)])
            colorIndex = f.read(1)
            if len(palette) >= 256:
                palettes.append(palette)
                palette = []

    palettes.append(normal)

basePalette = []
palettes = []
loadPalettes()

gfxList = os.listdir("dc6")

for gfx in gfxList:
    name = gfx.split(".")[0]

    images          = []
    fileHeader      = []
    framePointers   = []
    frameHeader     = []
    sprite          = []

    with open("dc6/" + gfx, "rb") as f:
        long = f.read(4)
        while len(fileHeader) < 6:
            fileHeader.append(struct.unpack('<i', long)[0])
            long = f.read(4)
        while len(framePointers) < (fileHeader[4] * fileHeader[5]):
            framePointers.append(struct.unpack('<i', long)[0])
            long = f.read(4)
        if (len(framePointers) > 1):
            raise ValueError('Not supporting multiple frames & directions yet :-(.')
        while len(frameHeader) < 7:
            frameHeader.append(struct.unpack('<i', long)[0])
            long = f.read(4)
        frameHeader.append(struct.unpack('<i', long)[0])
        data = f.read(1)
        while data:
            sprite.append(ord(struct.unpack('c', data)[0]))
            data = f.read(1)

    print(name)
    print("File Header:", fileHeader)
    print("Frame Header:", frameHeader)
    print("Sprite:", len(sprite))

    for pIndex in xrange(len(palettes)):
        path = "out/" + name
        if not os.path.isdir(path):
            os.makedirs(path)

        img = Image.new('RGBA', (frameHeader[1], frameHeader[2]))

        index1 = 0
        index2 = 0
        index3 = frameHeader[2] - 1
        index4 = 0
        while index4 < frameHeader[7]:  # for(long index4 = 0; index4 < (long) dc6FrameHeader.length; ++index4)
            index4 += 1
            num1 = sprite[index1]
            index1 += 1
            if (num1 == 128):
                index2 = 0
                index3 -= 1
            elif ((num1 & 128) == 128):
                index2 += (num1 & 127)
            else:
                index5 = 0
                while index5 < num1:  # for(long index5 = 0; index5 < (long) num1; ++index5)
                    index5 += 1
                    num2 = sprite[index1]
                    index1 += 1
                    index4 += 1
                    img.putpixel((index2, index3), (palettes[pIndex][num2][0], palettes[pIndex][num2][1], palettes[pIndex][num2][2], 255))
                    index2 += 1

        img.save(path + "/" + str(pIndex) + ".png")
        images.append(img)

    compilation = Image.new('RGBA', (frameHeader[1] * len(palettes), frameHeader[2]))
    i = 0
    for img in images:
        compilation.paste(img, (i * frameHeader[1], 0))
        i += 1
    compilation.save(path + "/comp.png")








