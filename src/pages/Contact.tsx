import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ContactPage = () => {
  const title = "Contact | Teachers Evolve";
  const description = "Reach out for sessions, partnerships, or media.";

  return (
    <main className="container py-12 md:py-16">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://teachersevolve.org/contact" />
      </Helmet>

      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact</h1>
        <p className="text-muted-foreground mb-6">We'd love to hear from you. We'll respond within 2 business days.</p>

        <form className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="you@example.org" />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} placeholder="How can we support you?" />
          </div>
          <div>
            <Button type="submit">Send message</Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;
