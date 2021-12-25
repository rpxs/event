import { motion } from "framer-motion";
export default function Scribble() {
  // 62, 134, 61 rgb for circle
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {
            delay,
            type: "spring",
            duration: 1.0,
            bounce: 0,
          },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <motion.svg
      strokeDasharray="0 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="210"
      height="80"
      viewBox="0, 0, 400,170"
      className="absolute -ml-10 top-44"
      initial="hidden"
      animate="visible"
    >
      <motion.ellipse
        cx="184"
        cy="83"
        rx="180"
        ry="60"
        stroke="#4f46e5"
        variants={draw}
        custom={1}
        strokeWidth={4}
        fillOpacity={0}
      />
      <motion.ellipse
        cx="190"
        cy="80"
        rx="170"
        ry="60"
        stroke="#4f46e5"
        variants={draw}
        custom={2}
        strokeWidth={3}
        fillOpacity={0}
      />
      <motion.ellipse
        cx="190"
        cy="80"
        rx="180"
        ry="70"
        stroke="#4f46e5"
        variants={draw}
        custom={3}
        strokeWidth={2}
        fillOpacity={0}
      />
    </motion.svg>
  );
}

// <motion.ellipse
//   cx="190"
//   cy="80"
//   rx="160"
//   ry="60"
//   stroke="#3E863D"
//   variants={draw}
//   custom={4}
//   strokeWidth={2}
//   fillOpacity={0}
// />
