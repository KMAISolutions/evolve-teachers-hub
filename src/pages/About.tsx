import { Helmet } from "react-helmet-async";
import portrait from "@/assets/palesa-portrait.jpg";

const About = () => {
  const title = "About Palesa Motaung | Teachers Evolve";
  const description =
    "Founder & CEO Palesa Motaung: Teacher Support Specialist, Advocate, Leader, Coach, and Experienced Educator.";

  return (
    <main className="container py-12 md:py-16">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://teachersevolve.org/about" />
      </Helmet>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">About the Founder</h1>
          <p className="text-muted-foreground mb-4">
            Palesa Motaung is the Founder & CEO of Teachers Evolve — a Teacher Support
            Specialist, Teacher Advocate, Teacher Leader, Teacher Coach, and
            Experienced Educator.
          </p>
          <p className="text-muted-foreground">
            She works on the ground, visiting schools, speaking to teachers in groups,
            listening to their challenges, and creating safe spaces for connection,
            networking, and growth.
          </p>
        </div>
        <div>
          <img
            src={portrait}
            alt="Portrait of Palesa Motaung"
            className="w-full max-w-md rounded-lg border"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-10">
        <div className="aspect-video rounded-lg border overflow-hidden">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="About Palesa Motaung"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
};

export default About;
