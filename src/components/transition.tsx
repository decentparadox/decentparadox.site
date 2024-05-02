import { motion } from "framer-motion";

const transition = (OriginalComponent: any) => {
  return () => (
    <>
      <div className="bg"></div>
      <motion.div
        initial={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        }}
        animate={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        exit={{
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }}
        transition={{ // This is the correct placement for 'transition'
          duration: 0.75,
          ease: [0.83, 0, 0.17, 1]
        }}
        style={{
          position: "relative",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <OriginalComponent />
      </motion.div>
    </>
  );
};

export default transition;
