// League dynamic store for membership count, clock, and civic representation

export interface LeagueStats {
  memberCount: number;
  districtsCount: number;
  statesCount: number;
  countriesCount: number;
  foundingDate: string; // ISO date string
}

export interface MemberJoinData {
  id: string;
  name: string;
  district: string;
  state: string;
  country: string;
  email?: string;
  phone?: string;
  requestCall: boolean;
  memberNumber: number;
  districtRank: number;
  stateRank: number;
  countryRank: number;
  joinedAt: string;
}

const STORAGE_KEY_STATS = "lrd_stats_v1";
const STORAGE_KEY_LAST_MEMBER = "lrd_last_member_v1";

// Default baseline data (Oct 15, 2025 launch gives ~328 days on Sept 9, 2026)
const DEFAULT_STATS: LeagueStats = {
  memberCount: 4821,
  districtsCount: 174,
  statesCount: 49,
  countriesCount: 16,
  foundingDate: "2025-10-15T00:00:00Z",
};

export function getLeagueStats(): LeagueStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STATS);
    if (raw) {
      return { ...DEFAULT_STATS, ...JSON.parse(raw) };
    }
  } catch {
    // fallback
  }
  return DEFAULT_STATS;
}

export function saveLeagueStats(stats: LeagueStats) {
  try {
    localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
    window.dispatchEvent(new CustomEvent("league-stats-updated", { detail: stats }));
  } catch (e) {
    console.error("Failed to persist league stats", e);
  }
}

// Calculate days, hours, mins, secs since founding
export function getLeagueAge(foundingDateStr: string = DEFAULT_STATS.foundingDate) {
  const start = new Date(foundingDateStr).getTime();
  const now = Date.now();
  const diff = Math.max(0, now - start);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

// Join the league and return specific member rank statistics
export function registerNewMember(input: {
  name?: string;
  district?: string;
  state?: string;
  country?: string;
  email?: string;
  phone?: string;
  requestCall?: boolean;
}): MemberJoinData {
  const current = getLeagueStats();
  const nextMemberCount = current.memberCount + 1;

  // Derive realistic localized rankings based on national ratio
  const districtName = (input.district || "District 7").trim();
  const stateName = (input.state || "Ohio").trim();
  const countryName = (input.country || "United States").trim();

  // District rank is typically between 12 and 90
  const districtRank = Math.floor(nextMemberCount / 110) + Math.floor(Math.random() * 8) + 1;
  // State rank is typically between 45 and 320
  const stateRank = Math.floor(nextMemberCount / 26) + Math.floor(Math.random() * 12) + 1;
  // Country rank (e.g. US holds majority)
  const countryRank = countryName.toLowerCase().includes("united states") || countryName.toLowerCase() === "usa"
    ? Math.max(1, nextMemberCount - Math.floor(nextMemberCount * 0.14))
    : Math.floor(nextMemberCount * 0.08) + 3;

  const newStats: LeagueStats = {
    ...current,
    memberCount: nextMemberCount,
    districtsCount: current.districtsCount + (Math.random() > 0.65 ? 1 : 0),
    statesCount: Math.min(50, current.statesCount + (Math.random() > 0.9 ? 1 : 0)),
    countriesCount: current.countriesCount + (Math.random() > 0.95 ? 1 : 0),
  };

  saveLeagueStats(newStats);

  const memberData: MemberJoinData = {
    id: "lrd_" + Math.random().toString(36).substring(2, 9),
    name: (input.name && input.name.trim()) || "Civic Supporter",
    district: districtName,
    state: stateName,
    country: countryName,
    email: input.email?.trim() || undefined,
    phone: input.phone?.trim() || undefined,
    requestCall: !!input.requestCall,
    memberNumber: nextMemberCount,
    districtRank,
    stateRank,
    countryRank,
    joinedAt: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  };

  try {
    localStorage.setItem(STORAGE_KEY_LAST_MEMBER, JSON.stringify(memberData));
    window.dispatchEvent(new CustomEvent("league-member-joined", { detail: memberData }));
  } catch {
    // ignore
  }

  return memberData;
}

export function getLastJoinedMember(): MemberJoinData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LAST_MEMBER);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return null;
}
