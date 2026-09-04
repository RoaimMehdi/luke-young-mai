import { motion } from "framer-motion";
import { Link } from "react-router";
import { Zap, Eye, Shield, Scale, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JoinForm from "@/components/JoinForm";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,94,255,0.06)_0%,transparent_70%)]" />

      {/* Architectural lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
        <line x1="0" y1="33%" x2="100%" y2="33%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="0" y1="66%" x2="100%" y2="66%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="33%" y1="0" x2="33%" y2="100%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="66%" y1="0" x2="66%" y2="100%" stroke="#164A7B" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 border border-accent-blue/30 bg-accent-blue/5 text-accent-blue text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
            The Platform
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-wide leading-[0.9] text-foreground glow-text">
            THE PLATFORM
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-lg sm:text-xl text-muted-foreground font-light max-w-xl mx-auto">
            A NEW STRUCTURE FOR A WORKING DEMOCRACY.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function StructuralReformSection() {
  const mechanisms = [
    {
      title: "Citizen Proposal Pipeline",
      desc: "Any registered citizen can submit a policy proposal. Proposals must meet transparency standards and be accompanied by a public impact assessment before entering the review process.",
      icon: Zap,
    },
    {
      title: "Independent Review Board",
      desc: "A rotating body of civic participants — not politicians or lobbyists — reviews every proposal against constitutional principles, fiscal impact, and public benefit criteria.",
      icon: Eye,
    },
    {
      title: "Community Veto Power",
      desc: "Proposals that fail to meet accountability standards can be challenged through a community veto mechanism, preventing corruption and protecting public interest.",
      icon: Shield,
    },
    {
      title: "Permanent Public Oversight",
      desc: "Every decision made through the system is subject to ongoing public scrutiny. All records are accessible, all processes are transparent, and all officials are accountable.",
      icon: Scale,
    },
  ];

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
          <motion.div variants={fadeUp} className="mb-16">
            <span className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-accent-blue mb-4">
              Structural Reform
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground mb-4">
              HOW THE SYSTEM WORKS
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              The platform creates a new civic architecture — a structured framework where citizens have genuine power to propose, review, veto, and oversee government decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mechanisms.map((m, i) => (
              <motion.div
                key={m.title}
                variants={fadeUp}
                className="p-6 border border-border bg-card/50 hover:border-accent-blue/20 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 shrink-0 border border-accent-blue/30 bg-accent-blue/5 text-accent-blue group-hover:bg-accent-blue/10 transition-colors">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold tracking-[0.15em] text-accent-blue/60">
                        0{i + 1}
                      </span>
                      <h3 className="font-condensed text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                        {m.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CivicBlueprintSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-dense opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center"
        >
          <motion.span variants={fadeUp} className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-accent-blue mb-4">
            Civic Blueprint
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground mb-16">
            THE CIVIC ARCHITECTURE
          </motion.h2>

          {/* Blueprint Diagram */}
          <motion.div variants={fadeUp} className="relative max-w-2xl mx-auto">
            {/* SVG connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 400">
              {/* Lines connecting nodes */}
              <line x1="300" y1="80" x2="120" y2="200" stroke="#1E5EFF" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
              <line x1="300" y1="80" x2="480" y2="200" stroke="#1E5EFF" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
              <line x1="120" y1="200" x2="300" y2="320" stroke="#1E5EFF" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
              <line x1="480" y1="200" x2="300" y2="320" stroke="#1E5EFF" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
              {/* Center connections */}
              <line x1="300" y1="200" x2="120" y2="200" stroke="#38BDF8" strokeWidth="0.5" opacity="0.4" />
              <line x1="300" y1="200" x2="480" y2="200" stroke="#38BDF8" strokeWidth="0.5" opacity="0.4" />
              <line x1="300" y1="200" x2="300" y2="80" stroke="#38BDF8" strokeWidth="0.5" opacity="0.4" />
              <line x1="300" y1="200" x2="300" y2="320" stroke="#38BDF8" strokeWidth="0.5" opacity="0.4" />
            </svg>

            <div className="relative h-[400px]">
              {/* PROPOSE - Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border border-accent-blue/40 bg-accent-blue/10 glow-blue mb-2">
                  <Zap className="h-6 w-6 text-accent-blue" />
                </div>
                <span className="font-heading text-lg tracking-wider text-foreground">PROPOSE</span>
              </div>

              {/* VETO - Left */}
              <div className="absolute top-1/2 left-4 sm:left-12 -translate-y-1/2 flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border border-accent-blue/40 bg-accent-blue/10 glow-blue mb-2">
                  <Shield className="h-6 w-6 text-accent-blue" />
                </div>
                <span className="font-heading text-lg tracking-wider text-foreground">VETO</span>
              </div>

              {/* REVIEW - Right */}
              <div className="absolute top-1/2 right-4 sm:right-12 -translate-y-1/2 flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border border-accent-blue/40 bg-accent-blue/10 glow-blue mb-2">
                  <Eye className="h-6 w-6 text-accent-blue" />
                </div>
                <span className="font-heading text-lg tracking-wider text-foreground">REVIEW</span>
              </div>

              {/* THE LEAGUE - Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-accent-blue/50 bg-accent-blue/10 glow-blue-strong">
                  <span className="font-heading text-base tracking-wider text-accent-blue text-center leading-tight">
                    THE<br />LEAGUE
                  </span>
                </div>
              </div>

              {/* PUBLIC OVERSIGHT - Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border border-accent-blue/40 bg-accent-blue/10 glow-blue mb-2">
                  <Scale className="h-6 w-6 text-accent-blue" />
                </div>
                <span className="font-heading text-lg tracking-wider text-foreground text-center leading-tight">
                  PUBLIC<br />OVERSIGHT
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  const excerpts = [
    {
      quote: "Democracy is not a spectator sport. It requires active participation, informed citizens, and a system designed to listen — not just to those with power, but to those with purpose.",
      label: "On Civic Participation",
    },
    {
      quote: "The greatest threat to democracy is not the absence of good people — it is the absence of good systems. Structure determines outcomes. Architecture shapes behavior. We must rebuild the framework.",
      label: "On Structural Reform",
    },
    {
      quote: "Transparency is not a luxury. It is a prerequisite for trust. When citizens cannot see how decisions are made, they cannot hold anyone accountable. The League demands visibility in every step.",
      label: "On Transparency",
    },
  ];

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <span className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-accent-blue mb-4">
              Manifesto Excerpts
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground">
              THE WORDS THAT DRIVE THE MOVEMENT
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {excerpts.map((e, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-6 border border-border bg-card/50 hover:border-accent-blue/20 transition-colors flex flex-col"
              >
                <div className="w-8 h-px bg-accent-blue/40 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                  "{e.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-accent-blue">
                    {e.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PlatformCTASection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-navy-mid/30" />
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-8">
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wide text-foreground mb-2">
              READY TO TAKE ACTION?
            </h2>
            <p className="text-sm text-muted-foreground">
              Join the League and help build a stronger system.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="p-8 glass-panel glow-blue">
            <JoinForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Platform() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <StructuralReformSection />
        <CivicBlueprintSection />
        <ManifestoSection />
        <PlatformCTASection />
      </main>
      <Footer />
    </div>
  );
}
