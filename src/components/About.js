import React from "react";

import CountUp from "react-countup/";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import us from "../assets/babeNme.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg: gap-x-20">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[500px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent ms-10">About Me</h2>
            <h3 className="mb-4 h3">
              I am a full-stack web developer with a little over 2 years of
              experience.
            </h3>
            <p className="mb-6">
              I love music, gaming, basketball, and soccer. You can find me
              playing games with my forever gaming buddy, my fiancee, shooting
              hoops, or listening to the hottest film scores.
            </p>
            <div className="flex">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={2} duration={8} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
            </div>
            <div className="flex items-center mt-12 gap-x-8">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
