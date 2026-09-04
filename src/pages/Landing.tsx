import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JoinForm from "@/components/JoinForm";


/* ─── Shared animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ─── SVG helpers ─── */
function CapIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <path d="M12 2L2 8h20L12 2z" />
      <rect x="4" y="8" width="16" height="10" rx="0" />
      <rect x="3" y="18" width="18" height="2" />
      <circle cx="12" cy="5" r="1" />
    </svg>
  );
}
function ShieldIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z" />
    </svg>
  );
}
function EyeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function UsersIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function BoltIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function ScaleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <path d="M12 3v18" /><path d="M5 7l7-4 7 4" /><path d="M5 7l3 6h0a5 5 0 0 0 8 0h0l3-6" /><circle cx="5" cy="16" r="2" /><circle cx="19" cy="16" r="2" />
    </svg>
  );
}
function UsersGroupIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <circle cx="9" cy="7" r="3" /><circle cx="17" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M17 14a4 4 0 0 1 4 4v3" />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — HERO
   ═══════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Hero background image — Capitol with lightning and crowd */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/hero-bg.png)" }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050A10]/90 via-[#050A10]/75 to-[#050A10]/60" />
      {/* Bottom gradient fade to page background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT — Text + Form */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.88] tracking-wide text-foreground"
            >
              THE POWER
              <br />
              BELONGS TO
              <br />
              <span className="text-accent-blue">THE PEOPLE.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-base sm:text-lg text-foreground font-medium leading-relaxed max-w-md">
              A platform for real oversight.
              <br />
              Real accountability. Real democracy.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
              A new civic framework designed to give citizens a stronger role in how government decisions are proposed, reviewed, challenged, and held accountable.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 max-w-sm">
              <div className="p-5 bg-navy/90 border border-blueprint/40 backdrop-blur-sm">
                <JoinForm />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Book Cover + Atmosphere */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Atmospheric background */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Radial glow */}
              <div className="w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(30,99,216,0.1)_0%,transparent_70%)]" />
            </div>

            {/* Capitol silhouette behind book */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.06]">
              <svg viewBox="0 0 600 400" className="w-[500px] h-auto" fill="none" stroke="#238BFF" strokeWidth="0.8">
                <path d="M300 20C300 20 270 80 250 110C230 140 200 160 180 170L180 300L100 300L100 320L500 320L500 300L420 300L420 170C400 160 370 140 350 110C330 80 300 20 300 20Z" />
                <circle cx="300" cy="60" r="25" />
                <rect x="280" y="100" width="40" height="200" />
                <line x1="180" y1="220" x2="420" y2="220" strokeWidth="0.4" />
              </svg>
            </div>

            {/* Lightning effects */}
            <svg className="absolute inset-0 w-full h-full lightning-flicker" viewBox="0 0 500 600">
              <path d="M250 0 L220 120 L260 110 L200 240 L280 220 L180 380" stroke="#238BFF" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M320 30 L290 150 L330 140 L270 280 L350 260 L250 420" stroke="#1E63D8" strokeWidth="0.8" fill="none" opacity="0.25" />
              <path d="M180 50 L160 170 L200 160 L150 300 L220 280 L130 430" stroke="#38BDF8" strokeWidth="0.5" fill="none" opacity="0.2" />
            </svg>

            {/* Official IMAGINE THE FOLLOWING book cover */}
            <div className="relative book-float z-10">
              <img
                src="/book-cover.png"
                alt="Imagine The Following — A Thought Experiment for the Future of Democracy by Luke Young"
                className="w-[280px] sm:w-[320px] lg:w-[360px] h-auto drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.6))" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 3 — MOVEMENT STRIP
   ═══════════════════════════════════════════ */
