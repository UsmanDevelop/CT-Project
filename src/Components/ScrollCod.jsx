import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const steps = [
  {
    text: "Book Parcels with PostEx",
    image: "/path-to-image-1.png",
  },
  {
    text: "PostEx Picks Your Parcel from Doorstep",
    image: "/path-to-image-2.png",
  },
  {
    text: "Upfront Payment Transferred Instantly",
    image: "/path-to-image-3.png",
  },
];

const ScrollEffectComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: -activeIndex * 100 + "vh", transition: { duration: 0.8 } });
  }, [activeIndex, controls]);

  const handleScroll = (event) => {
    if (event.deltaY > 0 && activeIndex < steps.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (event.deltaY < 0 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden" onWheel={handleScroll}>
      <div className="absolute left-10 top-1/4">
        {steps.map((step, index) => (
          <div key={index} className={`transition-opacity duration-500 ${index === activeIndex ? "opacity-100" : "opacity-30"}`}>
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-xl font-semibold">{step.text}</span>
          </div>
        ))}
      </div>
      <motion.div animate={controls} className="h-screen w-full">
        {steps.map((step, index) => (
          <div key={index} className="h-screen flex justify-center items-center">
            <img src={step.image} alt={`Step ${index + 1}`} className="rounded-lg shadow-lg w-3/4" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollEffectComponent;
