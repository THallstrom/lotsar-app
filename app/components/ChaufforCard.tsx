import type { ChaufforProfile } from "../types/chauffor";
import Button from "./Button";

const tagStyles: Record<string, string> = {
  "Tillgänglig nu": "bg-[#f56600]",
  Premium: "bg-[#f59e0b]",
};

type ChaufforCardProps = {
  profile: ChaufforProfile;
};

export default function ChaufforCard({ profile }: ChaufforCardProps) {
  return (
    <article className="overflow-hidden rounded bg-[#111827]/90 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
      <div className="relative">
        <img
          src={profile.image}
          alt={profile.name}
          className="h-44 w-full object-cover"
          style={{
            objectPosition: profile.imagePosition ?? "center",
            transform: `scale(${profile.imageScale ?? 1})`,
          }}
        />
        <span
          className={`absolute right-3 top-3 rounded px-2 py-1 text-xs font-semibold text-white ${
            tagStyles[profile.tag] ?? "bg-[#f56600]"
          }`}
        >
          {profile.tag}
        </span>
      </div>
      <div className="space-y-2 p-4 text-sm">
        <h4 className="text-base font-semibold text-white">{profile.name}</h4>
        <p className="text-slate-300">{profile.location}</p>
        <p className="text-slate-400">{profile.licenses}</p>
        <Button className="mt-2 w-full" size="sm">
          Kontakta
        </Button>
      </div>
    </article>
  );
}
