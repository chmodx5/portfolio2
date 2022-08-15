import React from "react";
import SectionContainer from "../SectionContainer";
import Skill from "./Skill";

const MySkills = ({ title, large, centered, subtitle, skills }) => {
  return (
    <SectionContainer
      id="skills"
      title={title}
      large={large}
      subtitle={subtitle}
      centered={centered}
    >
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-5 mt-10 px-6 md:px-0">
        {skills.map((service, index) => (
          <Skill
            key={index}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default MySkills;
