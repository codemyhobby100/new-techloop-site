import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"; // Import icons

// HoverEffect Component
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode; // Icon property for each card
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx} // Use the index or a unique property as the key
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex flex-col items-center">
              <div className="text-white mb-4">{item.icon}</div> {/* Render icon in white */}
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};


// Card Component
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
    className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-gray-600 dark:border-gray-300 group-hover:border-white shadow-lg relative z-20",
        className
    )}
    >

      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// CardTitle Component
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

// CardDescription Component
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

// Example Usage
const items = [
  {
    title: "React",
    description: "Learn about React.js and its features.",
    link: "/react",
    icon: <FaReact size={40} className="text-white" />, // React Icon in white
  },
  {
    title: "Node.js",
    description: "Build backend services with Node.js.",
    link: "/node",
    icon: <FaNodeJs size={40} className="text-white" />, // Node.js Icon in white
  },
  {
    title: "Database",
    description: "Work with modern databases.",
    link: "/database",
    icon: <FaDatabase size={40} className="text-white" />, // Database Icon in white
  },
];

// Rendering HoverEffect Component
const App = () => {
  return (
    <div className="container mx-auto p-4">
      <HoverEffect items={items} />
    </div>
  );
};

export default App;
