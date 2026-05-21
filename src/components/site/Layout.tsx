import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { FloatingCall } from "./FloatingCall";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
      <FloatingCall />
    </>
  );
}



