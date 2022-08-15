import React from "react";
import SectionHeading from "./SectionHeading";

const SectionContainer = ({
  children,
  title,
  large,
  centered,
  subtitle,
  id,
}) => {
  return (
    <section id={id}>
      <div className="app-container py-20">
        <SectionHeading
          title={title}
          large={large}
          subtitle={subtitle}
          centered={centered}
        />
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
};

export default SectionContainer;
