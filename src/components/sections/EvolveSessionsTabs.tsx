import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2">
        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
        <span className="text-muted-foreground">{item}</span>
      </li>
    ))}
  </ul>
);

const SessionCard = ({
  title,
  duration,
  description,
  features,
  price,
}: {
  title: string;
  duration: string;
  description: string;
  features: string[];
  price: string;
}) => (
  <Card className="shadow-[var(--shadow-elegant)]">
    <CardHeader>
      <CardTitle className="text-2xl text-primary">{title}</CardTitle>
      <div className="mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span>{duration}</span>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-foreground/80">{description}</p>
      <div>
        <p className="font-semibold text-primary mb-2">What's Included:</p>
        <FeatureList items={features} />
      </div>
      <p className="mt-6 text-lg font-semibold text-primary">{price}</p>
      <div className="flex justify-center">
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/#schedule" aria-label="Book this service">Book This Service</Link>
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default function EvolveSessionsTabs() {
  return (
    <section id="evolve-sessions" className="container py-12 md:py-16" aria-label="Evolve Sessions">

      <div className="max-w-2xl mx-auto mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Available Services</h2>
      </div>

      <Tabs defaultValue="individual" className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-auto gap-1 md:gap-2 p-1 md:p-2">
          <TabsTrigger value="individual" className="py-2 px-2 text-xs md:py-3 md:px-4 md:text-base">Individual Sessions</TabsTrigger>
          <TabsTrigger value="group" className="py-2 px-2 text-xs md:py-3 md:px-4 md:text-base">Group Circles</TabsTrigger>
          <TabsTrigger value="school" className="py-2 px-2 text-xs md:py-3 md:px-4 md:text-base">School-Wide Programs</TabsTrigger>
        </TabsList>

        <TabsContent value="individual">
          <SessionCard
            title="Individual Healing Sessions"
            duration="60–90 minutes"
            description="One-on-one healing sessions focused on personal burnout recovery and emotional restoration."
            features={[
              "Personal trauma processing",
              "Stress management techniques",
              "Emotional regulation tools",
              "Self-care planning",
            ]}
            price="Contact for pricing"
          />
        </TabsContent>

        <TabsContent value="group">
          <SessionCard
            title="Group Healing Circles"
            duration="2–3 hours"
            description="Facilitated group sessions for 8–15 teachers, creating safe spaces for shared healing and connection."
            features={[
              "Circle sharing protocols",
              "Collective trauma processing",
              "Peer support building",
              "Community healing rituals",
            ]}
            price="From R2,500 per session"
          />
        </TabsContent>

        <TabsContent value="school">
          <SessionCard
            title="School-Wide Healing Programs"
            duration="Full day or multi-day"
            description="Comprehensive on-site healing programs addressing systemic stress and building resilient communities."
            features={[
              "Full staff healing retreat",
              "Leadership coaching",
              "Policy consultation",
              "Follow-up support",
            ]}
            price="Custom pricing"
          />
        </TabsContent>
      </Tabs>
    </section>
  );
}
