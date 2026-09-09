import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Sparkles, PhoneCall, Award, X, Check, Share2, BookOpen, MapPin, Building2, Globe } from "lucide-react";
import { MemberJoinData } from "@/lib/leagueStore";

interface WelcomeScreenModalProps {
  member: MemberJoinData | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenChapterOne?: () => void;
}

export default function WelcomeScreenModal({
  member,
  isOpen,
  onClose,
  onOpenChapterOne,
}: WelcomeScreenModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !member) return null;

  const handleShare = () => {
    const text = `I just joined the League for Representative Democracy as Founder #${member.memberNumber} (#${member.districtRank} in ${member.district})! Join us to build real civic oversight:`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${text} ${window.location.origin}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop with blur & dark gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#03070D]/90 backdrop-blur-xl"
        />

        {/* Celebratory particles in background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: -20,
                x: `${(i * 5.5) % 100}vw`,
                scale: Math.random() * 0.8 + 0.4,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                y: "100vh",
                rotate: [0, 360],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: (i * 0.2) % 3,
                ease: "linear",
              }}
              className={`absolute w-2 h-2 rounded-full ${
                i % 3 === 0
                  ? "bg-accent-blue shadow-[0_0_10px_#238BFF]"
                  : i % 3 === 1
                  ? "bg-cyan-glow shadow-[0_0_10px_#38BDF8]"
                  : "bg-amber-400 shadow-[0_0_10px_#FBBF24]"
              }`}
            />
          ))}
        </div>

        {/* Modal Container — Fully responsive on mobile with max-height and flex-col scroll */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: "spring", damping: 26, stiffness: 320 }}
          className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-navy-deep border border-electric/40 shadow-[0_0_80px_rgba(35,139,255,0.35)] overflow-hidden my-auto z-10 rounded-sm"
        >
          {/* Top Header Bar — Pinned */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-blueprint/30 bg-navy/90 shrink-0">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] sm:text-[11px] font-condensed tracking-[0.2em] uppercase text-accent-blue font-bold">
                League Membership Confirmed
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-white transition-colors p-1.5 rounded"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="p-4 sm:p-7 overflow-y-auto">
            {/* Founder Badge Banner */}
            <div className="text-center mb-5">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.1 }}
                className="inline-flex items-center justify-center p-2.5 sm:p-3 rounded-full bg-gradient-to-b from-electric/20 to-accent-blue/5 border border-accent-blue/40 mb-2.5 glow-blue-strong"
              >
                <Award className="h-7 w-7 sm:h-9 sm:w-9 text-amber-400" />
              </motion.div>

              <div>
                <span className="inline-block px-3 py-0.5 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-[10px] sm:text-[11px] font-condensed font-bold tracking-[0.2em] uppercase rounded-full mb-1.5">
                  ★ 2 Percenter Founder Status ★
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl tracking-wide text-foreground leading-tight">
                WELCOME TO THE LEAGUE,
                <br />
                <span className="text-accent-blue break-words">{member.name.toUpperCase()}!</span>
              </h2>

              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
                You are officially part of the foundation building support for Representative Democracy.
              </p>
            </div>

            {/* BIG HIGHLIGHT: MEMBER # */}
            <div className="relative p-4 sm:p-6 bg-navy/90 border border-accent-blue/30 rounded text-center mb-5 overflow-hidden">
              <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
                <Shield className="w-36 h-36 sm:w-48 sm:h-48 text-accent-blue" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-condensed tracking-[0.25em] uppercase text-accent-blue font-bold">
                Official League Standing
              </span>
              <div className="font-heading text-4xl sm:text-5xl md:text-6xl text-white tracking-widest my-1 glow-text">
                #{member.memberNumber.toLocaleString()}
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground font-condensed tracking-wider uppercase">
                Person to Join the League for Representative Democracy
              </p>
            </div>

            {/* CIVIC RANKING GRID (District, State, Country) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
              {/* District */}
              <div className="p-3 bg-card/60 border border-border/80 rounded flex flex-col items-center text-center">
                <div className="flex items-center gap-1 text-cyan-glow text-[10px] sm:text-[11px] font-condensed font-bold tracking-wider uppercase mb-0.5">
                  <MapPin className="h-3 w-3" />
                  <span>District Rank</span>
                </div>
                <div className="font-heading text-2xl sm:text-3xl text-white tracking-wider">
                  #{member.districtRank}
                </div>
                <span className="text-[10px] sm:text-[11px] text-muted-foreground font-light truncate max-w-full">
                  in {member.district}
                </span>
              </div>

              {/* State */}
              <div className="p-3 bg-card/60 border border-border/80 rounded flex flex-col items-center text-center">
                <div className="flex items-center gap-1 text-accent-blue text-[10px] sm:text-[11px] font-condensed font-bold tracking-wider uppercase mb-0.5">
                  <Building2 className="h-3 w-3" />
                  <span>State Rank</span>
                </div>
                <div className="font-heading text-2xl sm:text-3xl text-white tracking-wider">
                  #{member.stateRank}
                </div>
                <span className="text-[10px] sm:text-[11px] text-muted-foreground font-light truncate max-w-full">
                  in {member.state}
                </span>
              </div>

              {/* Country */}
              <div className="p-3 bg-card/60 border border-border/80 rounded flex flex-col items-center text-center">
                <div className="flex items-center gap-1 text-emerald-400 text-[10px] sm:text-[11px] font-condensed font-bold tracking-wider uppercase mb-0.5">
                  <Globe className="h-3 w-3" />
                  <span>Country Rank</span>
                </div>
                <div className="font-heading text-2xl sm:text-3xl text-white tracking-wider">
                  #{member.countryRank.toLocaleString()}
                </div>
                <span className="text-[10px] sm:text-[11px] text-muted-foreground font-light truncate max-w-full">
                  in {member.country}
                </span>
              </div>
            </div>

            {/* AUTHOR CALL NOTICE (If selected) */}
            {member.requestCall && (
              <div className="p-3.5 bg-accent-blue/10 border border-accent-blue/30 rounded mb-5 flex items-start gap-3">
                <div className="p-2 rounded bg-accent-blue/20 text-accent-blue shrink-0">
                  <PhoneCall className="h-4.5 w-4.5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-condensed text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
                    Personal Welcome Call Requested!
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    Luke Young (book author, not website designer) will be reaching out personally to welcome you to the League:
                  </p>
                  <blockquote className="mt-1.5 text-xs italic text-accent-blue/90 border-l border-accent-blue/50 pl-2.5 py-0.5">
                    "You just read a near 300 page book on government policy then came to the website, then joined!?! It’s the least I can do. Truly."
                  </blockquote>
                </div>
              </div>
            )}

            {/* BUTTON ACTIONS — Responsive flex */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              {onOpenChapterOne && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenChapterOne();
                  }}
                  className="w-full sm:flex-1 py-3 px-4 bg-gradient-to-r from-electric to-accent-blue hover:from-accent-blue hover:to-electric text-white text-xs font-bold tracking-[0.14em] uppercase transition-all shadow-[0_0_20px_rgba(35,139,255,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="h-4 w-4" />
                  Read Free Chapter 1 Now
                </button>
              )}

              <button
                type="button"
                onClick={handleShare}
                className="w-full sm:w-auto py-3 px-4 border border-blueprint/50 bg-navy hover:bg-navy-mid text-foreground text-xs font-semibold tracking-[0.12em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Share2 className="h-4 w-4" />}
                {copied ? "Copied Link!" : "Share Founder Card"}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto py-2.5 px-4 border border-border/50 hover:bg-card/60 text-muted-foreground hover:text-white text-xs font-medium tracking-[0.1em] uppercase transition-colors cursor-pointer text-center"
              >
                Continue to Site
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
