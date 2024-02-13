"use client";

import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      <Cursor />

      <AnimatePresence mode="wait">
        {showPreloader && (
          <Preloader key="first" setShowPreloader={setShowPreloader} />
        )}
        {!showPreloader && (
          <>
            <Header />
            <MainContent key="second" />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
