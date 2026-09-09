import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<"dark" | "reveal" | "line" | "exit">("dark");

  const finish = useCallback(() => {
    setPhase("exit");
    setTimeout(onComplete, 200);
  }, [onComplete]);

  useEffect(() => {
    // Quick, snappy loading sequence (~1.2s total)
    const timers = [
      setTimeout(() => setPhase("reveal"), 150),
      setTimeout(() => setPhase("line"), 550),
      setTimeout(() => setPhase("exit"), 1100),
      setTimeout(() => onComplete(), 1300),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={finish}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center cursor-pointer select-none"
          style={{ background: "#030710" }}
          title="Click or tap to enter"
        >
          {/* Subtle blueprint grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(30,99,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,99,216,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Radial glow behind logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              phase !== "dark"
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.6 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute pointer-events-none"
            style={{
              width: 400,
              height: 250,
              background:
                "radial-gradient(ellipse at center, rgba(30,99,216,0.15) 0%, transparent 70%)",
            }}
          />

          {/* Official LUKE YOUNG logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={
              phase !== "dark"
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.88 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative px-4 text-center"
          >
            <img
              src="/logo-ly.png"
              alt="Luke Young"
              className="h-12 sm:h-16 w-auto mx-auto"
              style={{
                filter: "drop-shadow(0 0 30px rgba(35,139,255,0.3))",
              }}
            />
          </motion.div>

          {/* Loading progress line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase === "line" ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-6 w-36 sm:w-48"
          >
            <div className="h-0.5 bg-blueprint/30 w-full relative overflow-hidden rounded-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={phase === "line" ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 origin-left rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #238BFF, transparent)",
                }}
              />
            </div>
          </motion.div>

          {/* Tap to skip hint on mobile */}
          <p className="mt-4 text-[10px] text-muted-foreground/50 tracking-widest uppercase font-condensed">
            Tap anywhere to enter
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
