import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HoverProvider } from "@/store/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "razd-dev | Personal Portfolio",
  description:
    "Razd, or Rayzadmiko, is physics graduate whose introduced to web development right after graduation and loves it!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-max bg-zinc-900`}>
        <HoverProvider>{children}</HoverProvider>
      </body>
    </html>
  );
}
