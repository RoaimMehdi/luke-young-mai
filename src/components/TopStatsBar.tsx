import { useState, useEffect } from "react";
import { Clock, Users, MapPin, Globe, Sparkles } from "lucide-react";
import { getLeagueStats, getLeagueAge, LeagueStats } from "@/lib/leagueStore";

export default function TopStatsBar() {
  const [stats, setStats] = useState<LeagueStats>(getLeagueStats());
  const [age, setAge] = useState(getLeagueAge(stats.foundingDate));
  const [highlightMemberCount, setHighlightMemberCount] = useState(false);

  useEffect(() => {
    // Clock updates every second
    const timer = setInterval(() => {
      setAge(getLeagueAge(stats.foundingDate));
    }, 1000);

    // Listen for live league updates
    const handleStatsUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<LeagueStats>;
      if (customEvent.detail) {
        setStats(customEvent.detail);
        setHighlightMemberCount(true);
        setTimeout(() => setHighlightMemberCount(false), 2400);
      }
    };

    window.addEventListener("league-stats-updated", handleStatsUpdate);

    return () => {
      clearInterval(timer);
      window.removeEventListener("league-stats-updated", handleStatsUpdate);
    };
  }, [stats.foundingDate]);

  return (
    <div className="w-full bg-[#03070D] border-b border-blueprint/30 text-foreground py-1 px-2.5 sm:px-6 relative z-50 overflow-hidden font-condensed tracking-wider text-xs">
      {/* Subtle blueprint scanline glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-blue/5 pointer-events-none" />

      {/* DESKTOP LAYOUT (md and above): Single clean horizontal row */}
      <div className="hidden md:flex mx-auto max-w-7xl items-center justify-between gap-4">
        {/* LEFT: League Age (Days Old Clock) */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-electric/10 border border-electric/30 text-accent-blue font-semibold">
            <Clock className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            <span className="text-[10px] tracking-[0.16em] uppercase">League Age:</span>
            <span className="font-heading text-sm text-white font-normal tracking-widest">
              {age.days} <span className="text-[10px] text-accent-blue uppercase">Days</span>
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground font-mono">
            {String(age.hours).padStart(2, "0")}h {String(age.minutes).padStart(2, "0")}m {String(age.seconds).padStart(2, "0")}s
          </span>
        </div>

        {/* CENTER: Member Count (Constantly Updating) */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-2 px-3 py-0.5 rounded border transition-all duration-500 ${
              highlightMemberCount
                ? "bg-accent-blue/20 border-accent-blue scale-105 shadow-[0_0_15px_rgba(35,139,255,0.5)]"
                : "bg-navy-mid/70 border-blueprint/40"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-glow opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue" />
            </span>
            <Users className="h-3.5 w-3.5 text-accent-blue" />
            <span className="text-[10px] uppercase text-muted-foreground tracking-[0.14em]">
              Supporters &amp; Founders:
            </span>
            <span className="font-heading text-sm font-bold text-white tracking-widest">
              {stats.memberCount.toLocaleString()}
            </span>
            {highlightMemberCount && (
              <span className="flex items-center gap-0.5 text-[9px] text-emerald-400 font-bold uppercase animate-pulse">
                <Sparkles className="h-2.5 w-2.5" /> +1 Joined
              </span>
            )}
          </div>
        </div>

        {/* RIGHT: Districts / States / Countries Represented */}
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-1.5" title="Congressional Districts Represented">
            <MapPin className="h-3 w-3 text-cyan-glow" />
            <span className="text-white font-semibold font-heading text-xs tracking-wider">
              {stats.districtsCount}
            </span>
            <span className="uppercase text-[10px] tracking-wider">Districts</span>
          </div>

          <span className="text-blueprint/60">•</span>

          <div className="flex items-center gap-1.5" title="States Represented">
            <span className="text-white font-semibold font-heading text-xs tracking-wider">
              {stats.statesCount}
            </span>
            <span className="uppercase text-[10px] tracking-wider">States</span>
          </div>

          <span className="text-blueprint/60">•</span>

          <div className="flex items-center gap-1.5" title="Countries Represented">
            <Globe className="h-3 w-3 text-accent-blue" />
            <span className="text-white font-semibold font-heading text-xs tracking-wider">
              {stats.countriesCount}
            </span>
            <span className="uppercase text-[10px] tracking-wider">Countries</span>
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT (< md): Ultra-clean 2-row tactical HUD */}
      <div className="md:hidden flex flex-col gap-1 py-0.5">
        {/* Row 1: League Age & Live Member Counter */}
        <div className="flex items-center justify-between gap-1.5 w-full">
          {/* Age */}
          <div className="flex items-center gap-1 bg-electric/10 border border-electric/30 px-2 py-0.5 rounded text-accent-blue">
            <Clock className="h-3 w-3 animate-spin" style={{ animationDuration: "12s" }} />
            <span className="text-[9px] uppercase tracking-wider">Age:</span>
            <span className="font-heading text-xs text-white font-bold tracking-wider">
              {age.days}d {String(age.hours).padStart(2, "0")}h {String(age.minutes).padStart(2, "0")}m {String(age.seconds).padStart(2, "0")}s
            </span>
          </div>

          {/* Member Count */}
          <div
            className={`flex items-center gap-1.5 px-2 py-0.5 rounded border transition-all duration-300 ${
              highlightMemberCount
                ? "bg-accent-blue/20 border-accent-blue"
                : "bg-navy-mid/80 border-blueprint/40"
            }`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-glow opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-blue" />
            </span>
            <span className="text-[9px] uppercase text-muted-foreground tracking-wider">Members:</span>
            <span className="font-heading text-xs font-bold text-white tracking-widest">
              {stats.memberCount.toLocaleString()}
            </span>
            {highlightMemberCount && (
              <span className="text-[9px] text-emerald-400 font-bold animate-pulse">+1</span>
            )}
          </div>
        </div>

        {/* Row 2: Representation */}
        <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground/90 border-t border-blueprint/15 pt-0.5">
          <div className="flex items-center gap-1">
            <MapPin className="h-2.5 w-2.5 text-cyan-glow" />
            <span className="text-white font-bold font-heading text-[11px]">{stats.districtsCount}</span>
            <span className="uppercase text-[9px]">Districts</span>
          </div>
          <span className="text-blueprint/60">•</span>
          <div className="flex items-center gap-1">
            <span className="text-white font-bold font-heading text-[11px]">{stats.statesCount}</span>
            <span className="uppercase text-[9px]">States</span>
          </div>
          <span className="text-blueprint/60">•</span>
          <div className="flex items-center gap-1">
            <Globe className="h-2.5 w-2.5 text-accent-blue" />
            <span className="text-white font-bold font-heading text-[11px]">{stats.countriesCount}</span>
            <span className="uppercase text-[9px]">Countries</span>
          </div>
        </div>
      </div>
    </div>
  );
}
