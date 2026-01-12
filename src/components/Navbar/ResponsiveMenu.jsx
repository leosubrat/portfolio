import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full z-20 overflow-hidden"
        >
          <div className="text-xl font-semibold uppercase bg-[var(--color-primary)] text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10 ">
              <li>Home</li>
              <li>Projects</li>
              <li>About</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ResponsiveMenu;
