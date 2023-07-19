import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import certificate1 from '../../public/images/certificates/Developing Cloud Apps with Node.js and React.png';
import certificate2 from '../../public/images/certificates/Microsoft Azure Management Tools and Security Solutions.png';
import certificate3 from '../../public/images/certificates/Version Control.png';
import certificate4 from '../../public/images/certificates/Introduction to Microsoft Azure Cloud Services.png';
import certificate5 from '../../public/images/certificates/Introduction to Front-End Development.png';


import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transtion: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        targer="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};
const learnings = () => {
  return (
    <>
      <Head>
        <title>TonyKhanh | Certificates Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Developing Cloud Apps with Node.js and React"
              summary="This course will help you succeed as a  full-stack developer. It suits those in IT looking to step up in their careers or new graduates seeking to establish their server-side skills. This course suits those who need to manage cloud-centric projects."
              time="1 week"
              link="https://www.coursera.org/account/accomplishments/certificate/XB6NES5X4XLA"
              img={certificate1}
            />
            <FeaturedArticle
              title="Microsoft Azure Management Tools and Security Solutions"
              summary="This is the second course in a four-course program that prepares you to take the AZ-900 certification exam. This course teaches you the core concepts and skills that are assessed in the Microsoft Azure management tools, and security solutions exam domains."
              time="4 days"
              link="https://www.coursera.org/account/accomplishments/certificate/43WW48R7TRYH"
              img={certificate2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All certificates
          </h2>
          <ul>
            <Article
              title="Learn how modern software developers collaborate across the world."
              date="July 1, 2023"
              link="https://www.coursera.org/account/accomplishments/certificate/ZPB32E6WTYE6"
              img={certificate3}
            />
            <Article
              title="Introduction to Microsoft Azure Cloud Services"
              date="July 6, 2023"
              link="https://www.coursera.org/account/accomplishments/certificate/7NWF7ZB6HLMB"
              img={certificate4}
            />
            <Article
              title="Introduction to Front-End Development"
              date="July 10, 2023"
              link="https://www.coursera.org/account/accomplishments/certificate/VZVFXLPYWJJ4"
              img={certificate5}
             />
            <Article
              title="Introduction to Front-End Development"
              date="July 10, 2023"
              link="https://www.coursera.org/account/accomplishments/certificate/VZVFXLPYWJJ4"
              img={certificate5}
             />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default learnings;
