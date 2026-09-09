import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";


import TopStatsBar from "@/components/TopStatsBar";

const navLinks = [
  { label: "THE PLATFORM", href: "/platform" },
  { label: "THE BOOK", href: "/book" },
  { label: "DIRECT ACTION", href: "/action" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
          : "bg-navy-deep/80 backdrop-blur-md border-b border-blueprint/20"
      }`}
    >
      <TopStatsBar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-18 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo-ly.png"
              alt="Luke Young"
              className="h-7 md:h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "text-accent-blue"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/join"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-electric/90 to-electric border border-accent-blue/40 text-white text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 hover:shadow-[0_0_20px_rgba(35,139,255,0.25)] hover:border-accent-blue/60"
            >
              Join The League
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-navy-deep/98 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-xs font-medium tracking-[0.15em] uppercase transition-colors ${
                  location.pathname === link.href
                    ? "text-accent-blue"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/join"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center px-5 py-3 bg-gradient-to-r from-electric/90 to-electric border border-accent-blue/40 text-white text-xs font-semibold tracking-[0.14em] uppercase"
            >
              Join The League
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
