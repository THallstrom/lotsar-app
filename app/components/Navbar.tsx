"use client";

import { usePathname } from "next/navigation";
import AuthActions from "./AuthActions";

export default function Navbar() {
  const pathname = usePathname();
  const isAkerier = pathname?.startsWith("/akerier");
  const isLotsar = pathname?.startsWith("/lotsar");

  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <div className="h-8 w-8 rounded bg-[#f56600]" />
          <nav className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
            <a
              className={`hover:text-white ${
                pathname === "/" ? "border-b-2 border-[#f56600] pb-1 text-white" : ""
              }`}
              href="/"
            >
              Start
            </a>
            <a
              className={`hover:text-white ${
                isLotsar ? "border-b-2 border-[#f56600] pb-1 text-white" : ""
              }`}
              href="/lotsar"
            >
              För lotsar
            </a>
            <a
              className={`hover:text-white ${
                isAkerier ? "border-b-2 border-[#f56600] pb-1 text-white" : ""
              }`}
              href="/akerier"
            >
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
