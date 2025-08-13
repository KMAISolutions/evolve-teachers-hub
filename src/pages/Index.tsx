import { Helmet } from "react-helmet-async";
import Hero from "@/components/sections/Hero";
import EvolveSessionsTabs from "@/components/sections/EvolveSessionsTabs";
import BookingForm from "@/components/sections/BookingForm";
import SlideshowGallery from "@/components/sections/SlideshowGallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const title = "Teachers Evolve | Helping Teachers Evolve Beyond Burnout";
  const description =
    "Teachers Evolve supports educator well-being with on-the-ground Evolve Sessions, peer circles, and a human-centered approach.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Teachers Evolve",
    url: "https://teachersevolve.org",
    description,
    founder: {
      "@type": "Person",
      name: "Palesa Motaung",
      jobTitle: "Founder & CEO",
    },
    sameAs: [
      "https://www.instagram.com/teachersevolve",
      "https://www.linkedin.com/company/teachers-evolve",
    ],
  };

  return (
    <main>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://teachersevolve.org/" />
        <meta name="keywords" content="teacher evolution, educator growth, teacher support, burnout, peer circles" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Hero />

      <section className="container py-8 md:py-10">
        <blockquote className="mx-auto max-w-3xl text-center text-lg md:text-xl text-foreground/90 italic">
          "When we create safe spaces for teachers to heal, we're not just helping individuals— we're healing the heart of education itself. Every teacher who finds their wholeness again touches countless lives with renewed purpose and joy."
          <span className="mt-3 block text-sm font-medium not-italic text-muted-foreground">— Palesa Motaung, Founder & Healing Facilitator</span>
        </blockquote>
      </section>

      <div id="evolve-sessions">
        <EvolveSessionsTabs />
      </div>

      <section id="about" className="container py-12 md:py-16">
        <div className="rounded-lg border bg-card p-6 md:p-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">On-the-Ground Work</h3>
            <p className="text-muted-foreground">
              Palesa visits schools, sits with educators, listens deeply, and facilitates safe spaces for connection, networking, and growth.
            </p>
          </div>
          <ul className="text-sm text-muted-foreground grid grid-cols-2 gap-2">
            <li>Gauteng</li>
            <li>North West</li>
            <li>Mpumalanga</li>
            <li>Limpopo</li>
          </ul>
        </div>
      </section>

      <SlideshowGallery />

      <section id="schedule" className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Schedule A Session</h2>
          <p className="text-muted-foreground mb-6">
            Fill out the form and Palesa will personally reach out to discuss your needs.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Booking details</CardTitle>
            </CardHeader>
            <CardContent>
              <BookingForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Index;
