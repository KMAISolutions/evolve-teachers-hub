import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import hero from "@/assets/hero-teachers-evolve.jpg";
import ground from "@/assets/on-the-ground.jpg";
import circle from "@/assets/peer-circle.jpg";
import portrait from "@/assets/palesa-portrait.jpg";
import { useState } from "react";

const images = [
  { src: hero, alt: "Palesa facilitating teacher circle in a school hall" },
  { src: ground, alt: "On-the-ground visit at a school classroom" },
  { src: circle, alt: "Peer Evolution Circle in session" },
  { src: portrait, alt: "Portrait of Palesa Motaung" },
];

const Gallery = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="container py-16 md:py-24" aria-labelledby="gallery-heading">
      <div className="max-w-2xl mb-8">
        <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold mb-3">Photo & Event Gallery</h2>
        <p className="text-muted-foreground">Moments from school visits, sessions, and educator circles.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <Dialog key={i} open={openIndex === i} onOpenChange={(o) => setOpenIndex(o ? i : null)}>
            <DialogTrigger asChild>
              <button className="group relative overflow-hidden rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <img src={img.src} alt={img.alt} loading="lazy" className="h-32 md:h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <img src={img.src} alt={img.alt} className="w-full h-auto" />
              <p className="text-xs text-muted-foreground">{img.alt}</p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
