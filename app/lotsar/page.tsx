import Link from "next/link";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const menuItems = [
  { label: "Översikt", href: "/lotsar" },
  { label: "Uppdrag", href: "/lotsar/uppdrag" },
  { label: "Profil", href: "#" },
  { label: "Inställningar", href: "#" },
  { label: "Logga ut", href: "#" },
];

const stats = [
  { label: "Tillgänglig idag", value: "Ja" },
  { label: "Nya uppdrag nära dig", value: "5" },
  { label: "Svarar inom", value: "15 min" },
];

const nearbyJobs = [
  {
    title: "Nattkörning terminal",
    location: "Stockholm",
    distance: "12 km",
    type: "CE • YKB",
  },
  {
    title: "Dagkörning livsmedel",
    location: "Södertälje",
    distance: "18 km",
    type: "CE",
  },
  {
    title: "Kortare distribution",
    location: "Uppsala",
    distance: "28 km",
    type: "C",
  },
];

export default function LotsarPage() {
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
                  item.label === "Översikt"
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="flex flex-col gap-6">
          <section className="rounded bg-[#111827] px-6 py-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-300">
                  Översikt för lotsar
                </p>
                <h1 className="mt-2 font-[var(--font-display)] text-2xl text-white md:text-3xl">
                  Välkommen! Här hittar du uppdrag nära dig.
                </h1>
              </div>
              <Button variant="primary" size="md" href="/lotsar/uppdrag">
                Se uppdrag
              </Button>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded bg-[#0f172a] p-4 text-center"
                >
                  <p className="text-xs text-slate-500">{stat.label}</p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded bg-[#0f172a] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <h2 className="font-[var(--font-display)] text-lg text-white">
                Snabbregistrering
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Skapa din profil för att kunna ansöka och bli hittad av åkerier.
              </p>
              <div className="mt-4 grid gap-3">
                {[
                  "Namn",
                  "Telefon",
                  "E-post",
                  "Ort / Område",
                  "Behörigheter",
                ].map((label) => (
                  <div key={label} className="grid gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {label}
                    </span>
                    <div className="rounded bg-[#111827] px-3 py-2 text-sm text-slate-300">
                      {label}...
                    </div>
                  </div>
                ))}
                <div className="flex gap-2 pt-2">
                  <Button variant="primary" size="md">
                    Skapa profil
                  </Button>
                  <Button variant="secondary" size="md">
                    Spara utkast
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded bg-[#111827] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <h2 className="font-[var(--font-display)] text-lg text-white">
                  Uppdrag i närheten
                </h2>
                <Link
                  href="/lotsar/uppdrag"
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Visa alla
                </Link>
              </div>
              <div className="mt-4 space-y-3">
                {nearbyJobs.map((job) => (
                  <div key={job.title} className="rounded bg-[#0f172a] p-4">
                    <p className="text-sm font-semibold text-white">
                      {job.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {job.location} • {job.distance}
                    </p>
                    <p className="mt-2 text-xs text-slate-300">{job.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
