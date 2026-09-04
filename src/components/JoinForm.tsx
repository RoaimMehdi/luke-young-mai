import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function JoinForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-blue/10 border border-accent-blue/30 mb-4">
          <CheckCircle className="h-7 w-7 text-accent-blue" />
        </div>
        <h3 className="font-heading text-2xl tracking-wide text-foreground mb-2">
          Welcome to the League!
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          Thank you for joining the movement. Together, we build a stronger system that works for the people.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {!compact && (
        <h3 className="font-heading text-lg tracking-[0.08em] text-foreground mb-1">
          JOIN THE LEAGUE
        </h3>
      )}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-2.5 bg-white text-gray-900 text-sm border border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/40 focus:border-accent-blue/60 transition-colors"
        placeholder="Full Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-2.5 bg-white text-gray-900 text-sm border border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/40 focus:border-accent-blue/60 transition-colors"
        placeholder="Email Address"
      />
      <input
        type="text"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        required
        className="w-full px-4 py-2.5 bg-white text-gray-900 text-sm border border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/40 focus:border-accent-blue/60 transition-colors"
        placeholder="Zip Code / District"
      />
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-electric to-accent-blue hover:from-accent-blue hover:to-electric text-white text-xs font-bold tracking-[0.12em] uppercase transition-all duration-200 hover:shadow-[0_0_25px_rgba(35,139,255,0.3)]"
      >
        Join The League
      </button>
    </form>
  );
}
