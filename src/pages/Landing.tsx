import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Check, BookOpen, Users, Award, Vote, PhoneCall, Sparkles, Shield, ChevronRight, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JoinForm from "@/components/JoinForm";
import ChapterOneReader from "@/components/ChapterOneReader";

/* ─── Shared animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
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
function BoltIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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
   SECTION 1 — HERO
   ═══════════════════════════════════════════ */
function HeroSection({ onOpenChapterOne }: { onOpenChapterOne: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-16">
      {/* Hero background image — Capitol with lightning and crowd */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/hero-bg.png)" }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050A10]/95 via-[#050A10]/90 to-[#050A10]/75" />
      {/* Bottom gradient fade to page background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT — Text + Form */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="w-full">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[11px] font-condensed font-bold tracking-[0.2em] uppercase mb-4">
              <Sparkles className="h-3.5 w-3.5 text-cyan-glow shrink-0" />
              <span>League for Representative Democracy</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-wide text-foreground break-words"
            >
              THE POWER
              <br />
              BELONGS TO
              <br />
              <span className="text-accent-blue">THE PEOPLE.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-sm sm:text-base md:text-lg text-foreground font-medium leading-relaxed max-w-lg">
              A platform for real oversight. Real accountability. Real democracy.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-lg">
              Until the League reaches 2% support, ballot access remains locked. Join now to claim your official Founder standing and permanent place in the civic registry.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 sm:mt-8 w-full max-w-md">
              <div className="p-4 sm:p-6 bg-navy/95 border border-blueprint/50 backdrop-blur-md glow-blue">
                <JoinForm onOpenChapterOne={onOpenChapterOne} />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Book Cover + Free Chapter 1 Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex flex-col items-center lg:items-end justify-center mt-6 lg:mt-0"
          >
            {/* Atmospheric background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(30,99,216,0.15)_0%,transparent_70%)]" />
            </div>

            {/* Book Cover */}
            <div className="relative book-float z-10 cursor-pointer" onClick={onOpenChapterOne}>
              <img
                src="/book-cover.png"
                alt="Imagine The Following by Luke Young"
                className="w-[240px] sm:w-[300px] lg:w-[350px] h-auto drop-shadow-2xl mx-auto"
                style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.65))" }}
              />
            </div>

            {/* Quick Click-to-Read Chapter 1 Trigger Card */}
            <motion.div
              variants={fadeUp}
              className="relative z-20 mt-4 sm:mt-6 w-full max-w-sm p-4 bg-navy-mid/95 border border-accent-blue/40 rounded shadow-xl"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-accent-blue/10 border border-accent-blue/30 text-accent-blue shrink-0">
                  <BookOpen className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-condensed font-bold uppercase tracking-[0.2em] text-accent-blue">
                    Free Instant Access
                  </span>
                  <h4 className="font-heading text-base tracking-wider text-foreground">
                    READ CHAPTER 1 FOR FREE
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    No sign-up required. Click to read the blueprint directly in your browser.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenChapterOne}
                className="mt-3 w-full py-2.5 px-3 bg-accent-blue/20 hover:bg-accent-blue/30 border border-accent-blue/50 text-accent-blue hover:text-white text-xs font-condensed font-bold tracking-[0.14em] uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Open Free Chapter 1 Reader
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — TOP BLURB
   ═══════════════════════════════════════════ */
