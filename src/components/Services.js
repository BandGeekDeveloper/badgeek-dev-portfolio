import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
  {
    name: "UI/UX Design (Light-weight)",
    description:
      "I have a bit of experience with creating mockups on Figma. I've designed my own projects up to this point so I don't exactly have professional design training but I do know how to design a web page.",
    link: "Resources",
  },
  {
    name: "Frontend Web Development",
    description:
      "I can put together pages and am really good with organizing files when it comes setting up project structure. Frontend is one of the backbones of my skills and I deal mostly in react frameworks and tailwind css. I am not opposed to learning other libraries and frameworks.",
    link: "Resources",
  },
  {
    name: "Backend Web Development",
    description:
      "I'd say this is another one of my backbones. My favorite thing about being a web developer is creating and handling data. Especially large databases. I have worked with MongoDB and Django, but I also know a little bit of Laravel. I am excellent when it comes to organizing directories on the backend as well.",
    link: "Resources",
  },
  {
    name: "Version Control",
    description:
      "Git is one of the things that I picked up fastest. I know how to handle controlling versions and working with multiple branches even with a team. I'd say this is another one of my strong points.",
    link: "Resources",
  },
  {
    name: "Dev Ops (lightweight)",
    description:
      "I have a little bit experienced with devops as I have been doing that for myself for 2 years. I am open and very willing to learn more about it. It sounds strange but I absolutely adore setting up projects even if it is masked as ambition to start the project itself. I know how to set up MERN stack, django, sql servers (any variation such as Postgresql or Microsoft SQL Server), hosting, and even working with Agile methodologies.",
    link: "Resources",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto my-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 lg-mb-0"
          >
            <div className="h2 text-accent mb-6">What I Do:</div>
            <h3 className="h3 max-w-[455px mb-16]">
              I am a full-stack developer with over 2 years of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex overflow-auto"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
