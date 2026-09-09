import { useState } from "react";
import { Shield, PhoneCall, Sparkles, HelpCircle } from "lucide-react";
import { registerNewMember, MemberJoinData } from "@/lib/leagueStore";
import WelcomeScreenModal from "@/components/WelcomeScreenModal";

interface JoinFormProps {
  compact?: boolean;
  onSuccess?: (member: MemberJoinData) => void;
  onOpenChapterOne?: () => void;
}

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
  "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming", "District of Columbia", "Other / International"
];

export default function JoinForm({ compact = false, onSuccess, onOpenChapterOne }: JoinFormProps) {
  const [name, setName] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("Ohio");
  const [country, setCountry] = useState("United States");
  const [email, setEmail] = useState("");
  const [requestCall, setRequestCall] = useState(false);
  const [phone, setPhone] = useState("");
  const [showContactInfo, setShowContactInfo] = useState(false);

  // Modal State
  const [activeMember, setActiveMember] = useState<MemberJoinData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const member = registerNewMember({
      name: name.trim() || "Civic Supporter",
      district: district.trim() || "District 1",
      state: state.trim() || "Ohio",
      country: country.trim() || "United States",
      email: email.trim() || undefined,
      phone: requestCall && phone.trim() ? phone.trim() : undefined,
      requestCall,
    });

    setActiveMember(member);
    setIsModalOpen(true);

    if (onSuccess) {
      onSuccess(member);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 text-left w-full">
        {!compact && (
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-condensed font-bold tracking-[0.2em] uppercase text-accent-blue flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-cyan-glow shrink-0" />
                <span>Become A 2% Founder</span>
              </span>
              <span className="text-[10px] text-muted-foreground font-condensed uppercase tracking-wider">
                Instant Registration
              </span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl tracking-[0.05em] text-foreground mt-0.5">
              JOIN THE LEAGUE
            </h3>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Every supporter up to the 2% threshold receives official Founder status and permanent standing in their district.
            </p>
          </div>
        )}

        {/* Name */}
        <div>
          <label className="block text-[11px] font-condensed uppercase tracking-wider text-muted-foreground mb-1">
            Your Name / Supporter Alias <span className="text-muted-foreground/60">(Optional)</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2.5 bg-[#091523] text-foreground text-base sm:text-sm border border-blueprint/50 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors rounded-none"
            placeholder="e.g. Eleanor Vance (or leave blank)"
          />
        </div>

        {/* Location Row: District & State */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label className="block text-[11px] font-condensed uppercase tracking-wider text-foreground mb-1 font-semibold">
              District / Zip Code <span className="text-accent-blue">*</span>
            </label>
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
              className="w-full px-3 py-2.5 bg-[#091523] text-foreground text-base sm:text-sm border border-blueprint/50 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors rounded-none"
              placeholder="e.g. District 7 or 43215"
            />
          </div>

          <div>
            <label className="block text-[11px] font-condensed uppercase tracking-wider text-foreground mb-1 font-semibold">
              State / Region <span className="text-accent-blue">*</span>
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#091523] text-foreground text-base sm:text-sm border border-blueprint/50 focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors rounded-none"
            >
              {US_STATES.map((st) => (
                <option key={st} value={st} className="bg-navy-deep text-foreground">
                  {st}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Country */}
        <div>
          <label className="block text-[11px] font-condensed uppercase tracking-wider text-muted-foreground mb-1">
            Country
          </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-3 py-2.5 bg-[#091523] text-foreground text-base sm:text-sm border border-blueprint/50 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors rounded-none"
            placeholder="United States"
          />
        </div>

        {/* CONTACT INFO (EXPLICITLY NOT REQUIRED) */}
        <div className="pt-2 border-t border-blueprint/30">
          <button
            type="button"
            onClick={() => setShowContactInfo(!showContactInfo)}
            className="flex items-center justify-between w-full text-left py-1 text-xs font-condensed uppercase tracking-wider text-accent-blue hover:text-cyan-glow transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <HelpCircle className="h-3.5 w-3.5 shrink-0" />
              <span>Contact Information <span className="text-[10px] text-muted-foreground font-normal">(Not Required)</span></span>
            </span>
            <span className="text-[10px] underline ml-2 shrink-0">
              {showContactInfo ? "Hide" : "Add Optional Email"}
            </span>
          </button>

          {showContactInfo && (
            <div className="mt-2.5 p-3 rounded bg-navy-mid/80 border border-blueprint/30 space-y-2">
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Contact information is completely optional. It helps prove these are real people and receive a monthly newsletter at most. If you prefer not to share, you know where the website is!
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-[#060D17] text-foreground text-base sm:text-sm border border-blueprint/40 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors rounded-none"
                placeholder="Optional Email Address"
              />
            </div>
          )}
        </div>

        {/* OPTION FOR WELCOME PHONE CALL FROM LUKE YOUNG */}
        <div className="p-3 bg-navy-mid/80 border border-accent-blue/30 rounded">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={requestCall}
              onChange={(e) => setRequestCall(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-blueprint/60 text-accent-blue focus:ring-accent-blue bg-[#091523] shrink-0"
            />
            <div className="text-xs">
              <span className="font-condensed font-bold tracking-wider uppercase text-foreground flex items-center gap-1.5">
                <PhoneCall className="h-3.5 w-3.5 text-accent-blue shrink-0" />
                <span>Personal Welcome Call from Luke Young</span>
              </span>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                (Book author, not website designer) — If you just read a 300-page book on policy and joined, it's the least I can do!
              </p>
            </div>
          </label>

          {requestCall && (
            <div className="mt-2.5 pl-6 pt-1 border-t border-blueprint/30">
              <label className="block text-[10px] font-condensed uppercase tracking-wider text-accent-blue mb-1 font-semibold">
                Your Phone Number for Luke's Call:
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required={requestCall}
                className="w-full px-3 py-2 bg-[#060D17] text-foreground text-base sm:text-xs border border-accent-blue/50 placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent-blue rounded-none"
                placeholder="(555) 000-0000"
              />
            </div>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full py-3.5 bg-gradient-to-r from-electric via-accent-blue to-electric hover:from-accent-blue hover:to-electric text-white text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 hover:shadow-[0_0_30px_rgba(35,139,255,0.4)] flex items-center justify-center gap-2 cursor-pointer"
        >
          <Shield className="h-4 w-4 shrink-0" />
          <span>Join The League &amp; Get Founder Number</span>
        </button>

        <p className="text-[10px] text-center text-muted-foreground/70 font-condensed tracking-wider uppercase">
          100% Free • No Mandatory Sign-Up • Instant Civic Standing
        </p>
      </form>

      {/* Welcome Screen Modal when joined */}
      <WelcomeScreenModal
        member={activeMember}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOpenChapterOne={onOpenChapterOne}
      />
    </>
  );
}
