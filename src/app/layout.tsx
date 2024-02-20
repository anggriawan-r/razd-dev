import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HoverProvider } from "@/store/Provider";
import Cursor from "@/components/Cursor";
import "./globals.css";

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
          {children}
        </body>
      </HoverProvider>
    </html>
  );
}
