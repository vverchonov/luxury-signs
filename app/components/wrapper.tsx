"use client";
import { motion, AnimatePresence } from "framer-motion";

export const Wrapper = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: -15 }}
        transition={{ delay: 0.25, duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
