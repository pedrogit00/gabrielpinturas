import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function PaintRevealIntro({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      onDone();
    }, reduce ? 200 : 2200);
    return () => clearTimeout(t);
  }, [onDone, reduce]);

  if (!visible) return null;

  const duration = reduce ? 0.2 : 2;

  return (
    <motion.div
      className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: duration + 0.1, duration: 0.4 }}
    >
      {/* Paint sweep covering the screen */}
      <motion.div
        className="absolute inset-0"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration, ease: [0.76, 0, 0.24, 1] }}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.16 0.01 270) 8%, oklch(0.18 0.012 270) 50%, oklch(0.14 0.01 270) 92%, transparent 100%)",
        }}
      >
        {/* drips trailing edge */}
        <div className="absolute right-0 top-0 h-full w-32 flex">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-b from-transparent"
              style={{
                background: `linear-gradient(180deg, oklch(0.16 0.01 270) 0%, oklch(0.16 0.01 270) ${
                  40 + Math.sin(i * 1.7) * 30
                }%, transparent 100%)`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* The roller */}
      <motion.div
        className="absolute top-0 h-full w-24 md:w-32"
        initial={{ x: "-10vw" }}
        animate={{ x: "110vw" }}
        transition={{ duration, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="relative h-full w-full">
          {/* roller body */}
          <div
            className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[110vh] -my-[5vh] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.5 0.05 80) 0%, oklch(0.75 0.05 80) 30%, oklch(0.85 0.04 80) 50%, oklch(0.65 0.05 80) 80%, oklch(0.4 0.04 80) 100%)",
              boxShadow:
                "inset 0 0 30px oklch(0 0 0 / 0.4), 0 0 60px oklch(0.82 0.16 78 / 0.4)",
            }}
          />
          {/* metal frame */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-[120vh] bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-500 rounded-full opacity-60" />
          {/* gold gloss highlight */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 left-2 right-2 h-[105vh] -my-[2.5vh] rounded-full opacity-50"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.95 0.12 85) 50%, transparent)",
            }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
