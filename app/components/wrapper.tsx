"use client";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: any;
};

export const Wrapper = (props: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: -15 }}
        transition={{ delay: 0.25, duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
};
