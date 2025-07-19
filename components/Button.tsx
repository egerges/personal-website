import { motion } from "framer-motion";
import Link from "next/link";

import { cn } from "@lib/utils";

interface ButtonProps {
  text: string;
  link: string;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text, link, variant = "primary" }) => {
  const buttonStyles = cn(
    "px-6 py-3 rounded-lg font-medium text-lg transition-transform transform hover:scale-105 focus:ring-2 focus:ring-offset-2",
    variant === "primary"
      ? "px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 backdrop-blur-sm relative overflow-hidden group"
      : "px-6 py-3 bg-gradient-to-r from-[var(--color-blue-primary)] via-purple-500 to-[var(--color-pink-primary)] text-white hover:from-[var(--color-blue-light)] hover:via-purple-400 hover:to-[var(--color-pink-light)] focus:ring-[var(--color-blue-light)] rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 backdrop-blur-sm relative overflow-hidden group"
  );

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={buttonStyles}
      data-cursor-color={variant === "primary" ? "var(--color-blue-primary)" : "var(--color-pink-primary)"}
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
      
      <Link href={link}>{text}</Link>
    </motion.div>
  );
};

export default Button;
