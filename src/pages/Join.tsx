import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Vote, Award, Shield, BookOpen, PhoneCall } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JoinForm from "@/components/JoinForm";
import ChapterOneReader from "@/components/ChapterOneReader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function HeroSection({ onOpenChapterOne }: { onOpenChapterOne: () => void }) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,94,255,0.08)_0%,transparent_70%)]" />

      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
        <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#164A7B" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-28 pb-12">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 border border-amber-400/40 bg-amber-500/10 text-amber-300 text-[11px] font-condensed font-bold tracking-[0.2em] uppercase mb-6 rounded-full">
            <Award className="h-3.5 w-3.5" />
            2 Percenter Founder Registration Active
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-wide leading-[0.9] text-foreground glow-text">
            A PLATFORM FOR
            <br />
            <span className="text-accent-blue">DIRECT CIVIC ACTION.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Join the League and help build the 2% support threshold required to unlock ballot access and direct public oversight.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={onOpenChapterOne}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-mid border border-accent-blue/40 text-accent-blue hover:text-white hover:bg-accent-blue/20 text-xs font-condensed font-bold tracking-[0.14em] uppercase transition-all"
            >
              <BookOpen className="h-4 w-4" />
              Read Free Chapter 1 (No Sign-Up)
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FounderCommitmentSection() {
  const commitments = [
    {
      icon: Award,
      title: "2 Percenter Founder Standing",
      desc: "Every citizen who joins before the 2% voter threshold is reached is permanently recorded as an official Founder.",
    },
    {
      icon: Eye,
      title: "Direct Public Oversight",
      desc: "Prepare for the operational PIQ app allowing members to review and challenge policy directly.",
    },
    {
      icon: PhoneCall,
      title: "Personal Welcome Call",
      desc: "Option to receive a personal welcome call from book author Luke Young upon joining.",
    },
    {
      icon: Shield,
      title: "Zero Mandatory Contact Info",
      desc: "Contact information is completely optional. If you prefer to stay in the loop privately, you know where the site is.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 border-y border-blueprint/30 bg-[#040810]">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-10 text-center">
            <span className="inline-block text-[11px] font-condensed font-bold tracking-[0.2em] uppercase text-accent-blue mb-2">
              The 2% Strategy
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground">
              FOUNDER PRIVILEGES &amp; COMMITMENT
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                className="flex flex-col p-6 border border-border bg-card/60 hover:border-accent-blue/40 transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 border border-accent-blue/30 bg-accent-blue/10 text-accent-blue mb-4">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="font-condensed text-sm font-semibold tracking-[0.1em] uppercase text-foreground mb-1">
                  {b.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function JoinFormSection({ onOpenChapterOne }: { onOpenChapterOne: () => void }) {
  return (
    <section className="relative py-20 md:py-28">
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
              CLAIM YOUR FOUNDER STATUS
            </h2>
            <p className="text-sm text-muted-foreground">
              Join the registry to receive your official Member # and civic district ranking.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="p-6 sm:p-8 glass-panel glow-blue">
            <JoinForm onOpenChapterOne={onOpenChapterOne} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Join() {
  const [readerOpen, setReaderOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection onOpenChapterOne={() => setReaderOpen(true)} />
        <FounderCommitmentSection />
        <JoinFormSection onOpenChapterOne={() => setReaderOpen(true)} />
      </main>
      <Footer />

      <ChapterOneReader
        isOpen={readerOpen}
        onClose={() => setReaderOpen(false)}
      />
    </div>
  );
}
