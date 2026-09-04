import { motion } from "framer-motion";
import { Eye, Vote, Bell, Shield } from "lucide-react";
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,94,255,0.08)_0%,transparent_70%)]" />

      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
        <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#164A7B" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 border border-accent-blue/30 bg-accent-blue/5 text-accent-blue text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
            Join The Movement
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-wide leading-[0.9] text-foreground glow-text">
            A PLATFORM FOR
            <br />
            <span className="text-accent-blue">DIRECT CIVIC ACTION.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Join the League and help build a stronger system that works for the people.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: Eye,
      title: "Public Oversight",
      desc: "Participate in public oversight discussions and help shape how government decisions are reviewed.",
    },
    {
      icon: Vote,
      title: "Vote on Proposals",
      desc: "Vote on proposals affecting communities and have a direct say in civic reform.",
    },
    {
      icon: Bell,
      title: "Movement Updates",
      desc: "Receive regular updates on initiatives, progress, and opportunities to get involved.",
    },
    {
      icon: Shield,
      title: "Hold Power Accountable",
      desc: "Help hold power accountable through structured oversight and community action.",
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
          <motion.div variants={fadeUp} className="mb-12">
            <span className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-accent-blue mb-4">
              Why Join
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground">
              YOUR ROLE IN THE MOVEMENT
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                className="flex items-start gap-4 p-6 border border-border bg-card/50 hover:border-accent-blue/20 transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 shrink-0 border border-accent-blue/30 bg-accent-blue/5 text-accent-blue">
                  <b.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-condensed text-sm font-semibold tracking-[0.1em] uppercase text-foreground mb-1">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function JoinFormSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-navy-mid/30" />
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-8">
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wide text-foreground mb-2">
              JOIN THE LEAGUE
            </h2>
            <p className="text-sm text-muted-foreground">
              Enter your information to become part of the movement.
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

export default function Join() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <JoinFormSection />
      </main>
      <Footer />
    </div>
  );
}
