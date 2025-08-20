import { Helmet } from "react-helmet-async";
import Hero from "@/components/sections/Hero";
import EvolveSessionsTabs from "@/components/sections/EvolveSessionsTabs";
import BookingForm from "@/components/sections/BookingForm";
import SlideshowGallery from "@/components/sections/SlideshowGallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import palesaPortrait from "@/assets/palesa-portrait.jpg";
const Index = () => {
  const title = "Teachers Evolve | Helping Teachers Evolve Beyond Expectations";
  const description = "Teachers Evolve supports educator well-being with on-the-ground Evolve Sessions, peer circles, and a human-centered approach.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Teachers Evolve",
    url: "https://teachersevolve.org",
    description,
    founder: {
      "@type": "Person",
      name: "Palesa Motaung",
      jobTitle: "Founder & CEO"
    },
    sameAs: ["https://www.instagram.com/teachersevolve", "https://www.linkedin.com/company/teachers-evolve"]
  };
  return <main>
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


      <section id="about" className="container py-12 md:py-16">
        <div className="rounded-xl border bg-card p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-1 order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Palesa Motaung</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Founder & CEO • Teacher Support Specialist", "Teacher Advocate", "Teacher Leader", "Teacher Coach", "Experienced Educator"].map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
            </div>
            <div className="space-y-4 text-foreground/90">
              <p>
                Palesa Motaung founded Teachers Evolve as a healing sanctuary for educators experiencing burnout, emotional fatigue, and the weight of systemic challenges. With over 12 years of educational leadership, she witnessed the silent suffering of teachers and felt called to create something deeper than traditional professional development.
              </p>
              <p>
                Her approach is deeply personal and humanistic. Palesa doesn't just deliver workshops— she visits schools, sits with teachers in circles, listens to their stories, and creates safe spaces for authentic healing. Her work addresses the whole person: emotional wounds, mental exhaustion, and the social barriers that make teaching feel isolating.
              </p>
              <p>
                Through her on-the-ground healing sessions, Palesa has personally supported over 500 educators, helping them process trauma, build resilience, and rediscover the joy that brought them to teaching. Her holistic, socio-psychological approach has transformed not just individual teachers, but entire school communities.
              </p>
            </div>
          </div>
          <div className="relative md:order-2 order-1">
            <img src={palesaPortrait} alt="Palesa Motaung portrait - Teachers Evolve founder" loading="lazy" className="w-full h-auto rounded-xl shadow-[var(--shadow-elegant)] object-cover" />
          </div>
        </div>
      </section>

      <div id="evolve-sessions">
        <EvolveSessionsTabs />
      </div>

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
    </main>;
};
export default Index;