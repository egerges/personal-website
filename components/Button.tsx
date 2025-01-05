import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary" }) => {
  const buttonStyles = cn(
    "px-6 py-3 rounded-lg font-medium text-lg transition-transform transform hover:scale-105 focus:ring-2 focus:ring-offset-2",
    variant === "primary"
      ? "bg-gradient-to-r from-[var(--color-pink-primary)] to-[var(--color-pink-dark)] text-[var(--gray-light)] hover:from-[var(--color-pink-light)] hover:to-[var(--color-pink-primary)] focus:ring-[var(--color-pink-light)]"
      : "bg-gradient-to-r from-[var(--color-blue-primary)] to-[var(--color-blue-dark)] text-[var(--gray-light)] hover:from-[var(--color-blue-light)] hover:to-[var(--color-blue-primary)] focus:ring-[var(--color-blue-light)]"
  );

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={buttonStyles}
      onClick={onClick}
      data-cursor-color={variant === "primary" ? "var(--color-blue-primary)" : "var(--color-pink-primary)"}
    >
      {text}
    </motion.button>
  );
};

export default Button;
