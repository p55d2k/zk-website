import { motion } from "framer-motion";
import "@/styles/button.css";

const ShinyButton = ({ text }: { text: string }) => {
  return (
    <motion.button
      className="px-6 py-2 relative radial-gradient w-full"
      // @ts-expect-error
      initial={{ "--x": "100%", scale: 1 }}
      // @ts-expect-error
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        type: "spring",
        stiffness: 20,
        damping: 25,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
    >
      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask text-xl">
        {text}
      </span>
      <span className="block absolute inset-0 p-px linear-overlay" />
    </motion.button>
  );
};

export default ShinyButton;
