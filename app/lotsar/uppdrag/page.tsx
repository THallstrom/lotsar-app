import Link from "next/link";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";

const menuItems = [
  { label: "Översikt", href: "/lotsar" },
  { label: "Uppdrag", href: "/lotsar/uppdrag" },
  { label: "Profil", href: "#" },
  { label: "Inställningar", href: "#" },
  { label: "Logga ut", href: "#" },
];

const filters = [
  "Alla uppdrag",
  "Inom 30 km",
  "CE / YKB",
  "Nattkörning",
];

const jobs = [
  {
    title: "Reservchaufför för en dag",
    location: "Jönköping",
    distance: "18 km",
    time: "Natt (21:00 - 05:00)",
    tags: ["CE", "YKB", "ADR"],
    pay: "320 kr / timme",
  },
  {
    title: "Lastbilschaufför CE",
    location: "Borås",
    distance: "22 km",
    time: "Dag (06:00 - 14:00)",
    tags: ["CE", "YKB"],
    pay: "290 kr / timme",
  },
  {
    title: "Distribution livsmedel",
    location: "Göteborg",
    distance: "12 km",
    time: "Dag (07:00 - 15:00)",
    tags: ["C", "YKB"],
    pay: "275 kr / timme",
  },
];

export default function LotsarUppdragPage() {
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
                  Uppdrag nära dig
                </h1>
                <p className="text-sm text-slate-300">
                  Filtrera och hitta uppdrag som passar din profil.
                </p>
              </div>
              <Button variant="primary" size="md">
                Uppdatera tillgänglighet
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
              {filters.map((filter) => (
                <span
                  key={filter}
                  className="rounded bg-[#0f172a] px-3 py-1"
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>

          <section className="grid gap-4">
            {jobs.map((job) => (
              <article
                key={job.title}
                className="rounded bg-[#111827] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {job.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-300">
                      {job.location} • {job.distance}
                    </p>
                  </div>
                  <span className="rounded bg-white/10 px-3 py-1 text-xs text-slate-200">
                    {job.pay}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{job.time}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/10 px-2 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="primary" size="sm">
                    Ansök
                  </Button>
                  <Button variant="secondary" size="sm">
                    Spara
                  </Button>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
