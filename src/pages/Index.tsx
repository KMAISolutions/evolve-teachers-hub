import { Helmet } from "react-helmet-async";
import Hero from "@/components/sections/Hero";
import ApproachTabs from "@/components/sections/ApproachTabs";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";

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
      <ApproachTabs />

      <section className="container py-12 md:py-16">
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

      <Testimonials />
      <Gallery />
    </main>
  );
};

export default Index;
