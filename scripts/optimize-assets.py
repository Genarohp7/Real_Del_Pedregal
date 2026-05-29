from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1] / "public" / "assets"
ORIGINALS = ROOT / "originals"
OPTIMIZED = ROOT / "optimized"


def save_png(source: str, target: str, max_size: int) -> None:
    image = Image.open(ORIGINALS / source)
    image.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
    image.save(OPTIMIZED / target, optimize=True)


def save_webp(source: str, target: str, size: tuple[int, int]) -> None:
    image = Image.open(ORIGINALS / source).convert("RGB")
    image.thumbnail(size, Image.Resampling.LANCZOS)
    image.save(OPTIMIZED / target, "WEBP", quality=82, method=6)


def main() -> None:
    OPTIMIZED.mkdir(parents=True, exist_ok=True)

    save_png("logo-real-del-pedregal-completo.png", "logo-real-del-pedregal-completo.png", 1400)
    save_png("logo-real-del-pedregal-monograma.png", "logo-real-del-pedregal-monograma.png", 1100)
    save_webp("pedregal-salon-arcos.jpg", "eventos-corporativos-real-del-pedregal.webp", (1800, 1400))
    save_webp("pedregal-montaje-jardin.jpg", "eventos-sociales-real-del-pedregal.webp", (1800, 1400))
    save_webp("pedregal-montaje-jardin.jpg", "hero-poster-real-del-pedregal.webp", (2200, 1400))

    print("Optimized assets ready.")


if __name__ == "__main__":
    main()
