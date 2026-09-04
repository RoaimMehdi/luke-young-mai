import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Send, ArrowRight } from "lucide-react";
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
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
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
            CONTACT & PRESS
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground font-light max-w-lg mx-auto">
            To build the future, we need serious conversations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function FormsSection() {
  const [mediaSubmitted, setMediaSubmitted] = useState(false);
  const [platformSubmitted, setPlatformSubmitted] = useState(false);

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Media Inquiries */}
          <motion.div variants={fadeUp} className="p-8 glass-panel glow-blue">
            <span className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-accent-blue mb-2">
              Media Inquiries
            </span>
            <h2 className="font-heading text-2xl tracking-wide text-foreground mb-6">
              FOR PRESS & MEDIA
            </h2>

            {mediaSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-blue/10 border border-accent-blue/30 mb-3">
                  <Send className="h-5 w-5 text-accent-blue" />
                </div>
                <p className="text-sm text-foreground font-medium">Inquiry Sent</p>
                <p className="text-xs text-muted-foreground mt-1">We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setMediaSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground mb-1.5">Your Name</label>
                  <input type="text" required className="w-full px-4 py-2.5 bg-navy-deep border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-colors" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground mb-1.5">Media Outlet</label>
                  <input type="text" required className="w-full px-4 py-2.5 bg-navy-deep border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-colors" placeholder="Publication or network" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground mb-1.5">Email Address</label>
                  <input type="email" required className="w-full px-4 py-2.5 bg-navy-deep border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground mb-1.5">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-2.5 bg-navy-deep border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-colors resize-none" placeholder="Your inquiry..." />
                </div>
                <button type="submit" className="w-full py-3 bg-accent-blue hover:bg-accent-blue/90 text-white text-xs font-semibold tracking-[0.12em] uppercase transition-all hover:shadow-[0_0_20px_rgba(30,94,255,0.3)]">
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>

          {/* Platform Inquiries */}
          <motion.div variants={fadeUp} className="p-8 glass-panel glow-blue">
            <span className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase text-accent-blue mb-2">
              Platform Inquiries
            </span>
            <h2 className="font-heading text-2xl tracking-wide text-foreground mb-6">
              GENERAL INQUIRIES
            </h2>

            {platformSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-blue/10 border border-accent-blue/30 mb-3">
                  <Send className="h-5 w-5 text-accent-blue" />
                </div>
                <p className="text-sm text-foreground font-medium">Message Sent</p>
                <p className="text-xs text-muted-foreground mt-1">We'll respond within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setPlatformSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground mb-1.5">Your Name</label>
                  <input type="text" required className="w-full px-4 py-2.5 bg-navy-deep border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-colors" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground mb-1.5">Email Address</label>
                  <input type="email" required className="w-full px-4 py-2.5 bg-navy-deep border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground mb-1.5">Subject</label>
                  <input type="text" required className="w-full px-4 py-2.5 bg-navy-deep border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-colors" placeholder="Subject" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground mb-1.5">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-2.5 bg-navy-deep border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-colors resize-none" placeholder="Your message..." />
                </div>
                <button type="submit" className="w-full py-3 bg-accent-blue hover:bg-accent-blue/90 text-white text-xs font-semibold tracking-[0.12em] uppercase transition-all hover:shadow-[0_0_20px_rgba(30,94,255,0.3)]">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BottomCTASection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-navy-mid/30" />
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground mb-4">
            TOGETHER, WE BUILD THE FUTURE.
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-blue hover:bg-accent-blue/90 text-white text-xs font-semibold tracking-[0.12em] uppercase transition-all hover:shadow-[0_0_20px_rgba(30,94,255,0.3)]"
            >
              Join The League
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <FormsSection />
        <BottomCTASection />
      </main>
      <Footer />
    </div>
  );
}
