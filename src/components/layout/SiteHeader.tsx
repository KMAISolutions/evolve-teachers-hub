import { Link, NavLink } from "react-router-dom";
import { Menu, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Approach", to: "/approach" },
  { label: "On-the-Ground", to: "/work" },
  { label: "Testimonials", to: "/#testimonials" },
  { label: "Gallery", to: "/#gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <nav className="hidden md:flex items-center gap-6 text-sm">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `story-link ${isActive ? "text-primary" : "text-foreground/80"}`
          }
          end
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary/90 to-accent/70 shadow-[var(--shadow-glow)]" />
            <span className="font-semibold text-lg tracking-tight">Teachers Evolve</span>
          </Link>
        </div>

        <NavLinks />

        <div className="flex items-center gap-2">
          <Button asChild variant="default" size="sm" className="hidden md:inline-flex">
            <Link to="/booking" aria-label="Book an Evolve Session">
              <Calendar className="mr-2 h-4 w-4" /> Book an Evolve Session
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-base ${isActive ? "text-primary" : "text-foreground/80"}`
                    }
                    end
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Button asChild variant="default">
                  <Link to="/booking" aria-label="Book an Evolve Session" onClick={() => setOpen(false)}>
                    <Calendar className="mr-2 h-4 w-4" /> Book an Evolve Session
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
