"use client";
import { motion, AnimatePresence } from "framer-motion";

export const Wrapper = (props: any) => {
  return (
    <AnimatePresence>
      <motion.div
        className={"w-full max-w-screen-2xl " + props.customClass}
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
