import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<"dark" | "reveal" | "line" | "exit">("dark");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("reveal"), 400),
      setTimeout(() => setPhase("line"), 1800),
      setTimeout(() => setPhase("exit"), 3000),
      setTimeout(() => onComplete(), 3600),
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
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#030710" }}
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
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              phase !== "dark"
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute pointer-events-none"
            style={{
              width: 500,
              height: 300,
              background:
                "radial-gradient(ellipse at center, rgba(30,99,216,0.1) 0%, transparent 70%)",
            }}
          />

          {/* Official LUKE YOUNG logo — reveal with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              phase !== "dark"
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.85 }
            }
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <img
              src="/logo-ly.png"
              alt="Luke Young"
              className="h-14 sm:h-16 w-auto"
              style={{
                filter: "drop-shadow(0 0 30px rgba(35,139,255,0.25))",
              }}
            />
          </motion.div>

          {/* Loading progress line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              phase === "line" ? { opacity: 1 } : { opacity: 0 }
            }
            transition={{ duration: 0.3 }}
            className="mt-10 w-44 sm:w-52"
          >
            <div className="h-px bg-blueprint/30 w-full relative overflow-hidden rounded-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={phase === "line" ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 origin-left rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #238BFF, transparent)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
