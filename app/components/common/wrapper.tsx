"use client";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: any;
};

export const Wrapper = (props: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full max-w-screen-2xl"
        initial={{ opacity: 0, y: -15 }}
        transition={{ delay: 0.25, duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>{props.children}</div>
      </motion.div>
    </AnimatePresence>
  );
};
