import { motion, AnimatePresence } from "framer-motion";
import styles from "./MobileOverlay.module.scss";

export default function DesktopOnlyOverlay({ show }) {

  return (
 <AnimatePresence>
      {show && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.overlay__icon}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ⌨️💻
          </motion.div>

          <h2 className={styles.overlay__title}>
            Keyboard Required
          </h2>

          <p className={styles.overlay__subtitle}>
            This game requires a keyboard to play.  
            Please use a desktop or laptop computer.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}