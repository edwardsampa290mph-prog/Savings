#!/usr/bin/env python3
"""Rasterize the K10 Daily mark to PWA PNG sizes."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

OUT = Path("/workspace/public/icons")
OUT.mkdir(parents=True, exist_ok=True)

INK = (12, 13, 12, 255)
SAGE = (126, 168, 148, 255)
PAPER = (232, 230, 225, 255)


def mark(size: int, pad_ratio: float = 0.18) -> Image.Image:
    img = Image.new("RGBA", (size, size), INK)
    draw = ImageDraw.Draw(img)
    r = int(size * 0.22)
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=r, fill=INK)

    pad = size * pad_ratio
    inner = size - pad * 2
    x0, y0 = pad, pad
    bar_w = inner * 0.14
    gap = inner * 0.12
    bar_h = inner * 0.62
    bar_y = y0 + (inner - bar_h) / 2
    draw.rounded_rectangle(
        (x0, bar_y, x0 + bar_w, bar_y + bar_h),
        radius=max(2, int(size * 0.025)),
        fill=SAGE,
    )
    ring_left = x0 + bar_w + gap
    ring_right = x0 + inner
    ring_top = bar_y
    ring_bot = bar_y + bar_h
    stroke = max(3, int(size * 0.07))
    draw.rounded_rectangle(
        (ring_left, ring_top, ring_right, ring_bot),
        radius=int((ring_bot - ring_top) / 2),
        outline=PAPER,
        width=stroke,
    )
    return img


def save(img: Image.Image, name: str, size: int) -> None:
    out = img.resize((size, size), Image.Resampling.LANCZOS)
    # Slight inner shadow for depth at large sizes
    if size >= 192:
        glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        gdraw = ImageDraw.Draw(glow)
        inset = int(size * 0.08)
        gdraw.ellipse(
            (inset, inset, size - inset, size - inset),
            fill=(126, 168, 148, 28),
        )
        glow = glow.filter(ImageFilter.GaussianBlur(radius=size * 0.08))
        out = Image.alpha_composite(out, glow)
    path = OUT / name
    out.save(path, "PNG", optimize=True)
    print(path, out.size)


save(mark(1024, 0.16), "icon-192.png", 192)
save(mark(1024, 0.16), "icon-512.png", 512)
save(mark(1024, 0.24), "icon-512-maskable.png", 512)
