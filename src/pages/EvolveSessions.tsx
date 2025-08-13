import { Helmet } from "react-helmet-async";
import EvolveSessionsTabs from "@/components/sections/EvolveSessionsTabs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EvolveSessionsPage = () => {
  const title = "Evolve Sessions | Teachers Evolve";
  const description = "Explore Individual Sessions, Group Circles, and School-Wide Programs designed to help educators evolve beyond burnout.";

  return (
    <main className="container py-12 md:py-16">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://teachersevolve.org/evolve-sessions" />
      </Helmet>

      <EvolveSessionsTabs />
    </main>
  );
};

export default EvolveSessionsPage;
