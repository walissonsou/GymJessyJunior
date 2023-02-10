import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import profe1 from "../../data/images/profe1.jpg";
import profe2 from "../../data/images/profe2.jpg";
import profe3 from "../../data/images/profe3.jpg";
import profe4 from "../../data/images/profe4.jpg";
import profe5 from "../../data/images/profe5.jpg";

const images = [profe2,profe1,profe3, profe4, profe5, profe2];

const Profes = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
   
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div id="profes" className="container-slide">
      <h1> STAFF </h1>

      <div className="slide-container">
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{x: 100}}
            animate={{x:0}}
            transition={{ duration: 1}}
          >
            {images.map((image, index) => (
              <motion.div key={index} className="item">
                <img src={image} alt="Texto alt" />
              </motion.div>
            ))}
          </motion.div>{" "}
        </motion.div>
      </div>
    </div>
  );
};
export default Profes;
