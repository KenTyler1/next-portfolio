import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/picture.png";
import project2 from "../../public/images/projects/movie.png";
import project3 from "../../public/images/projects/information.png";
import project4 from "../../public/images/projects/opengl.png";
import project5 from "../../public/images/projects/chatbot.png";
import project6 from "../../public/images/projects/sales_manage.png";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github, mark }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        targer="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw"
          style={{ height: "320px" }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          targer="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          Scores: {mark}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} targer="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            targer="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, mark }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        targer="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{ height: "320px" }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          targer="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            targer="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            Scores: {mark}
          </p>
          <Link href={github} targer="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>TonyKhanh | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Fruit identification programming"
                img={project1}
                summary="The program uses 3500 fruit images and 1500 offset classifiers for accurate object recognition. The program uses the python programming language to build desktop applications and the flask library to build websites."
                link="https://github.com/KenTyler1/computer_vision"
                github="https://github.com/KenTyler1/computer_vision"
                type="Featured Project"
                mark="9.1 points (A)"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Information security program"
                img={project3}
                summary="The program is built using code systems in information security including Ceasar cipher system, Affine cipher system, etc. The program uses the Python Streamlit programming language to build the program."
                link="https://github.com/KenTyler1/Information_security"
                github="https://github.com/KenTyler1/Information_security"
                type="Featured Project"
                mark="8.7 points (B+)"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Build 3D programs using OpenGL."
                img={project4}
                summary="Advanced graphics program, build 3D graphics program. The program is designed from C++ programming language, Blender to design 3D aircraft and uses Visual Studio Code to execute."
                link="https://github.com/KenTyler1/Project_OpenGL"
                github="https://github.com/KenTyler1/Project_OpenGL"
                type="Featured Project"
                mark="8.2 points (B+)"
              />
            </div>

            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                title="Movie recommendation system website"
                img={project2}
                summary="The site uses the Heroku content-based recommendation system. The system uses data collected from themoviedb site with more than 5000 movie data. The program uses the Django Python programming language to build websites."
                link="https://github.com/KenTyler1/Movie_RS"
                github="https://github.com/KenTyler1/Movie_RS"
                type="Featured Project"
                mark="9.0 points (A)"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Build a tour website with integrated chatbot"
                img={project5}
                summary="The program is built crawling 100+ tours with 600+ images respectively and over 200+ scenarios using ReactJS library and react-chatbot-kit library to build NLP Bot and Clicking Bot for short is the Dialog Mangement Bot."
                link="https://github.com/KenTyler1/Chatbots"
                github="https://github.com/KenTyler1/Chatbots"
                type="Featured Project"
                mark="8.2 points (B+)"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Building a website for sales management"
                img={project6}
                summary="Building sales management website (phone and electronic devices). Sales management website using 100% pure PHP programming language and SQL query on XAMPP tool. (There is no framework like Lavarel and MVC pattern)."
                link="https://github.com/KenTyler1/Website-sales-management"
                github="https://github.com/KenTyler1/Website-sales-management"
                type="Featured Project"
                mark="9.3 points (A)"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
