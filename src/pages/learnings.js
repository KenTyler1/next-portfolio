import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/learning/react-dev.png";
import article2 from "../../public/images/learning/nextjs.png";
import article3 from "../../public/images/learning/python-rasa-chatbot.png";
import article4 from "../../public/images/learning/react-chatbot-kit.png";
import article5 from "../../public/images/learning/php-language.png";
import article6 from "../../public/images/learning/react-pagination.png";
import article7 from "../../public/images/learning/outsystems.png";
import article8 from "../../public/images/learning/tailwindcss.png";
import article9 from "../../public/images/learning/animista.png";


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
        <title>TonyKhanh | Articles Page</title>
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
              title="Building Programs Using ReactJS and NextJS"
              summary="Learn how to build programs that are 80% React and 20% Next. Next.js is a full-stack React framework. It’s versatile and lets you create React apps of any size—from a mostly static blog to a complex dynamic application. Follow this step-by-step guide to integrate React in your NextJS project."
              time="Read many days"
              link="https://react.dev/"
              img={article1}
            />
            <FeaturedArticle
              title="Building Programs Using NextJS: The React Framework for the Web"
              summary="Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds."
              time="Read many days"
              link="https://nextjs.org/"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All learning
          </h2>
          <ul>
            <Article
              title="Rasa chatbot: Building a program using Rasa chatbot."
              date="January 1, 2023"
              link="https://rasa.com/"
              img={article3}
            />
            <Article
              title="React-chatbot-kit framework: Building a tour website chatbot using Dialog Management Bot"
              date="June 15, 2022"
              link="https://fredrikoseberg.github.io/react-chatbot-kit-docs/"
              img={article4}
            />
            <Article
              title="PHP language: Building a website for sales management "
              date="September 10, 2022"
              link="https://www.w3schools.com/php/default.asp"
              img={article5}
            />
            <Article
              title="Material UI is a library of React UI components that implements Google's Material Design."
              date="August 19, 2022"
              link="https://mui.com/"
              img={article6}
            />
            <Article
              title="OutSystems (Low-code): Learning how to build website by outsystems program."
              date="March 22, 2023"
              link="https://www.outsystems.com/community/"
              img={article7}
            />
            <Article
              title="Tailwind CSS: How to use taiwind framework in your project."
              date="March 29, 2023"
              link="https://tailwindcss.com/"
              img={article8}
            />
            <Article
              title="Animista: Learn CSS Programming. "
              date="February 2, 2020"
              link="https://animista.net/"
              img={article9}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default learnings;
