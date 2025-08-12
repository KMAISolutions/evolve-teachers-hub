import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ApproachTabs = () => {
  return (
    <section className="container py-16 md:py-24" aria-labelledby="approach-heading">
      <div className="max-w-2xl mb-8">
        <h2 id="approach-heading" className="text-3xl md:text-4xl font-bold mb-3">Our Evolving Approach</h2>
        <p className="text-muted-foreground">A holistic, humanistic, and socio-psychological framework designed to support teachers beyond the classroom pressures.</p>
      </div>

      <Tabs defaultValue="emotional" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="emotional">Emotional & Mental Evolution</TabsTrigger>
          <TabsTrigger value="brilliance">Burnout to Brilliance Journey</TabsTrigger>
          <TabsTrigger value="barriers">Overcoming Social Barriers</TabsTrigger>
          <TabsTrigger value="circles">Peer Evolution Circles</TabsTrigger>
        </TabsList>

        <TabsContent value="emotional">
          <Card>
            <CardHeader>
              <CardTitle>Emotional & Mental Evolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>We create safe spaces for educators to process emotional fatigue, stress, and identity challenges while building emotional agility.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Guided reflective practices</li>
                <li>Mind-body grounding and self-regulation</li>
                <li>Strength-based identity building</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="brilliance">
          <Card>
            <CardHeader>
              <CardTitle>Burnout to Brilliance Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>A structured journey to move from depletion to sustainable energy and clarity.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Values and purpose realignment</li>
                <li>Energy management and boundaries</li>
                <li>Practice-based micro-habits</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="barriers">
          <Card>
            <CardHeader>
              <CardTitle>Overcoming Social & Contextual Barriers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Addressing the realities of schools and communities with practical, context-grounded tools.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Community-informed problem solving</li>
                <li>Trauma-informed school practices</li>
                <li>Leadership engagement and advocacy</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="circles">
          <Card>
            <CardHeader>
              <CardTitle>Networking & Peer Evolution Circles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Collective wisdom and connection through facilitated circles that reduce isolation and spark innovation.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Facilitated sharing and support</li>
                <li>Peer mentorship and partnerships</li>
                <li>Collaborative action labs</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ApproachTabs;
