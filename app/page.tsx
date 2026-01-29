import Button from "./components/Button";
import ChaufforCard from "./components/ChaufforCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import type { ChaufforProfile } from "./types/chauffor";

const profiles: ChaufforProfile[] = [
  {
    name: "Johan Eriksson",
    tag: "Tillgänglig nu",
    location: "Stockholm - 30 km",
    licenses: "CE, YKB, ADR",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=480&auto=format&fit=crop",
    imagePosition: "50% 35%",
    imageScale: 0.95,
  },
  {
    name: "Maria Sjöberg",
    tag: "Premium",
    location: "Örebro - 20 mil",
    licenses: "CE, Fjär",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=480&auto=format&fit=crop",
    imagePosition: "center 30%",
    imageScale: 0.98,
  },
  {
    name: "Anders Nilsson",
    tag: "Tillgänglig nu",
    location: "Göteborg - 15 km",
    licenses: "CE, YKB",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=480&auto=format&fit=crop",
    imagePosition: "center 35%",
    imageScale: 0.95,
  },
];

const steps = [
  {
    title: "Skapa profil",
    text: "Fyll i dina meriter och favoritkörningar.",
  },
  {
    title: "Visa tillgänglig",
    text: "Markera när du kan jobba eller ta uppdrag.",
  },
  {
    title: "Få förfrågningar",
    text: "Åkerier kontaktar dig direkt utan mellanhänder.",
  },
];

const featuresLotsar = [
  "Skapa profil",
  "Visa tillgänglighet",
  "Få förfrågningar",
];

const featuresAkeri = [
  "Lägg upp behov",
  "Hitta tillgängliga lotsar",
  "Kontakta direkt",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 text-[#f56600]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.1 7.2a1 1 0 0 1-1.42.005L3.3 9.02a1 1 0 1 1 1.4-1.43l3.79 3.72 6.39-6.47a1 1 0 0 1 1.42-.01Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121722]">
      <div className="relative z-10">
        <Navbar />

        <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-14">
          <section className="text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-slate-300">
              Plattformen för åkerier och lotsar
            </p>
            <h1 className="font-[var(--font-display)] text-3xl font-semibold tracking-wide text-white sm:text-4xl md:text-5xl">
              Hitta chaufför. Hitta körning. Utan mellanhänder.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
              En plattform där åkerier och lotsar hittar varandra direkt.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                className="w-full shadow-[0_10px_30px_rgba(245,102,0,0.4)] sm:w-auto"
              >
                Jag är lots / chaufför
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Jag är åkeri
              </Button>
            </div>
          </section>

          <section className="mx-auto w-full max-w-4xl">
            <SearchBar />
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded bg-[#111827] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <h2 className="font-[var(--font-display)] text-2xl text-white">
                För lotsar / chaufförer
              </h2>
              <p className="mt-2 text-sm text-slate-300">Jobben ska hitta dig.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {featuresLotsar.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" size="md" className="mt-6 w-full">
                Skapa profil
              </Button>
            </div>
            <div className="rounded bg-[#111827] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <h2 className="font-[var(--font-display)] text-2xl text-white">
                För åkerier
              </h2>
              <p className="mt-2 text-sm text-slate-300">När lastbilen står still.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {featuresAkeri.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" size="md" className="mt-6 w-full">
                Skapa åkerikonto
              </Button>
            </div>
          </section>

          <section className="rounded bg-[#111827] px-6 py-5 text-center">
            <h3 className="font-[var(--font-display)] text-xl text-white">
              Så funkar det
            </h3>
            <div className="mt-4 grid gap-4 text-left md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded bg-[#1f2937] p-4">
                  <p className="mt-2 font-semibold text-white">
                    <span className="mr-2 text-slate-400">{index + 1}.</span>
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between">
              <h3 className="font-[var(--font-display)] text-xl text-white">
                Aktiva lotsar just nu
              </h3>
              <span className="text-sm text-slate-300">Uppdateras varje timme</span>
            </div>
            <div className="mt-4 grid gap-5 md:grid-cols-3">
              {profiles.map((profile) => (
                <ChaufforCard key={profile.name} profile={profile} />
              ))}
            </div>
          </section>

          <section className="rounded bg-[#111827] px-6 py-8 text-center">
            <h3 className="font-[var(--font-display)] text-2xl text-white">
              Redo att börja?
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Prova gratis i 14 dagar - ingen bindningstid.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Jag är lots / chaufför
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Jag är åkeri
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
