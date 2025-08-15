import "./globals.css";
import type { Metadata } from "next";
import TanStackProvider from "@/app/components/TanStackProvider/TanStackProvider";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Manage your notes efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          <Toaster position="top-right" />
          {children}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
