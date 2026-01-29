import AuthActions from "./AuthActions";

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <div className="h-8 w-8 rounded bg-[#f56600]" />
          <nav className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
            <a className="border-b-2 border-[#f56600] pb-1" href="#">
              För lotsar
            </a>
            <a className="hover:text-white" href="#">
              För åkerier
            </a>
            <a className="hover:text-white" href="#">
              Så funkar det
            </a>
            <a className="hover:text-white" href="#">
              Priser
            </a>
          </nav>
        </div>
        <AuthActions />
      </div>
    </header>
  );
}
