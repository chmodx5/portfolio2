import React, { useState } from "react";
import Hero from "./../components/sections/home/Hero";
import About from "./../components/sections/home/About";
import Portfolio from "../components/sections/home/Portfolio";
import Skills from "./../components/sections/Home/Skills";
import Services from "../components/sections/home/Services";
import Contact from "../components/sections/home/Contact";

const Home = () => {
  const [skills, setSkills] = useState([
    {
      icon: "skills/html-logo.svg",
      title: "HTML5",
    },
    {
      icon: "skills/css-logo.svg",
      title: "CSS3",
    },
    {
      icon: "skills/javascript-logo.svg",
      title: "Javascript",
    },
    {
      icon: "skills/nodejs-logo.svg",
      title: "Node.js",
    },
    {
      icon: "skills/sass-logo.svg",
      title: "SASS",
    },
    {
      icon: "skills/vue-logo.svg",
      title: "Vue.js",
    },
    {
      icon: "skills/react-logo.svg",
      title: "React.js",
    },
    {
      icon: "skills/wordpress-logo.svg",
      title: "Wordpress",
    },
  ]);
  return (
    <>
      <Hero />
      <About
        title="about me"
        large
        subtitle=""
        centered
        about=" Hello, my name is Onesmas Wanjala, a web developer with a five yaer experience in building websites from scratch as well as working on existing websites. I am proficient in HTML, CSS, and JavaScript. I am also familiar with various web development frameworks such as Laravel, django, and Express. In addition to web development, I also have experience with graphic design and user experience. I am a creative and problem-solving individual who is always looking to learn new things. If you need a website built or updated, I would be more than happy to help. Thank you for taking the time to read about me."
        aboutLink="https://www.linkedin.com/in/onesmas-wanjala-10127b216/"
      />
      <Services
        title="what im interested in"
        large
        subtitle="services"
        centered
      />
      {/* <Skills title="skills" large subtitle="" centered skills={skills} /> */}

      <Portfolio
        title="featured projects"
        large
        subtitle="portfolio"
        centered
      />

      <Contact title="contact info" large subtitle="contacts" centered />
    </>
  );
};

export default Home;
