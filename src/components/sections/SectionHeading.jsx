import React from "react";

function SectionHeading({ title, large, centered, subtitle }) {
  return (
    <div className=" group ">
      {subtitle ? (
        <p
          className={` text-primary capitalize font-semibold mb-2 ${
            centered ? "text-center" : ""
          } `}
        >
          {subtitle}
        </p>
      ) : (
        ""
      )}

      <h2
        className={`capitalize font-bold ${large ? "text-2xl" : "text-xl"} ${
          centered ? "text-center" : ""
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-1 mt-4 w-28 flex gap-x-2 ${centered ? "mx-auto" : ""}`}
      >
        <div className="h-full rounded-md bg-primary w-1/5 group-hover:w-4/5 transition-all  ease-in-out" />
        <div className="h-full rounded-md bg-primary w-4/5 group-hover:w-1/5 transition-all  ease-in-out" />
      </div>
    </div>
  );
}

export default SectionHeading;
