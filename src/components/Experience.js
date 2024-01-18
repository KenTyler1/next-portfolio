import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Developer Intern"
            companyLink="https://www.fpt-software.com/"
            company="FPT-Software"
            time="Summer 2022"
            address="Ninh Kieu, Can Tho city"
            work="Worked on a team responsible for developing new features for Gripline Lixil project, including implementing a new user interface for a system settings panel, testing and optimizing the performance of a core system component."
          />
          <Details
            position="Angular Fresher"
            companyLink="https://overate-vntech.com/"
            company="OVERATE-VNTECH"
            time="August 1 - October 29, 2023"
            address="Go Vap, Ho Chi Minh City"
            work="I worked with the company's Angular project and gained knowledge about services, interfaces, API 
            calls to Java Back-end. Not only that, I also cut HTML, CSS, Responsive Design, etc"
          />
          <Details
            position="Freelance Web Developer"
            companyLink="mlhotel.vn"
            company="MINH LOAN HOTEL"
            time="November 15 - December 15, 2023"
            address="Cho Moi, An Giang "
            work="Build a website for Minh Loan hotel located in An Giang for customers using ReactJS, NodeJS, 
            MongoDB framework. Rent a virtual server to upload the code and rent the domain name 
            mlhotel.vn to point to the server."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
