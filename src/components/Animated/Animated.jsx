import { motion } from "framer-motion";

const AnimatedPage = ({ children, className, init }) => {
  return (
    <motion.div
      className={className}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: init }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedPage };
