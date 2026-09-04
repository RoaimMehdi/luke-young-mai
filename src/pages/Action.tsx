import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, Users, MessageSquare, BookOpen, Handshake } from "lucide-react";
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
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,94,255,0.06)_0%,transparent_70%)]" />

      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
        <line x1="0" y1="33%" x2="100%" y2="33%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="0" y1="66%" x2="100%" y2="66%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="33%" y1="0" x2="33%" y2="100%" stroke="#164A7B" strokeWidth="0.5" />
        <line x1="66%" y1="0" x2="66%" y2="100%" stroke="#164A7B" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.h1 variants={fadeUp} className="font-heading text-6xl sm:text-7xl md:text-8xl tracking-wide leading-[0.9] text-foreground glow-text">
            FROM IDEAS
            <br />
            <span className="text-accent-blue">TO ACTION.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground font-light max-w-xl mx-auto">
            A civic action hub for citizens ready to make a difference.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

const initiatives = [
  {
    icon: Users,
    title: "Current Initiatives",
    status: "Active",
    category: "Movement",
    description: "Join active campaigns pushing for structural reform in local and state government. Every voice counts toward building the framework for real accountability.",
    items: [
      "Local Government Transparency Act",
      "Citizen Oversight Pilot Program",
      "Community Accountability Network",
    ],
  },
  {
    icon: MessageSquare,
    title: "Public Discussions",
    status: "Open",
    category: "Dialogue",
    description: "Engage in structured public discourse about policy proposals, civic reform strategies, and community accountability measures.",
    items: [
      "Weekly Civic Forum",
      "Policy Review Sessions",
      "Open Town Halls",
    ],
  },
  {
    icon: BookOpen,
    title: "Civic Action Guides",
    status: "Available",
    category: "Education",
    description: "Step-by-step guides for citizens who want to participate in oversight, propose reforms, and hold elected officials accountable.",
    items: [
      "How to Propose Policy",
      "Citizen Oversight Handbook",
      "Accountability Toolkit",
    ],
  },
  {
    icon: Handshake,
    title: "Community Participation",
    status: "Growing",
    category: "Network",
    description: "Connect with fellow citizens in your district. Build local chapters, organize community reviews, and strengthen civic engagement.",
    items: [
      "Local Chapter Network",
      "District Coordination",
      "Community Action Events",
    ],
  },
];

function InitiativesSection() {
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
              Action Hub
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground">
              GET INVOLVED
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((init) => (
              <motion.div
                key={init.title}
                variants={fadeUp}
                className="p-6 border border-border bg-card/50 hover:border-accent-blue/20 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 border border-accent-blue/30 bg-accent-blue/5 text-accent-blue group-hover:bg-accent-blue/10 transition-colors">
                      <init.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-condensed text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                      {init.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                    <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-muted-foreground">
                      {init.status}
                    </span>
                  </div>
                </div>

                <span className="inline-block px-2 py-0.5 border border-border text-[10px] font-medium tracking-[0.1em] uppercase text-muted-foreground mb-3">
                  {init.category}
                </span>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {init.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {init.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground/80">
                      <div className="w-1 h-px bg-accent-blue/40" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/join"
                  className="inline-flex items-center gap-2 px-5 py-2 border border-accent-blue/30 bg-accent-blue/5 hover:bg-accent-blue/10 text-accent-blue text-[11px] font-semibold tracking-[0.1em] uppercase transition-all"
                >
                  Get Involved
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Action() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <InitiativesSection />
      </main>
      <Footer />
    </div>
  );
}
