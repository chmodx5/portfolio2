import React from "react";
import SectionContainer from "../SectionContainer";
import { Link } from "react-router-dom";

const About = ({ title, large, centered, subtitle, about, aboutLink }) => {
  return (
    <SectionContainer
      id="about"
      title={title}
      large={large}
      subtitle={subtitle}
      centered={centered}
    >
      <div className="text-center space-y-10">
        <p className="text-center">{about}</p>
        <a href={aboutLink} target="_blank" className="btn-primary">
          More About Me
        </a>
      </div>
    </SectionContainer>
  );
};

export default About;
