import Button from "./Button";

const filters = [
  {
    label: "Ort / Område",
    options: ["Stockholm", "Göteborg", "Malmö", "Uppsala", "Örebro"],
    hint: "Välj flera orter",
  },
  {
    label: "Behörighet",
    options: ["CE", "YKB", "ADR", "Färdskrivare"],
    hint: "Välj flera behörigheter",
  },
  {
    label: "Tillgänglig nu",
    options: ["Idag", "Inom 7 dagar", "Inom 30 dagar"],
    hint: "Välj tidsintervall",
  },
];

export default function SearchBar() {
  return (
    <div className="grid gap-2 rounded bg-[#111827] p-2 text-sm text-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.35)] md:grid-cols-[1.1fr_1fr_1fr_0.7fr]">
      {filters.map((filter) => (
        <details key={filter.label} className="relative">
          <summary className="flex cursor-pointer list-none items-center justify-between rounded bg-[#1f2937] px-4 py-3 text-left hover:bg-[#273548]">
            <span>{filter.label}</span>
            <span className="text-slate-400">▼</span>
          </summary>
          <div className="absolute left-0 right-0 z-10 mt-2 rounded bg-[#0f172a] p-3 text-xs text-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">
              {filter.hint}
            </p>
            <div className="grid gap-2">
              {filter.options.map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-500 bg-[#111827] text-[#f56600] accent-[#f56600]"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        </details>
      ))}
      <Button variant="primary" size="md">
        Sök
      </Button>
    </div>
  );
}
