import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background flex flex-col"
    >
      <div className="flex-1 flex flex-col items-center justify-center blueprint-grid">
        <div className="relative z-10 max-w-5xl mx-auto relative px-4 text-center">
          <h1 className="font-heading text-8xl sm:text-9xl tracking-wide text-foreground glow-text mb-4">
            404
          </h1>
          <p className="font-heading text-2xl tracking-wider text-muted-foreground mb-8">
            PAGE NOT FOUND
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent-blue/30 bg-accent-blue/5 hover:bg-accent-blue/10 text-accent-blue text-xs font-semibold tracking-[0.12em] uppercase transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Return Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
