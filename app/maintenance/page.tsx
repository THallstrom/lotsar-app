export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="rounded-full border border-slate-500/50 px-4 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">
          Tillfälligt stängt
        </div>
        <h1 className="mt-6 font-[var(--font-display)] text-3xl font-semibold tracking-wide text-white sm:text-4xl md:text-5xl">
          Vi är nere för underhåll
        </h1>
        <p className="mt-4 text-base text-slate-200 sm:text-lg">
          Vi pausar tjänsten för underhåll. Under tiden är
          webbplatsen stängd och inga länkar är aktiva.
        </p>
        <div className="mt-6 w-full max-w-md rounded bg-[#111827] p-5 text-left text-sm text-slate-300">
          <p className="font-semibold text-slate-100">Tack för ditt tålamod.</p>
        </div>
        <p className="mt-6 text-xs text-slate-400">Senast uppdaterad 30 januari 2026</p>
      </main>
    </div>
  );
}
