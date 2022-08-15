import React from "react";
import SectionContainer from "../SectionContainer";

const Services = ({ title, large, subtitle, centered }) => {
  return (
    <SectionContainer
      id="services"
      title={title}
      large={large}
      subtitle={subtitle}
      centered={centered}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: "services/uiux-design.svg",
            title: "UI/UX Design",
            desc: " I work with clients to understand their business goals and create a user interface that is both beautiful, tailored for their needs and easy to use.",
          },
          {
            icon: "services/frontend-development.svg",
            title: "Frontend Development",
            desc: "I am a frontend developer and I specialize in building user interfaces and creating interactive web applications. I have a strong understanding of HTML, CSS, and JavaScript and I am always keeping up with the latest trends and technologies.",
          },
          {
            icon: "services/fullstack.svg",
            title: "Fullstack Development",
            desc: "I'm a fullstack developer with experience in React, Node.js, and Express. I have a strong understanding of web development and am able to work on both frontend and backend development.",
          },
          {
            icon: "services/seo.svg",
            title: "S.E.O",
            desc: "SEO developer with 5 years of experience. I have a passion for SEO and love to stay up to date with the latest trends. I have experience with on-page and off-page SEO, as well as experience with popular SEO tools. I am always looking to improve my skills and learn new techniques.",
          },
          {
            icon: "services/tutor.svg",
            title: "Tutor",
            desc: "As developer who is passionate about creating beautiful and functional designs for the web and mobile strive to share my knowledge and experience with the community through tutoring.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col rounded bg-white shadow hover:shadow-lg p-6"
          >
            <img
              src={item.icon}
              className="aspect-square w-40"
              alt={item.title}
            />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;
// mental note i think servics should be on the homepage and skills on the about page
