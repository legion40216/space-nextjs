import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-rows-[min-content_1fr_min-content] 
    min-h-full space-y-4"
    >
      <header className="container mx-auto">
        <nav>
        </nav>
      </header>

      <main className="container mx-auto px-3">
        {children}
      </main>

      <footer className="container mx-auto px-3">
      </footer>
    </div>
  );
}
