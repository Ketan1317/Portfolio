import React, { useState } from "react";
import { motion } from "framer-motion";
import { getTechStackRows, type Tech } from "../data/techStack";

interface TechBadgeProps {
  tech: Tech;
}

interface MarqueeRowProps {
  items: Tech[];
  direction?: "left" | "right";
  speed?: number;
}

const MarqueeRow: React.FC = () => {
  // Badge Component (simplified + sleeker look)
  const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => (
    <motion.div
      className="flex items-center gap-2 bg-neutral-900/70 border border-neutral-700 rounded-xl px-4 py-2 text-white text-sm whitespace-nowrap flex-shrink-0 cursor-pointer shadow-sm"
      whileHover={{
        scale: 1.08,
        backgroundColor: "rgba(64, 64, 64, 0.8)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-5 h-5 flex items-center justify-center text-white">
        {typeof tech.icon === "string" ? tech.icon : <div>{tech.icon}</div>}
      </div>
      <span className="font-medium">{tech.name}</span>
    </motion.div>
  );

  // Marquee row
  const MarqueeRow: React.FC<MarqueeRowProps> = ({
    items,
    direction = "left",
    speed = 30,
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    const duplicatedItems = [...items, ...items, ...items]; // fewer duplicates for lighter loop

    return (
      <div
        className="relative overflow-hidden w-full py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-4"
          animate={{
            x:
              direction === "left"
                ? ["0%", `-${100 / duplicatedItems.length * items.length}%`]
                : [`-${100 / duplicatedItems.length * items.length}%`, "0%"],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: "max-content",
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {duplicatedItems.map((tech, index) => (
            <TechBadge key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </motion.div>
      </div>
    );
  };

  // tech stack rows
  const { row1, row2, row3 } = getTechStackRows();

  return (
    <div className="w-full py-10 relative flex justify-center bg-black">
  {/* Left fuzzy shadow */}
  <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-black via-black/70 to-transparent blur-3xl z-20 pointer-events-none" />

  {/* Right fuzzy shadow */}
  <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-black via-black/70 to-transparent blur-3xl z-20 pointer-events-none" />

  {/* Top fuzzy shadow */}
  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/60 to-transparent blur-2xl z-20 pointer-events-none" />

  {/* Bottom fuzzy shadow */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/60 to-transparent blur-2xl z-20 pointer-events-none" />

  {/* Inner container */}
  <div className="w-[60vw] space-y-6 relative z-10 rounded-2xl shadow-inner shadow-black/60 overflow-hidden">
    <MarqueeRow items={row1} direction="left" speed={25} />
    <MarqueeRow items={row2} direction="right" speed={28} />
    <MarqueeRow items={row3} direction="left" speed={26} />
  </div>
</div>

  );
};

export default MarqueeRow;
