import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    title: "From Burnout to Evolving: A Teacher's Reflection",
    excerpt:
      "What shifts when we name what we're carrying and choose to evolve together?",
  },
  {
    title: "Peer Evolution Circles: Designing for Connection",
    excerpt:
      "Why circles matter for educator well-being and professional growth.",
  },
];

const BlogPage = () => {
  const title = "Reflections | Teachers Evolve";
  const description = "Articles and reflections on teacher evolution and well-being.";

  return (
    <main className="container py-12 md:py-16">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://teachersevolve.org/blog" />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">Reflections</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <Card key={p.title} className="hover-scale">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
