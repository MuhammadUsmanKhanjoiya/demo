import { ReactNode } from "react";
import { Toaster } from "sonner";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
