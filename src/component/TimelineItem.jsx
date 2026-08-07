import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function TimelineItem({ step, last }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.6,
    once: false,
  });

  const timelineRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start center", "end center"],
});

const pointY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-5 ${!last ? "mb-8" : ""}`}
    >
      <motion.div
        animate={{
          backgroundColor: isInView ? "#0891b2" : "#9ca3af",
          scale: isInView ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full text-white flex items-center justify-center text-sm md:text-xl font-bold shrink-0"
      >
        {step.id}
      </motion.div>

      <motion.div
        animate={{
          opacity: isInView ? 1 : 0.5,
          x: isInView ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg md:text-xl font-semibold">
          {step.title}
        </h3>

        <p className="text-sm md:text-base">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default TimelineItem;