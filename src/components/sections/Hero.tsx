import { useState } from "react";
import heroImage from "@/assets/hero-teachers-evolve.jpg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
const Hero = () => {
  const [open, setOpen] = useState(false);
  return <section id="home" className="relative overflow-hidden">
      <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
        <img src={heroImage} alt="Palesa facilitating a circle of teachers in a school hall" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/20" />

        <div className="relative container py-24 md:py-32 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground mb-4">A platform for educator well-being & growth</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Helping Teachers <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Evolve</span> Beyond Burnout
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              Teachers Evolve is a human-centered, socio-psychological approach to educator support — meeting teachers where they are, on the ground, and building pathways to sustainable growth.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" variant="default" className="hover-scale" asChild>
                <a href="/#schedule" aria-label="Book an Evolve Session">Book an Evolve Session</a>
              </Button>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogTitle>About Teachers Evolve</DialogTitle>
                  <div className="aspect-video">
                    <iframe className="h-full w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Teachers Evolve intro video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-primary/40 to-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 blur-3xl" />
      </div>
    </section>;
};
export default Hero;