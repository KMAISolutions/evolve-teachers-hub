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

      <h1 className="text-3xl md:text-4xl font-bold mb-2">Evolve Sessions</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        Select a service below to learn more and book your session.
      </p>

      <EvolveSessionsTabs />

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Schedule Your Evolve Session</h2>
        <Button asChild className="bg-accent text-accent-foreground hover:opacity-90">
          <Link to="/booking">Go to Booking</Link>
        </Button>
      </div>
    </main>
  );
};

export default EvolveSessionsPage;