function TopBlurbSection({ onOpenChapterOne }: { onOpenChapterOne: () => void }) {
  return (
    <Section className="relative py-12 md:py-20 border-y border-blueprint/30 bg-[#040810]">
      <div className="absolute inset-0 blueprint-grid opacity-25" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div variants={fadeUp} className="text-center max-w-4xl mx-auto mb-10">
          <span className="inline-block text-[10px] sm:text-[11px] font-condensed font-bold tracking-[0.22em] uppercase text-accent-blue mb-2.5 px-3 py-1 bg-accent-blue/10 border border-accent-blue/30">
            Civic Roadmap &amp; Membership Details
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide text-foreground leading-[1.08] break-words">
            WHAT DOES JOINING THE LEAGUE FOR REPRESENTATIVE DEMOCRACY ENTAIL EXACTLY?
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-accent-blue to-transparent mx-auto mt-3 sm:mt-4" />
        </motion.div>

        {/* 3 Strategic Cards (Today, Soon, 2 Percenters) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {/* 1. TODAY: THE FOUNDATION */}
          <motion.div
            variants={fadeUp}
            className="p-5 sm:p-7 bg-navy/90 border border-blueprint/50 hover:border-accent-blue/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="flex items-center justify-center w-10 h-10 border border-accent-blue/30 bg-accent-blue/10 text-accent-blue shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-condensed font-bold tracking-[0.18em] text-accent-blue uppercase">
                    Stage 1
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl tracking-wider text-foreground">
                    TODAY: THE FOUNDATION
                  </h3>
                </div>
              </div>

              <div className="p-3 bg-navy-mid/60 border-l-2 border-accent-blue text-xs sm:text-sm text-foreground font-medium mb-3 leading-relaxed">
                "It’s about building support for Representative Democracy via number of supporters. Many hands make light work."
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Before legislation can be challenged or platforms ratified, genuine power begins with pure human count. Every citizen who steps forward strengthens the civic baseline required to hold entrenched power accountable.
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-blueprint/20 flex items-center justify-between text-[11px] font-condensed uppercase tracking-wider text-accent-blue">
              <span>Status: Active Registration</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </motion.div>

          {/* 2. SOON: INAUGURAL CONVENTION & PLATFORM */}
          <motion.div
            variants={fadeUp}
            className="p-5 sm:p-7 bg-navy/90 border border-blueprint/50 hover:border-accent-blue/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="flex items-center justify-center w-10 h-10 border border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow shrink-0">
                  <Vote className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-condensed font-bold tracking-[0.18em] text-cyan-glow uppercase">
                    Stage 2
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl tracking-wider text-foreground">
                    SOON: THE CONVENTION
                  </h3>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Once there are enough supporters to have an inaugural convention, all members can get together to debate and vote in a more comprehensive platform to accurately reflect the will of its members.
              </p>

              <div className="my-3 p-2.5 bg-navy-mid/60 border border-blueprint/30 text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">The PIQ App:</strong> By the time of convention the goal is to have an operational PIQ app for all members to use easily and often as desired.
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Should a platform be ratified, there will likely be a call to form an official political party. Anyone who wishes can officially join it in that capacity. Not officially joining the party has no effect on League membership—it will, however, likely affect the League’s chances of success one way or another.
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-blueprint/20 flex items-center justify-between text-[11px] font-condensed uppercase tracking-wider text-cyan-glow">
              <span>Goal: Ratified Platform &amp; PIQ App</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </motion.div>

          {/* 3. 2 PERCENTERS: THE FOUNDERS */}
          <motion.div
            variants={fadeUp}
            className="p-5 sm:p-7 bg-navy/90 border border-amber-400/40 hover:border-amber-400/70 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="flex items-center justify-center w-10 h-10 border border-amber-400/40 bg-amber-500/10 text-amber-400 shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-condensed font-bold tracking-[0.18em] text-amber-300 uppercase">
                    Official Standing
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl tracking-wider text-foreground">
                    2 PERCENTERS: FOUNDERS
                  </h3>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-2.5">
                Until the League reaches 2 Percent support amongst voters it will be hard to make ballots. Therefore, everyone who gets the League to 2 percent will be considered a Founder.
              </p>

              <div className="p-2.5 sm:p-3 bg-navy-mid/70 border border-amber-400/20 rounded text-xs space-y-1.5 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Optional Contact Info:</strong> When joining, contact info is not required. To prove real people and receive a monthly news at most, better communication can only help. If you want to stay in the loop, you know where the website is.
                </p>
                <p className="text-amber-200/90 font-medium">
                  <PhoneCall className="inline h-3 w-3 mr-1 text-accent-blue" />
                  There is also an option for anyone who would like to get a welcome phone call from Luke personally (book author, not website designer)!
                </p>
              </div>

              <blockquote className="mt-2.5 text-[11px] italic text-muted-foreground/90 pl-2 border-l border-amber-400/40">
                "Hopefully I’m grossly underestimating what a crazy commitment this is to make but you just read a near 300 page book on government policy then came to the website, then joined!?! It’s the least I can do. Truly."
              </blockquote>
            </div>

            <div className="mt-5 pt-3.5 border-t border-amber-400/20 flex items-center justify-between text-[11px] font-condensed uppercase tracking-wider text-amber-300">
              <span>Founder Status Active</span>
              <Award className="h-4 w-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 3 — FREE CHAPTER 1 READER FEATURE
   ═══════════════════════════════════════════ */
function FreeChapterOneSection({ onOpenChapterOne }: { onOpenChapterOne: () => void }) {
  return (
    <Section className="relative py-14 md:py-24 overflow-hidden bg-navy-deep">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(35,139,255,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Exact User Header */}
        <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[10px] sm:text-[11px] font-condensed font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4">
            <BookOpen className="h-3.5 w-3.5" />
            Free Access • Zero Sign-Up Required
          </div>

          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide text-foreground leading-snug max-w-4xl mx-auto break-words">
            WHY GIVE THIS AWAY? BECAUSE IT COULD HELP. BUT ONLY IF PEOPLE GET A CHANCE TO SEE IT WHETHER THEY HAVE MONEY TO SPEND ON A BOOK OR NOT.
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-accent-blue font-condensed tracking-wider uppercase font-medium max-w-2xl mx-auto">
            "I’d rather let people read than microdose. All the trying to bullet point ideas isn’t necessary farther down the page."
          </p>
        </motion.div>

        {/* Reader Trigger Showcase Box */}
        <motion.div
          variants={fadeUp}
          className="p-5 sm:p-8 md:p-10 bg-navy/90 border border-electric/40 rounded-lg shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left: Book Cover preview */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group cursor-pointer" onClick={onOpenChapterOne}>
                <img
                  src="/book-cover.png"
                  alt="Imagine The Following"
                  className="w-40 sm:w-52 h-auto drop-shadow-2xl transition-transform duration-300 group-hover:scale-105 mx-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity">
                  <span className="px-3 py-1.5 bg-accent-blue text-white text-xs font-condensed font-bold uppercase tracking-widest shadow-lg">
                    Click To Read
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Excerpt & One-Click Reader Button */}
            <div className="md:col-span-8 space-y-3 sm:space-y-4 text-left">
              <span className="text-[10px] sm:text-[11px] font-condensed font-bold uppercase tracking-[0.2em] text-accent-blue">
                Imagine The Following: A Thought Experiment for the Future of Democracy
              </span>

              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground tracking-wide">
                CHAPTER 1: THE FOUNDATION &amp; CIVIC SOVEREIGNTY
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic border-l-2 border-accent-blue/50 pl-3">
                "Imagine waking up in a country where elected representation is not an abstract slogan printed on bumper stickers once every four years, but an active, functioning reality..."
              </p>

              <p className="text-xs text-muted-foreground/90 leading-relaxed">
                No sign-up. No credit card. Just click below to read the complete first chapter directly in a clean, distraction-free reader with customizable typography.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenChapterOne}
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-electric to-accent-blue hover:from-accent-blue hover:to-electric text-white text-xs font-bold tracking-[0.14em] uppercase transition-all shadow-[0_0_25px_rgba(35,139,255,0.35)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="h-4 w-4" />
                  Read Chapter 1 Free Now
                </button>

                <Link
                  to="/book"
                  className="w-full sm:w-auto px-5 py-3 border border-blueprint/60 text-foreground hover:text-white hover:bg-white/5 text-xs font-semibold tracking-[0.12em] uppercase transition-colors text-center"
                >
                  Explore Hardcover Details
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 4 — 4-STEP FRAMEWORK
   ═══════════════════════════════════════════ */
function FrameworkSection() {
  const steps = [
    { num: "01", title: "PROPOSE", desc: "Citizen ideas and proposals enter the system directly without gatekeepers.", Icon: BoltIcon },
    { num: "02", title: "REVIEW", desc: "Transparent review focused on measurable public benefit and constitutionality.", Icon: EyeIcon },
    { num: "03", title: "VETO", desc: "Structured oversight designed to prevent special-interest distortion.", Icon: ShieldIcon },
    { num: "04", title: "PUBLIC OVERSIGHT", desc: "Citizens maintain permanent visibility and democratic accountability.", Icon: UsersGroupIcon },
  ];

  return (
    <Section className="relative py-14 md:py-24">
      <div className="absolute inset-0 blueprint-grid-dense opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-condensed font-bold tracking-[0.2em] uppercase text-accent-blue mb-2 block">
            System Architecture
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.05em] text-foreground">
            OUR 4-STEP CIVIC FRAMEWORK
          </h2>
        </motion.div>

        {/* Desktop: Horizontal layout */}
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

        {/* Mobile: Vertical layout */}
        <motion.div variants={fadeUp} className="md:hidden flex flex-col items-center gap-3 w-full max-w-sm mx-auto">
          {steps.map((step, i) => (
            <div key={step.num} className="w-full flex items-center gap-3.5 p-3.5 bg-navy/80 border border-blueprint/30 rounded">
              <div className="relative flex items-center justify-center w-12 h-12 shrink-0 rounded-full border border-electric/30 bg-electric/10 text-accent-blue">
                <step.Icon className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-electric text-white text-[9px] font-bold rounded-full">
                  {step.num}
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-heading text-base tracking-wider text-foreground">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 5 — HOW THE LEAGUE WORKS (Fully Responsive)
   ═══════════════════════════════════════════ */
function LeagueWorksSection() {
  const steps = [
    { title: "PROPOSE", desc: "Citizen policy initiatives enter transparent review directly.", icon: BoltIcon },
    { title: "REVIEW", desc: "Non-partisan constitutional & public impact evaluations.", icon: EyeIcon },
    { title: "VETO", desc: "Mechanisms to halt special-interest corruption & abuse.", icon: ShieldIcon },
    { title: "PUBLIC OVERSIGHT", desc: "Permanent citizen dashboard & accountability.", icon: UsersGroupIcon },
  ];

  return (
    <Section className="relative py-14 md:py-24 overflow-hidden bg-[#050A10]">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-condensed font-bold tracking-[0.2em] uppercase text-accent-blue mb-2 block">
            Operational Model
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.05em] text-foreground">
            HOW THE LEAGUE WORKS
          </h2>
        </motion.div>

        {/* DESKTOP DIAGRAM (md and above) */}
        <motion.div variants={fadeUp} className="hidden md:block relative max-w-xl mx-auto">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
            <path d="M220 70 Q320 70 330 170" stroke="#1E63D8" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-dash" />
            <path d="M330 230 Q320 330 220 330" stroke="#1E63D8" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-dash" />
            <path d="M180 330 Q80 330 70 230" stroke="#1E63D8" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-dash" />
            <path d="M70 170 Q80 70 180 70" stroke="#1E63D8" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-dash" />
          </svg>

          <div className="relative h-[380px]">
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

        {/* MOBILE RESPONSIVE CARDS (< md) */}
        <motion.div variants={fadeUp} className="md:hidden space-y-3 w-full max-w-md mx-auto">
          {/* League Center Card */}
          <div className="p-4 bg-navy-deep border-2 border-electric/50 text-center rounded glow-blue-strong mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded border border-electric/40 bg-electric/10 text-accent-blue mb-2">
              <ShieldIcon className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-lg tracking-wider text-accent-blue">THE LEAGUE</h3>
            <p className="text-xs text-muted-foreground">The central foundation connecting citizen power to government oversight.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {steps.map((item) => (
              <div key={item.title} className="p-3.5 bg-navy/80 border border-blueprint/40 rounded flex items-start gap-3">
                <div className="p-2 rounded bg-electric/10 border border-electric/30 text-accent-blue shrink-0 mt-0.5">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-heading text-base tracking-wider text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 6 — BOOK PROMOTION
   ═══════════════════════════════════════════ */
function BookPromoSection({ onOpenChapterOne }: { onOpenChapterOne: () => void }) {
  const highlights = [
    "First Edition Hardcover",
    "Complete blueprint-inspired civic framework",
    "Direct participation & qualification principles",
    "The 2% threshold roadmap to ballot access",
    "A thought experiment for the future of democracy",
  ];

  return (
    <Section className="relative py-14 md:py-24 border-t border-blueprint/20">
      <div className="absolute inset-0 bg-navy/40" />
      <div className="absolute inset-0 blueprint-grid opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left — Official IMAGINE THE FOLLOWING book cover */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <img
              src="/book-cover.png"
              alt="Imagine The Following by Luke Young"
              className="w-[220px] sm:w-[280px] h-auto drop-shadow-2xl book-float mx-auto"
              style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.6))" }}
            />
          </motion.div>

          {/* Right — Details */}
          <motion.div variants={fadeUp} className="text-left">
            <span className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-accent-blue mb-2.5">
              The Book
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.03em] text-foreground leading-[0.92] mb-3">
              THE FULL PLAN
              <br />
              IS IN THE BOOK.
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md mb-5">
              Explore the complete framework behind a new model for civic participation, public accountability, and structural reform.
            </p>

            <div className="space-y-2 mb-6">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-accent-blue shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onOpenChapterOne}
                className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-electric to-accent-blue text-white text-xs font-bold tracking-[0.12em] uppercase transition-all hover:shadow-[0_0_25px_rgba(35,139,255,0.3)] cursor-pointer flex items-center justify-center gap-2"
              >
                <BookOpen className="h-4 w-4" />
                Read Chapter 1 Free
              </button>
              <Link
                to="/book"
                className="w-full sm:w-auto px-7 py-3 border border-electric/30 text-foreground text-xs font-semibold tracking-[0.12em] uppercase hover:border-accent-blue/50 hover:bg-electric/5 transition-all text-center flex items-center justify-center gap-1.5"
              >
                Order Hardcover
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 7 — MOVEMENT QUOTE
   ═══════════════════════════════════════════ */
function QuoteSection() {
  return (
    <Section className="relative py-14 md:py-24 overflow-hidden bg-[#040810]">
      <div className="absolute inset-0 blueprint-grid opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,99,216,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={fadeUp}>
          <span className="font-heading text-4xl sm:text-6xl text-electric/30 leading-none">"</span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.04em] text-foreground leading-snug mt-1 mb-1 break-words">
            DEMOCRACY WORKS BEST
            <br />
            WHEN <span className="text-accent-blue">THE PEOPLE</span> CAN SEE
            <br />
            <span className="text-accent-blue">THE SYSTEM.</span>
          </h2>
          <span className="font-heading text-4xl sm:text-6xl text-electric/30 leading-none">"</span>
        </motion.div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 8 — FINAL CTA
   ═══════════════════════════════════════════ */
function FinalCTASection() {
  return (
    <Section className="relative py-16 md:py-28 overflow-hidden border-t border-blueprint/30">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
      <div className="absolute inset-0 blueprint-grid opacity-15" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={fadeUp}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.03em] text-foreground leading-[0.95] mb-3 break-words">
            THE FUTURE IS NOT SOMETHING
            <br />
            WE WAIT FOR.
          </h2>
          <p className="font-heading text-xl sm:text-2xl md:text-3xl tracking-[0.04em] text-accent-blue mb-4">
            IT&apos;S SOMETHING WE BUILD TOGETHER.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed">
            Every citizen who joins up to the 2% threshold receives official Founder status and permanent representation in the movement.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-electric to-accent-blue text-white text-xs font-bold tracking-[0.14em] uppercase transition-all hover:shadow-[0_0_30px_rgba(35,139,255,0.35)]"
          >
            Join The League &amp; Claim Founder Number
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
  const [readerOpen, setReaderOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection onOpenChapterOne={() => setReaderOpen(true)} />
        <TopBlurbSection onOpenChapterOne={() => setReaderOpen(true)} />
        <FreeChapterOneSection onOpenChapterOne={() => setReaderOpen(true)} />
        <FrameworkSection />
        <LeagueWorksSection />
        <BookPromoSection onOpenChapterOne={() => setReaderOpen(true)} />
        <QuoteSection />
        <FinalCTASection />
      </main>
      <Footer />

      {/* Free Chapter 1 Reader Modal */}
      <ChapterOneReader
        isOpen={readerOpen}
        onClose={() => setReaderOpen(false)}
      />
    </div>
  );
}
