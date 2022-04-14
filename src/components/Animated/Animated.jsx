import { motion } from "framer-motion";

const AnimatedPage = ({ children, className, init, exit }) => {
  console.log(exit);
  return (
    <motion.div
      className={className}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedPage };
