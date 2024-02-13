import { AnimatePresence } from 'framer-motion';

export default function MainContent() {
  return (
    <AnimatePresence>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </AnimatePresence>
  );
}
