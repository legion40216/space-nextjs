import { ReactNode } from "react";
import Navbar from "../_modules/components/navbar";

export default function CrewLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-rows-[min-content_1fr_min-content] 
    crew-background-image">
      <header className="flex items-center h-[var(--navbar-height)]">
        <Navbar />
      </header>

      <main className="px-4 pb-4">{children}</main>
    </div>
  );
}
