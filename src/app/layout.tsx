import "./globals.css";
import { Inter } from "next/font/google";
import { HoverProvider } from "@/store/Provider";
import type { Metadata } from "next";
import Cursor from "@/components/Cursor";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "razd-dev | Personal Portfolio",
  description:
    "Razd, or Rayzadmiko, is physics graduate whose introduced to web development right after graduation and loves it!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <HoverProvider>
        <body className={`${inter.className} h-max bg-zinc-900`}>
          <Cursor />
          <Toaster />
          {children}
        </body>
      </HoverProvider>
    </html>
  );
}
