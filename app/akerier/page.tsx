import Link from "next/link";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const menuItems = [
  { label: "Översikt", href: "/akerier" },
  { label: "Uppdrag", href: "/akerier/uppdrag" },
  { label: "Lotsar", href: "#" },
  { label: "Aviseringar", href: "#" },
  { label: "Inställningar", href: "#" },
  { label: "Logga ut", href: "#" },
];

const highlights = [
  {
    title: "Skapa jobb på minuter",
    text: "Fyll i krav och period, se allt i en tydlig jobbvy.",
  },
  {
    title: "Hantera ansökningar",
    text: "Se inkomna ansökningar och välj chaufför direkt.",
  },
  {
    title: "Följ upp status",
    text: "Se akut, snabb eller standard i samma vy.",
  },
];

const previewCards = [
  { label: "Aktiva uppdrag", value: "12" },
  { label: "Väntar svar", value: "3" },
  { label: "Nya ansökningar", value: "9" },
];

export default function AkerierPage() {
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
                  Översikt
                </p>
                <h1 className="mt-2 font-[var(--font-display)] text-2xl text-white md:text-3xl">
                  Välkommen tillbaka, här är din översikt.
                </h1>
              </div>
              <Button variant="primary" size="md" href="/akerier/uppdrag/nytt">
                Skapa nytt uppdrag
              </Button>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {previewCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded bg-[#0f172a] p-4 text-center"
                >
                  <p className="text-xs text-slate-500">{card.label}</p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded bg-[#0f172a] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <h2 className="font-[var(--font-display)] text-lg text-white">
                Översiktsbild
              </h2>
              <span className="rounded bg-[#f56600] px-2 py-1 text-xs text-white">
                Åkeri
              </span>
            </div>
            <div className="mt-4 grid gap-4">
              <div className="rounded bg-[#111827] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Pågående jobb
                </p>
                <div className="mt-3 grid gap-3">
                  <div className="rounded bg-[#1f2937] px-3 py-2 text-sm text-slate-200">
                    Reservchaufför för en dag • Jönköping
                  </div>
                  <div className="rounded bg-[#1f2937] px-3 py-2 text-sm text-slate-200">
                    Lastbilschaufför CE • Borås
                  </div>
                </div>
              </div>
              <div className="rounded bg-[#111827] px-4 py-3 text-sm text-slate-300">
                Se detaljer, status och ansökningar direkt i dashboarden.
              </div>
              <Link
                href="/akerier/uppdrag"
                className="rounded bg-white/10 px-4 py-2 text-center text-sm text-white hover:bg-white/20"
              >
                Gå till uppdrag
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
