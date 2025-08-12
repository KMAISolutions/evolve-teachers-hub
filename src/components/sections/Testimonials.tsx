import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "I felt seen and energized again. The Evolve Session gave our staff language for what we've been carrying and tools to move forward.",
    author: "Grade Head, Johannesburg",
  },
  {
    quote:
      "Palesa holds space with so much care and professionalism. Our teachers keep asking when the next circle is!",
    author: "Deputy Principal, Pretoria",
  },
  {
    quote:
      "The Burnout to Brilliance journey shifted our culture. Practical, human, and deeply contextual.",
    author: "School Leader, Soweto",
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="testimonials" className="container py-16 md:py-24" aria-labelledby="testimonials-heading">
      <div className="max-w-2xl mb-8">
        <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-3">Testimonials & Impact Stories</h2>
        <p className="text-muted-foreground">Stories from educators who chose to evolve.</p>
      </div>

      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <p className="text-base">“{t.quote}”</p>
                  <p className="mt-4 text-sm text-muted-foreground">— {t.author}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 w-2 rounded-full ${current === i ? "bg-primary" : "bg-muted"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;
