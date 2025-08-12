import { Helmet } from "react-helmet-async";
import ApproachTabs from "@/components/sections/ApproachTabs";

const ApproachPage = () => {
  const title = "Our Evolving Approach | Teachers Evolve";
  const description =
    "Holistic, humanistic, socio-psychological framework: Emotional & Mental Evolution, Burnout to Brilliance, Social Barriers, Peer Evolution Circles.";

  return (
    <main>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://teachersevolve.org/approach" />
      </Helmet>
      <ApproachTabs />
    </main>
  );
};

export default ApproachPage;
