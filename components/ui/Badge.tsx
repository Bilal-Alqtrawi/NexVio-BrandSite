import { LucideIcon } from "lucide-react";
import { memo, ReactNode } from "react";
import { motion } from "framer-motion";

function Badge({
  children,
  icon: Icon
}: {
  children: ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 rounded-full border border-[#FFD900]/40 bg-[#FFD900]/10 px-5 py-2 text-xs font-black tracking-widest text-[#FFD900] uppercase shadow-lg shadow-[#FFD900]/10 backdrop-blur-xl"
    >
      {Icon && <Icon className="size-4 animate-pulse text-[#FFD900]" />}
      {children}
    </motion.div>
  );
}

export default memo(Badge);
