import Link from "next/link";
import Button from "../../../components/Button";
import Navbar from "../../../components/Navbar";

const sections = [
  {
    title: "Grundinfo",
    fields: ["Titel", "Företag", "Kontaktperson", "Telefon"],
  },
  {
    title: "Plats & period",
    fields: ["Ort / Område", "Startdatum", "Slutdatum", "Arbetstider"],
  },
  {
    title: "Krav",
    fields: ["Behörighet", "Körningstyp", "Språk", "Övriga krav"],
  },
  {
    title: "Ersättning",
    fields: ["Timpris", "Övertid", "Traktamente", "Övrigt"],
  },
];

const perks = [
  "Lastbil och trailer finns på plats",
  "Arbetskläder ingår",
  "Möjlighet till förlängning",
];

export default function NyttUppdragPage() {
  return (
    <div className="min-h-screen bg-[#121722]">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-20 pt-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-300">
              Nytt uppdrag
            </p>
            <h1 className="mt-2 font-[var(--font-display)] text-2xl text-white md:text-3xl">
              Skapa ett nytt uppdrag
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Detta är en presentationsvy av hur formuläret kan se ut.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="md" href="/akerier/uppdrag">
              Tillbaka
            </Button>
            <Button variant="primary" size="md">
              Publicera uppdrag
            </Button>
          </div>
        </div>

        <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded bg-[#111827] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              >
                <h2 className="font-[var(--font-display)] text-lg text-white">
                  {section.title}
                </h2>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {section.fields.map((field) => (
                    <div key={field} className="grid gap-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        {field}
                      </label>
                      <div className="rounded bg-[#0f172a] px-3 py-2 text-sm text-slate-300">
                        {field}...
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded bg-[#0f172a] p-5 text-sm text-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <h2 className="font-[var(--font-display)] text-lg text-white">
                Förhandsvisning
              </h2>
              <div className="mt-4 rounded bg-[#111827] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Chaufför CE till nattkörning
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Stockholm • 2 feb - 16 feb
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["CE", "YKB", "ADR"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/10 px-2 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  Kortare fjärrkörning mellan terminaler. Start omgående.
                </p>
              </div>
              <div className="mt-4 rounded bg-[#111827] px-4 py-3 text-xs text-slate-400">
                Förhandsvisningen uppdateras när du fyller i formuläret.
              </div>
            </div>

            <div className="rounded bg-[#111827] p-5 text-sm text-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <h2 className="font-[var(--font-display)] text-lg text-white">
                Förmåner
              </h2>
              <div className="mt-3 space-y-2">
                {perks.map((perk) => (
                  <div
                    key={perk}
                    className="rounded bg-[#0f172a] px-3 py-2"
                  >
                    {perk}
                  </div>
                ))}
              </div>
              <Link
                href="/akerier/uppdrag"
                className="mt-4 block rounded bg-white/10 px-4 py-2 text-center text-sm text-white hover:bg-white/20"
              >
                Avbryt och gå tillbaka
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
