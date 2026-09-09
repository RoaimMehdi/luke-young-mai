import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, X, ZoomIn, ZoomOut, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router";

interface ChapterOneReaderProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenJoin?: () => void;
}

export default function ChapterOneReader({
  isOpen,
  onClose,
  onOpenJoin,
}: ChapterOneReaderProps) {
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const progress = Math.min(100, Math.max(0, (scrollTop / (scrollHeight - clientHeight)) * 100));
    setScrollProgress(progress);
  };

  if (!isOpen) return null;

  const fontClasses = {
    sm: "text-xs sm:text-sm leading-relaxed",
    base: "text-sm sm:text-base leading-relaxed sm:leading-loose",
    lg: "text-base sm:text-lg leading-relaxed sm:leading-loose",
  }[fontSize];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-0 sm:p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Reader Container */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl h-full sm:h-[90vh] bg-[#070F1A] border-0 sm:border border-blueprint/50 shadow-2xl flex flex-col z-10 overflow-hidden"
        >
          {/* Reading Progress Line */}
          <div className="w-full h-1 bg-navy-mid shrink-0">
            <div
              className="h-full bg-gradient-to-r from-electric via-accent-blue to-cyan-glow transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Top Reader Controls Bar */}
          <header className="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3.5 border-b border-border/80 bg-navy-deep/95 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-2">
              <div className="p-1 sm:p-1.5 rounded bg-accent-blue/10 border border-accent-blue/30 text-accent-blue shrink-0">
                <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div>
                <h3 className="font-heading text-xs sm:text-base tracking-wider text-foreground uppercase truncate max-w-[190px] sm:max-w-none">
                  Imagine The Following — Chapter 1
                </h3>
                <p className="text-[9px] sm:text-[10px] text-muted-foreground font-condensed tracking-widest uppercase hidden sm:block">
                  By Luke Young • Free Reader (No Sign-Up Required)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              {/* Font Sizer */}
              <div className="flex items-center border border-border/70 rounded bg-navy-mid/60 p-0.5">
                <button
                  type="button"
                  onClick={() => setFontSize(fontSize === "lg" ? "base" : "sm")}
                  disabled={fontSize === "sm"}
                  className="p-1 text-muted-foreground hover:text-foreground disabled:opacity-40"
                  title="Smaller text"
                >
                  <ZoomOut className="h-3.5 w-3.5" />
                </button>
                <span className="text-[10px] font-condensed uppercase px-1.5 text-accent-blue">
                  {fontSize}
                </span>
                <button
                  type="button"
                  onClick={() => setFontSize(fontSize === "sm" ? "base" : "lg")}
                  disabled={fontSize === "lg"}
                  className="p-1 text-muted-foreground hover:text-foreground disabled:opacity-40"
                  title="Larger text"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Close Reader */}
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close reader"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </header>

          {/* Book Content Scroll Area */}
          <div
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto px-4 sm:px-12 md:px-20 py-6 sm:py-10 bg-[#070E18] text-[#D4DEE8] selection:bg-accent-blue/30"
          >
            <div className="max-w-2xl mx-auto">
              {/* Cover Note & Heading */}
              <div className="border-b border-border/70 pb-6 sm:pb-8 mb-8 text-center">
                <span className="inline-block text-[10px] sm:text-[11px] font-condensed font-bold tracking-[0.22em] text-accent-blue uppercase mb-2 sm:mb-3 px-2.5 py-0.5 bg-accent-blue/10 border border-accent-blue/30">
                  Free Unrestricted Access • 12 Min Read
                </span>
                <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl text-foreground tracking-wide mt-1">
                  CHAPTER 1: THE FOUNDATION &amp; CIVIC SOVEREIGNTY
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-light max-w-lg mx-auto italic">
                  From "Imagine The Following: A Thought Experiment for the Future of Democracy" by Luke Young.
                </p>

                {/* The Author's direct note from prompt */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded bg-navy-mid/60 border border-blueprint/40 text-left">
                  <div className="text-[10px] font-condensed font-bold tracking-[0.2em] text-accent-blue uppercase mb-1">
                    Why Give This Away?
                  </div>
                  <p className="text-xs text-foreground/90 leading-relaxed">
                    Because it could help. But only if people get a chance to see it whether they have money to spend on a book or not. I’d rather let people read than microdose.
                  </p>
                </div>
              </div>

              {/* Book Chapters / Paragraphs */}
              <article className={`space-y-4 sm:space-y-6 ${fontClasses} font-serif tracking-normal text-[#D6E0EC]`}>
                <p className="first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-heading first-letter:text-accent-blue first-letter:float-left first-letter:mr-2.5 sm:first-letter:mr-3 first-letter:leading-none">
                  Imagine waking up in a country where elected representation is not an abstract slogan printed on bumper stickers once every four years, but an active, functioning reality. Imagine a society where the laws that govern your community, your taxes, and your civil liberties are not quietly negotiated behind mahogany doors by special interest lobbyists, but reviewed and held accountable by the very people expected to live under them.
                </p>

                <p>
                  For generations, citizens have been taught to treat democracy as a passive spectator sport. We are told to cast a ballot in November and then spend the next several years in frustrated silence, hoping that campaign promises survive the legislative grinding machine. When promises inevitably collapse, the blame is placed on partisan polarization, media cycles, or voter apathy. But the fundamental breakdown is neither cultural nor psychological. It is structural.
                </p>

                <div className="my-6 sm:my-8 py-3 sm:py-5 px-4 sm:px-6 border-l-2 border-accent-blue bg-navy/60 font-sans text-xs sm:text-sm italic text-cyan-glow">
                  "Until the people have an organized mechanism to propose, review, and veto policy outside the grip of self-interested cartels, genuine representative democracy remains an illusion."
                </div>

                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground tracking-wide mt-8 pt-3 border-t border-border/40 font-sans">
                  The Power of the 2 Percent Threshold
                </h2>

                <p>
                  Most reform movements fail because they demand total, immediate political dominance before producing any practical leverage. They believe they must build a multi-billion dollar machine capable of winning 51 percent of the electorate before a single policy shift can occur. But in a finely balanced representative system, leverage does not require 51 percent on day one. It begins with two percent.
                </p>

                <p>
                  Until a movement reaches two percent support among registered voters, ballot access remains an almost insurmountable bureaucratic hurdle designed by the entrenched establishment to keep independent citizen movements locked outside. But once that two percent threshold is crossed, everything changes. The threshold unlocks formal standing, media visibility, and the undeniable constitutional reality of citizen mobilization. That is why every individual who joins at this early stage is not merely a supporter—they are a Founder.
                </p>

                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground tracking-wide mt-8 pt-3 border-t border-border/40 font-sans">
                  The League vs. The Political Party
                </h2>

                <p>
                  A critical distinction must be understood from the outset: the League for Representative Democracy is not born as a political party. It is a civic foundation. Its immediate purpose is to assemble the necessary human scale—district by district, state by state—to make direct representation possible.
                </p>

                <p>
                  Many hands make light work. When enough supporters unite to call an inaugural convention, the members themselves will debate and ratify a comprehensive platform that truly reflects the collective will of the people—not donors or consultants. By that time, our objective is to deploy an operational PIQ (Public Inquiry &amp; Qualification) platform, enabling every member to review proposed legislation, verify transparency, and exercise continuous oversight directly from their phones or computers.
                </p>

                <p>
                  Should that platform be democratically ratified at convention, the inevitable next step will be the creation of an official political party to contest elections. At that juncture, members will be free to join the official party or remain solely within the League. The League itself will always belong to the citizens, safeguarding the civic right to oversight no matter which officials occupy office.
                </p>

                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground tracking-wide mt-8 pt-3 border-t border-border/40 font-sans">
                  Your Standing in the Blueprint
                </h2>

                <p>
                  You are reading this because you understand that cynicism is a luxury we can no longer afford. Government by the people requires people willing to step forward and be counted. When you register with the League, whether you choose to provide full contact details or remain completely private, your number is recorded in the permanent civic registry of this movement.
                </p>

                <p>
                  Democracy will not fix itself. It will only be restored when ordinary citizens choose to become the architects of their own future.
                </p>
              </article>

              {/* End of Chapter Action Card */}
              <div className="mt-8 sm:mt-12 p-5 sm:p-8 bg-navy/90 border border-electric/40 rounded-lg text-center font-sans">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-accent-blue mx-auto mb-2 sm:mb-3" />
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground tracking-wide">
                  READY TO BE COUNTED?
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                  Help us reach the 2 percent threshold and establish your place as an official Founder of the League for Representative Democracy.
                </p>

                <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                  {onOpenJoin ? (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenJoin();
                      }}
                      className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-electric to-accent-blue text-white text-xs font-bold tracking-[0.14em] uppercase hover:shadow-[0_0_25px_rgba(35,139,255,0.3)] transition-all flex items-center justify-center gap-2"
                    >
                      Join The League Now
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      to="/join"
                      onClick={onClose}
                      className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-electric to-accent-blue text-white text-xs font-bold tracking-[0.14em] uppercase hover:shadow-[0_0_25px_rgba(35,139,255,0.3)] transition-all flex items-center justify-center gap-2"
                    >
                      Join The League Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}

                  <Link
                    to="/book"
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-3 border border-blueprint/50 text-foreground text-xs font-semibold tracking-[0.12em] uppercase hover:bg-card transition-colors text-center"
                  >
                    Order The Full Book
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
