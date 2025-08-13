import { Link } from "react-router-dom";
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
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Evolve Sessions", href: "/#evolve-sessions" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Schedule A Session", href: "/#schedule" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <nav className="hidden md:flex items-center gap-6 text-sm">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={"story-link text-foreground/80 hover:text-primary"}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-[var(--shadow-elegant)]">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary/90 to-accent/70 shadow-[var(--shadow-glow)]" />
            <span className="font-semibold text-lg tracking-tight">Teachers Evolve</span>
          </Link>
        </div>

        <NavLinks />

        <div className="flex items-center gap-2">

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card/95 backdrop-blur-md border-l shadow-[var(--shadow-elegant)]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={
                      "block rounded-lg px-4 py-3 text-base shadow-sm transition bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
