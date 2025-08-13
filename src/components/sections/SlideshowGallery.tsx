import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import hero from "@/assets/hero-teachers-evolve.jpg";
import ground from "@/assets/on-the-ground.jpg";
import circle from "@/assets/peer-circle.jpg";
import portrait from "@/assets/palesa-portrait.jpg";

const images = [
  { src: hero, alt: "Palesa facilitating teacher circle in a school hall" },
  { src: ground, alt: "On-the-ground visit at a school classroom" },
  { src: circle, alt: "Peer Evolution Circle in session" },
  { src: portrait, alt: "Portrait of Palesa Motaung" },
];

export default function SlideshowGallery() {
  return (
    <section id="gallery" className="container py-12 md:py-16" aria-labelledby="gallery-heading">
      <div className="max-w-2xl mx-auto mb-6 text-center">
        <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold mb-2">Gallery</h2>
        <p className="text-muted-foreground">Authentic moments from school visits, circles, and on-the-ground work.</p>
      </div>

      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((img, idx) => (
              <CarouselItem key={idx}>
                <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-[var(--shadow-elegant)]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious aria-label="Previous image" />
          <CarouselNext aria-label="Next image" />
        </Carousel>
      </div>
    </section>
  );
}
