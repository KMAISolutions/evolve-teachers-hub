import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-primary/90 to-accent/70" />
            <span className="font-semibold">Teachers Evolve</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            A dynamic platform helping educators evolve beyond burnout through
            human-centered, socio-psychological support.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-primary" to="/approach">Our Evolving Approach</Link></li>
            <li><Link className="hover:text-primary" to="/work">On-the-Ground Work</Link></li>
            <li><Link className="hover:text-primary" to="/blog">Reflections</Link></li>
            <li><Link className="hover:text-primary" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Sessions & Events</h4>
          <ul className="space-y-2 text-sm">
            <li>Evolve Sessions</li>
            <li>Peer Evolution Circles</li>
            <li>School Visit Programs</li>
            <li>Leadership Workshops</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Get in touch</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: hello@teachersevolve.org</li>
            <li>Social: @teachersevolve</li>
            <li><Link className="hover:text-primary" to="/booking">Book an Evolve Session</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        <div className="mb-2">
          © {new Date().getFullYear()} Teachers Evolve. All rights reserved.
        </div>
        <div>
          Powered By: <a href="https://www.kwenamai.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">Kwena Moloto A.I Solutions</a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
