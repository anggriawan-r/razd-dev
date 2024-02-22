"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {showPreloader ? (
        <Preloader key="first" setShowPreloader={setShowPreloader} />
      ) : (
        <>
          <Header key="second" />
          <MainContent key="third" />
          <Footer key="fourth" />
        </>
      )}
    </AnimatePresence>
  );
}