function MovementStrip() {
  return (
    <Section className="relative py-6 border-y border-blueprint/20 bg-navy/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 md:gap-8">
          {/* Left line + icon */}
          <div className="hidden sm:flex items-center gap-3 flex-1 justify-end">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-blueprint/40" />
            <CapIcon className="h-5 w-5 text-blueprint/50" />
          </div>

          {/* Text */}
          <div className="flex items-center gap-2 md:gap-3 text-xs sm:text-sm font-condensed tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap">
            <span>Your Voice.</span>
            <span className="text-accent-blue font-semibold">Your Power.</span>
            <span>Your Future.</span>
          </div>

          {/* Right line + icon */}
          <div className="hidden sm:flex items-center gap-3 flex-1">
            <CapIcon className="h-5 w-5 text-blueprint/50" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-blueprint/40" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 4 — PROBLEM VS SOLUTION
   ═══════════════════════════════════════════ */
function ProblemSolutionSection() {
  const problems = [
    { num: "01", title: "LOBBYIST CONTROL", desc: "Special interests influence the rules of the system." },
    { num: "02", title: "PARTISAN GAMES", desc: "Division creates gridlock and prevents real progress." },
    { num: "03", title: "NO REAL OVERSIGHT", desc: "Citizens have limited power to challenge major decisions." },
  ];
  const solutions = [
    { icon: ScaleIcon, title: "STRUCTURAL REFORM", desc: "Rebuild the system from the ground up." },
    { icon: UsersIcon, title: "CITIZEN EMPOWERMENT", desc: "Give people a direct role in participation." },
    { icon: EyeIcon, title: "PUBLIC OVERSIGHT", desc: "Create stronger accountability around major decisions." },
  ];

  return (
    <Section className="relative py-20 md:py-28">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      {/* Capitol blueprint background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <svg viewBox="0 0 800 400" className="w-full max-w-5xl" fill="none" stroke="#238BFF" strokeWidth="0.6">
          <path d="M400 30C400 30 370 90 350 120C330 150 300 170 280 180L280 320L180 320L180 340L620 340L620 320L520 320L520 180C500 170 470 150 450 120C430 90 400 30 400 30Z" />
          <circle cx="400" cy="70" r="30" />
          <rect x="375" y="110" width="50" height="210" />
          <line x1="280" y1="250" x2="520" y2="250" strokeWidth="0.4" />
          <line x1="280" y1="280" x2="520" y2="280" strokeWidth="0.4" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-8 md:gap-6 items-start">
          {/* THE PROBLEM */}
          <motion.div variants={fadeUp}>
            <h2 className="font-heading text-3xl sm:text-4xl tracking-[0.05em] text-red-accent mb-8">THE PROBLEM</h2>
            <div className="space-y-6">
              {problems.map((p) => (
                <div key={p.num} className="flex gap-4">
                  <span className="text-sm font-bold text-red-accent/60 font-condensed tracking-wider mt-0.5 shrink-0">{p.num}</span>
                  <div>
                    <h3 className="font-condensed text-sm font-bold tracking-[0.1em] uppercase text-foreground mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* VS Divider */}
          <motion.div variants={fadeUp} className="hidden md:flex items-center justify-center self-center">
            <div className="relative">
              <div className="w-px h-20 bg-gradient-to-b from-transparent via-blueprint/30 to-transparent absolute left-1/2 -translate-x-1/2 -top-10" />
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-blueprint/40 bg-navy-deep/80">
                <span className="font-heading text-lg tracking-wider text-foreground">VS.</span>
              </div>
              <div className="w-px h-20 bg-gradient-to-b from-transparent via-blueprint/30 to-transparent absolute left-1/2 -translate-x-1/2 bottom-10" />
            </div>
          </motion.div>

          {/* Mobile VS */}
          <motion.div variants={fadeUp} className="md:hidden flex justify-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full border border-blueprint/40 bg-navy-deep/80">
              <span className="font-heading text-base tracking-wider text-foreground">VS.</span>
            </div>
          </motion.div>

          {/* THE SOLUTION */}
          <motion.div variants={fadeUp}>
            <h2 className="font-heading text-3xl sm:text-4xl tracking-[0.05em] text-accent-blue mb-8">THE SOLUTION</h2>
            <div className="space-y-6">
              {solutions.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="shrink-0 mt-0.5">
                    <s.icon className="h-5 w-5 text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="font-condensed text-sm font-bold tracking-[0.1em] uppercase text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 5 — 4-STEP FRAMEWORK
   ═══════════════════════════════════════════ */
function FrameworkSection() {
  const steps = [
    { num: "01", title: "PROPOSE", desc: "Citizen ideas and proposals enter the system.", Icon: BoltIcon },
    { num: "02", title: "REVIEW", desc: "Transparent review focused on public impact.", Icon: EyeIcon },
    { num: "03", title: "VETO", desc: "Mechanisms designed to prevent corruption and abuse.", Icon: ShieldIcon },
    { num: "04", title: "PUBLIC OVERSIGHT", desc: "Citizens maintain visibility and accountability.", Icon: UsersGroupIcon },
  ];

  return (
    <Section className="relative py-20 md:py-28">
      <div className="absolute inset-0 blueprint-grid-dense opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.05em] text-foreground">OUR 4-STEP FRAMEWORK</h2>
        </motion.div>

        {/* Desktop: Horizontal */}
        <motion.div variants={fadeUp} className="hidden md:flex items-start justify-center gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <div className="flex flex-col items-center text-center w-48 lg:w-56">
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-electric/30 bg-electric/5 mb-3 pulse-glow">
                  <step.Icon className="h-6 w-6 text-accent-blue" />
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 flex items-center justify-center bg-electric text-white text-[10px] font-bold">{step.num}</div>
                </div>
                <h3 className="font-heading text-lg tracking-wider text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed px-2">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center w-10 lg:w-14 mt-4">
                  <svg viewBox="0 0 40 12" className="w-full h-3">
                    <line x1="0" y1="6" x2="32" y2="6" stroke="#1E63D8" strokeWidth="1" strokeDasharray="3 3" className="animate-dash" />
                    <polygon points="34,2 40,6 34,10" fill="#1E63D8" opacity="0.7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Mobile: Vertical */}
        <motion.div variants={fadeUp} className="md:hidden flex flex-col items-center gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center">
              <div className="flex items-center gap-4 w-full max-w-sm">
                <div className="relative flex items-center justify-center w-14 h-14 shrink-0 rounded-full border border-electric/30 bg-electric/5 pulse-glow">
                  <step.Icon className="h-5 w-5 text-accent-blue" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-electric text-white text-[9px] font-bold">{step.num}</div>
                </div>
                <div className="text-left">
                  <h3 className="font-heading text-base tracking-wider text-foreground">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="w-px h-6 bg-gradient-to-b from-electric/30 to-electric/10 my-1" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 6 — HOW THE LEAGUE WORKS
   ═══════════════════════════════════════════ */
function LeagueWorksSection() {
  const nodes = [
    { label: "PROPOSE", x: "50%", y: "8%", Icon: BoltIcon },
    { label: "REVIEW", x: "85%", y: "45%", Icon: EyeIcon },
    { label: "PUBLIC OVERSIGHT", x: "50%", y: "88%", Icon: UsersGroupIcon },
    { label: "VETO", x: "15%", y: "45%", Icon: ShieldIcon },
  ];

  return (
    <Section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-25" />
      {/* Capitol silhouettes on sides */}
      <div className="absolute left-0 bottom-0 opacity-[0.03]">
        <svg viewBox="0 0 300 300" className="w-64" fill="none" stroke="#238BFF" strokeWidth="0.6">
          <path d="M150 10C150 10 130 50 120 70C110 90 95 100 85 105L85 220L40 220L40 235L260 235L260 220L215 220L215 105C205 100 190 90 180 70C170 50 150 10 150 10Z" />
          <circle cx="150" cy="35" r="15" />
        </svg>
      </div>
      <div className="absolute right-0 bottom-0 opacity-[0.03] scale-x-[-1]">
        <svg viewBox="0 0 300 300" className="w-64" fill="none" stroke="#238BFF" strokeWidth="0.6">
          <path d="M150 10C150 10 130 50 120 70C110 90 95 100 85 105L85 220L40 220L40 235L260 235L260 220L215 220L215 105C205 100 190 90 180 70C170 50 150 10 150 10Z" />
          <circle cx="150" cy="35" r="15" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.05em] text-foreground">HOW THE LEAGUE WORKS</h2>
        </motion.div>

        <motion.div variants={fadeUp} className="relative max-w-xl mx-auto">
          {/* SVG connecting arrows */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
            {/* Top to Right */}
            <path d="M220 70 Q320 70 330 170" stroke="#1E63D8" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-dash" />
            {/* Right to Bottom */}
            <path d="M330 230 Q320 330 220 330" stroke="#1E63D8" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-dash" />
            {/* Bottom to Left */}
            <path d="M180 330 Q80 330 70 230" stroke="#1E63D8" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-dash" />
            {/* Left to Top */}
            <path d="M70 170 Q80 70 180 70" stroke="#1E63D8" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-dash" />
            {/* Inner connections to center */}
            <line x1="200" y1="100" x2="200" y2="160" stroke="#238BFF" strokeWidth="0.5" opacity="0.4" />
            <line x1="300" y1="200" x2="240" y2="200" stroke="#238BFF" strokeWidth="0.5" opacity="0.4" />
            <line x1="200" y1="300" x2="200" y2="240" stroke="#238BFF" strokeWidth="0.5" opacity="0.4" />
            <line x1="100" y1="200" x2="160" y2="200" stroke="#238BFF" strokeWidth="0.5" opacity="0.4" />
          </svg>

          <div className="relative h-[400px]">
            {/* PROPOSE — Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-electric/30 bg-electric/5 pulse-glow mb-2">
                <BoltIcon className="h-5 w-5 text-accent-blue" />
              </div>
              <span className="font-heading text-sm tracking-wider text-foreground">PROPOSE</span>
            </div>

            {/* REVIEW — Right */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-electric/30 bg-electric/5 pulse-glow mb-2">
                <EyeIcon className="h-5 w-5 text-accent-blue" />
              </div>
              <span className="font-heading text-sm tracking-wider text-foreground">REVIEW</span>
            </div>

            {/* VETO — Left */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-electric/30 bg-electric/5 pulse-glow mb-2">
                <ShieldIcon className="h-5 w-5 text-accent-blue" />
              </div>
              <span className="font-heading text-sm tracking-wider text-foreground">VETO</span>
            </div>

            {/* PUBLIC OVERSIGHT — Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-electric/30 bg-electric/5 pulse-glow mb-2">
                <UsersGroupIcon className="h-5 w-5 text-accent-blue" />
              </div>
              <span className="font-heading text-sm tracking-wider text-foreground text-center leading-tight">PUBLIC<br/>OVERSIGHT</span>
            </div>

            {/* CENTER — THE LEAGUE */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="flex items-center justify-center w-20 h-20 border-2 border-electric/40 bg-navy-deep/90 glow-blue-strong">
                <ShieldIcon className="h-8 w-8 text-accent-blue" />
              </div>
              <span className="font-heading text-sm tracking-wider text-accent-blue mt-2 text-center leading-tight">THE<br/>LEAGUE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 7 — MOVEMENT BUILT FOR PARTICIPATION
   ═══════════════════════════════════════════ */
function ParticipationSection() {
  const items = [
    { num: "01", title: "PARTICIPATE", desc: "Take part in public oversight discussions.", Icon: UsersIcon },
    { num: "02", title: "CONTRIBUTE", desc: "Help shape conversations around reform.", Icon: BoltIcon },
    { num: "03", title: "STAY INFORMED", desc: "Receive movement updates and action opportunities.", Icon: EyeIcon },
    { num: "04", title: "HOLD POWER ACCOUNTABLE", desc: "Support stronger transparency and public responsibility.", Icon: ScaleIcon },
  ];

  return (
    <Section className="relative py-20 md:py-28">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start">
          {/* Left heading */}
          <motion.div variants={fadeUp}>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-[0.03em] text-foreground leading-[0.9]">
              A MOVEMENT BUILT
              <br />
              FOR PARTICIPATION.
            </h2>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
              The League is designed for citizens who believe accountability should not end at the ballot box.
            </p>
          </motion.div>

          {/* Right cards */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div key={item.num} className="p-5 border border-border bg-navy-mid/50 hover:border-electric/20 hover:bg-navy-mid/80 transition-all duration-200 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 border border-electric/20 bg-electric/5 text-accent-blue group-hover:bg-electric/10 transition-colors">
                    <item.Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.15em] text-electric/60">{item.num}</span>
                </div>
                <h3 className="font-condensed text-sm font-bold tracking-[0.1em] uppercase text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 8 — BOOK PROMOTION
   ═══════════════════════════════════════════ */
function BookPromoSection() {
  const highlights = [
    "First Edition Hardcover",
    "Blueprint-inspired framework",
    "Civic participation principles",
    "Structural reform concepts",
    "A thought experiment for the future of democracy",
  ];

  return (
    <Section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-navy/40" />
      <div className="absolute inset-0 blueprint-grid opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Official IMAGINE THE FOLLOWING book cover */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <img
              src="/book-cover.png"
              alt="Imagine The Following by Luke Young"
              className="w-[260px] sm:w-[300px] h-auto drop-shadow-2xl book-float"
              style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.6))" }}
            />
          </motion.div>

          {/* Right — Details */}
          <motion.div variants={fadeUp}>
            <span className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-accent-blue mb-3">The Book</span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-[0.03em] text-foreground leading-[0.9] mb-4">
              THE FULL PLAN
              <br />
              IS IN THE BOOK.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-6">
              Explore the complete framework behind a new model for civic participation, public accountability, and structural reform.
            </p>

            <div className="space-y-2.5 mb-8">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-accent-blue shrink-0" />
                  <span className="text-sm text-muted-foreground">{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/join"
                className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-electric to-accent-blue text-white text-xs font-bold tracking-[0.12em] uppercase transition-all hover:shadow-[0_0_25px_rgba(35,139,255,0.3)]"
              >
                Order Your Copy
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-7 py-3 border border-electric/30 text-foreground text-xs font-semibold tracking-[0.12em] uppercase hover:border-accent-blue/50 hover:bg-electric/5 transition-all"
              >
                Explore The Book
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 9 — MOVEMENT QUOTE
   ═══════════════════════════════════════════ */
function QuoteSection() {
  return (
    <Section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,99,216,0.05)_0%,transparent_70%)]" />

      {/* Capitol silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <svg viewBox="0 0 600 300" className="w-full max-w-4xl" fill="none" stroke="#238BFF" strokeWidth="0.6">
          <path d="M300 20C300 20 275 60 260 80C245 100 225 112 210 118L210 240L140 240L140 255L460 255L460 240L390 240L390 118C375 112 355 100 340 80C325 60 300 20 300 20Z" />
          <circle cx="300" cy="50" r="20" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={fadeUp}>
          {/* Quote marks */}
          <span className="font-heading text-6xl text-electric/30 leading-none">"</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.04em] text-foreground leading-[1.05] mt-2 mb-2">
            DEMOCRACY WORKS BEST
            <br />
            WHEN <span className="text-accent-blue">THE PEOPLE</span> CAN SEE
            <br />
            <span className="text-accent-blue">THE SYSTEM.</span>
          </h2>
          <span className="font-heading text-6xl text-electric/30 leading-none">"</span>
        </motion.div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 10 — FROM IDEAS TO ACTION
   ═══════════════════════════════════════════ */
function ActionSection() {
  const cards = [
    { title: "PUBLIC ACCOUNTABILITY", desc: "Help shape the conversation around transparency and oversight.", btn: "GET INVOLVED", href: "/join" },
    { title: "STRUCTURAL REFORM", desc: "Support new ideas designed to improve the system.", btn: "EXPLORE SYSTEM", href: "/platform" },
    { title: "CITIZEN EMPOWERMENT", desc: "Join discussions focused on meaningful public participation.", btn: "JOIN THE CONVERSATION", href: "/join" },
  ];

  return (
    <Section className="relative py-20 md:py-28">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
          {/* Left heading */}
          <motion.div variants={fadeUp}>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-[0.03em] text-foreground leading-[0.9]">
              FROM IDEAS
              <br />
              TO ACTION.
            </h2>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Real change happens when citizens step forward.
            </p>
          </motion.div>

          {/* Right cards */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cards.map((c) => (
              <div key={c.title} className="p-5 border border-border bg-navy-mid/50 hover:border-electric/20 transition-all duration-200 flex flex-col">
                <h3 className="font-condensed text-sm font-bold tracking-[0.1em] uppercase text-foreground mb-2">{c.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{c.desc}</p>
                <Link
                  to={c.href}
                  className="inline-flex items-center justify-center px-4 py-2 border border-electric/30 text-[11px] font-semibold tracking-[0.1em] uppercase text-foreground hover:border-accent-blue/50 hover:bg-electric/5 transition-all"
                >
                  {c.btn}
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 11 — FINAL CTA
   ═══════════════════════════════════════════ */
function FinalCTASection() {
  return (
    <Section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
      <div className="absolute inset-0 blueprint-grid opacity-15" />

      {/* Capitol silhouette */}
      <div className="absolute inset-0 flex items-end justify-center opacity-[0.05]">
        <svg viewBox="0 0 800 300" className="w-full max-w-5xl" fill="none" stroke="#238BFF" strokeWidth="0.6">
          <path d="M400 20C400 20 375 70 360 95C345 120 320 135 300 142L300 250L200 250L200 268L600 268L600 250L500 250L500 142C480 135 455 120 440 95C425 70 400 20 400 20Z" />
          <circle cx="400" cy="55" r="22" />
          <rect x="382" y="85" width="36" height="165" />
        </svg>
      </div>

      {/* Lightning */}
      <svg className="absolute inset-0 w-full h-full lightning-flicker" viewBox="0 0 1200 500">
        <path d="M600 0 L570 80 L610 70 L550 160 L630 145 L520 280" stroke="#238BFF" strokeWidth="1" fill="none" opacity="0.2" />
        <path d="M700 20 L680 100 L720 90 L660 180 L740 165 L640 300" stroke="#1E63D8" strokeWidth="0.5" fill="none" opacity="0.12" />
      </svg>

      {/* Crowd silhouette */}
      <div className="absolute bottom-0 left-0 right-0 opacity-[0.06]">
        <svg viewBox="0 0 1200 100" className="w-full" fill="#238BFF">
          {Array.from({ length: 60 }).map((_, i) => (
            <circle key={i} cx={20 + i * 20} cy={60 + Math.sin(i * 0.7) * 15} r={4 + Math.sin(i * 1.2) * 2} />
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <rect key={`f${i}`} x={60 + i * 40} y={20 + Math.sin(i * 0.9) * 10} width="2" height={18 + Math.sin(i * 1.1) * 5} rx="1" transform={`rotate(${-5 + Math.sin(i) * 10} ${61 + i * 40} ${20 + Math.sin(i * 0.9) * 10})`} />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={fadeUp}>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.03em] text-foreground leading-[0.9] mb-3">
            THE FUTURE IS NOT SOMETHING
            <br />
            WE WAIT FOR.
          </h2>
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl tracking-[0.04em] text-accent-blue mb-6">
            IT&apos;S SOMETHING WE BUILD TOGETHER.
          </p>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Be part of a movement focused on accountability, participation, and structural reform.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-electric to-accent-blue text-white text-xs font-bold tracking-[0.14em] uppercase transition-all hover:shadow-[0_0_30px_rgba(35,139,255,0.35)]"
          >
            Join The League
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   EXPORT — COMPLETE HOMEPAGE
   ═══════════════════════════════════════════ */
export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <MovementStrip />
        <ProblemSolutionSection />
        <FrameworkSection />
        <LeagueWorksSection />
        <ParticipationSection />
        <BookPromoSection />
        <QuoteSection />
        <ActionSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
