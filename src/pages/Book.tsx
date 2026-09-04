import { motion } from "framer-motion";
import { Link } from "react-router";
import { Check, ArrowRight, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,94,255,0.06)_0%,transparent_70%)]" />

      {/* Architectural lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
        <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#164A7B" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Book cover */}
          <motion.div variants={fadeUp} className="flex justify-center order-2 lg:order-1">
            <div className="relative group">
              {/* Glow behind book */}
              <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(30,94,255,0.12)_0%,transparent_70%)] blur-xl" />
              <div className="relative transform rotate-y-[-8deg] rotate-x-[2deg] transition-transform duration-500 group-hover:rotate-y-[-4deg] group-hover:rotate-x-[1deg]">
                <img
                  src="/book-cover.png"
                  alt="Imagine The Following by Luke Young"
                  className="w-72 sm:w-80 h-auto"
                  style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.6))" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeUp} className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 border border-accent-blue/30 bg-accent-blue/5 text-accent-blue text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
              First Edition Hardcover
            </span>
            <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-wide leading-[0.9] text-foreground glow-text mb-4">
              THE BOOK
            </h1>
            <p className="text-sm text-accent-blue tracking-[0.15em] uppercase font-medium mb-6">
              First Edition Hardcover
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Premium hardcover edition",
                "Blueprint-style design",
                "Structural reform framework",
                "Civic participation ideas",
                "Exclusive first printing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-5 h-5 border border-accent-blue/30 bg-accent-blue/10">
                    <Check className="h-3 w-3 text-accent-blue" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/join"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-blue hover:bg-accent-blue/90 text-white text-xs font-semibold tracking-[0.12em] uppercase transition-all hover:shadow-[0_0_20px_rgba(30,94,255,0.3)]"
              >
                Order Your Copy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-accent-blue mb-4">
              Release Timeline
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground">
              AVAILABLE NOW
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-xl mx-auto">
            <div className="relative pl-8 border-l border-accent-blue/30">
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-accent-blue glow-blue" />
              <div className="mb-8">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-accent-blue">
                  Available Now
                </span>
                <h3 className="font-heading text-xl tracking-wider text-foreground mt-1">
                  First Edition
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Premium hardcover edition with blueprint-style design and exclusive first printing.
                </p>
              </div>
              <div className="absolute left-0 top-24 w-3 h-3 -translate-x-[7px] border border-accent-blue/40 bg-navy-deep" />
              <div className="mb-8">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground">
                  Limited Supply
                </span>
                <h3 className="font-heading text-xl tracking-wider text-foreground mt-1">
                  First Printing Run
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A limited number of signed first edition copies are available while supplies last.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DistributorsSection() {
  const distributors = [
    { name: "Amazon", url: "#" },
    { name: "Barnes & Noble", url: "#" },
    { name: "Bookshop.org", url: "#" },
  ];

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-navy-mid/30" />
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center"
        >
          <motion.span variants={fadeUp} className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-accent-blue mb-4">
            Available At
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground mb-10">
            FIND THE BOOK
          </motion.h2>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {distributors.map((d) => (
              <a
                key={d.name}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-border bg-card/50 hover:border-accent-blue/30 hover:bg-card transition-all group min-w-[200px]"
              >
                <span className="text-sm font-medium text-foreground">{d.name}</span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent-blue transition-colors" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Book() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <TimelineSection />
        <DistributorsSection />
      </main>
      <Footer />
    </div>
  );
}
