import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design (Light-weight)",
    description:
      "I have a bit of experience with creating mockups on Figma. I've designed my own projects up to this point so I don't exactly have professional design training but I do know how to design a web page.",
  },
  {
    name: "Frontend Web Development",
    description:
      "I can put together nifty pages and am really good with organizing files when it comes to creating components and pages. This is one of the backbones of my skills and I deal mostly in react frameworks and tailwind css. I am not opposed to learning other libraries and frameworks and I also consider myself a wizard with vanilla HTML and CSS.",
  },
  {
    name: "Backend Web Development",
    description:
      "I'd say this is another one of my backbones. My favorite thing about being a web developer is creating and handling data. Espeacially large databases. I have worked with MongoDB and Django, but I also know a little bit of Laravel. I am excellent when it comes to organizing directories on the backend as well.",
  },
  {
    name: "Version Control",
    description:
      "Git is one of the things that I picked up fastest. I know how to handle controling versions and working with multiple branches even with a team. I'd say this is another one of my strong points.",
  },
  {
    name: "Dev Ops (lightweight)",
    description:
      "I have a little bit experienced with devops as I have been doing that for myself for 2 years. I am open and very willing to learn more about it. It sounds strange but I absolutely adore setting up projects even if it is masked as ambition to start the project itself. I know how to set up MERN stack, django, sql servers (any variation such as Postgresql or Microsoft SQL Server), hosting, and even working with Agile methodologies.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto"></div>
    </section>
  );
};

export default Services;
