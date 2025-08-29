import { ReactNode } from "react";
import Navbar from "../_modules/components/navbar"


export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-rows-[min-content_1fr_min-content] 
    home-background-image min-h-screen">
      <header className="flex items-center h-[100px] md:h-[150px]">
        <Navbar />
      </header>

      <main className="px-4">{children}</main>
    </div>
  );
}
