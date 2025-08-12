import { Helmet } from "react-helmet-async";
import ground from "@/assets/on-the-ground.jpg";

const WorkPage = () => {
  const title = "On-the-Ground Work | Teachers Evolve";
  const description =
    "School visits, educator listening sessions, and safe spaces across regions to support teacher evolution.";

  return (
    <main className="container py-12 md:py-16">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://teachersevolve.org/work" />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">On-the-Ground Work</h1>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img src={ground} alt="Palesa visiting a school classroom" className="w-full rounded-lg border" loading="lazy" />
        <div>
          <p className="text-muted-foreground mb-4">
            We partner with schools to host Evolve Sessions, peer circles, and reflective dialogues — meeting educators where they are.
          </p>
          <div className="rounded-lg border p-4">
            <h2 className="font-semibold mb-2">Regions Served</h2>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li>Gauteng</li>
              <li>North West</li>
              <li>Mpumalanga</li>
              <li>Limpopo</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkPage;
