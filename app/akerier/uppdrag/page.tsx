import Link from "next/link";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";

const menuItems = [
  { label: "Översikt", href: "/akerier" },
  { label: "Uppdrag", href: "/akerier/uppdrag" },
  { label: "Lotsar", href: "#" },
  { label: "Aviseringar", href: "#" },
  { label: "Inställningar", href: "#" },
  { label: "Logga ut", href: "#" },
];

const filters = [
  "Alla statusar",
  "Alla orter",
  "Senaste först",
  "Sök uppdrag",
];

const urgentJob = {
  title: "Reservchaufför för en dag",
  location: "Jönköping",
  label: "AKUT • Svar önskas inom 30 min",
  contact: "Mathias Larsson",
  phone: "070-123 45 XX",
  tags: ["CE", "YKB", "ADR"],
  company: "F. Nordström Transport AB",
  applicants: "4 ansök",
};

const jobs = [
  {
    title: "Vikarie med CE-kort",
    location: "Malmö",
    period: "25-26",
    applicants: "4 ansök",
    status: "Snabb",
  },
  {
    title: "Lastbilschaufför CE",
    location: "Borås",
    period: "26-30",
    applicants: "2 ansök",
    status: "Akut",
  },
  {
    title: "Lastbilslots vikariat",
    location: "Sollentuna",
    period: "29-30",
    applicants: "6 ansök",
    status: "Standard",
  },
];

export default function AkeriDashboard() {
  return (
    <div className="min-h-screen bg-[#121722]">
      <Navbar />
      <div className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 pt-8 md:grid-cols-[220px_1fr]">
        <aside className="rounded bg-[#0f172a] p-4 text-sm text-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
          <div className="mb-6 flex items-center gap-2 text-base font-semibold text-white">
            <div className="h-8 w-8 rounded bg-[#f56600]" />
            LotsDirekt
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block rounded px-3 py-2 ${
                  item.label === "Uppdrag"
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="flex flex-col gap-5">
          <div className="rounded bg-[#111827] px-5 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="font-[var(--font-display)] text-2xl text-white">
                  Mina uppdrag
                </h1>
                <p className="text-sm text-slate-300">
                  Aktiva behov och väntande svar
                </p>
              </div>
              <Button variant="primary" size="md" href="/akerier/uppdrag/nytt">
                Lägg upp behov
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-300">
              <span className="rounded bg-white/10 px-3 py-1 text-white">
                Aktiva behov
              </span>
              <span className="rounded bg-white/5 px-3 py-1">Tidigare behov</span>
            </div>
            <div className="mt-4 grid gap-2 md:grid-cols-4">
              {filters.map((filter) => (
                <div
                  key={filter}
                  className="rounded bg-[#0f172a] px-3 py-2 text-xs text-slate-300"
                >
                  {filter}
                </div>
              ))}
            </div>
          </div>

          <section className="rounded bg-[#111827] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
            <div className="rounded bg-[#2a1f17] px-3 py-2 text-xs text-[#f4b07e]">
              {urgentJob.label}
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded bg-[#0f172a] p-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-[#f56600]">●</span>
                  <span>{urgentJob.location}</span>
                </div>
                <h2 className="mt-2 text-lg font-semibold text-white">
                  {urgentJob.title}
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {urgentJob.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/10 px-2 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 rounded bg-[#141e2f] px-3 py-2 text-xs text-slate-300">
                  Väntar på {urgentJob.contact}s svar • Svar önskas senast 15:30
                </div>
              </div>
              <div className="rounded bg-[#0f172a] p-4 text-sm text-slate-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Vald lots</p>
                    <p className="mt-1 font-semibold text-white">
                      {urgentJob.contact}
                    </p>
                    <p className="text-xs">{urgentJob.phone}</p>
                  </div>
                  <span className="rounded bg-[#f56600] px-2 py-1 text-xs text-white">
                    Vald
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between rounded bg-white/5 px-3 py-2">
                    <span>{urgentJob.company}</span>
                    <span className="text-xs text-slate-400">
                      {urgentJob.applicants}
                    </span>
                  </div>
                  <div className="rounded bg-white/5 px-3 py-2 text-xs text-slate-400">
                    Byt vald lots
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="flex flex-col gap-3 rounded bg-[#111827] px-5 py-4 text-sm text-slate-300 shadow-[0_20px_40px_rgba(0,0,0,0.35)] md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    {job.location} • {job.period}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded bg-white/10 px-2 py-1 text-xs">
                    {job.status}
                  </span>
                  <span className="rounded bg-white/5 px-2 py-1 text-xs">
                    {job.applicants}
                  </span>
                  <Button variant="primary" size="sm">
                    Granska ansökningar
                  </Button>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
