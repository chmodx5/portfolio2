import React from "react";

const Skill = ({ icon, title }) => {
  return (
    <div>
      <div className=" py-4  group text-center">
        <div className="bg-white rounded shadow hover:shadow-lg p-4 flex justify-center text-7xl text-primary-default group-hover:text-white">
          <img
            src={icon}
            alt="image"
            className=" grayscale group-hover:grayscale-0 object-center object-cover w-full aspect-square"
          />
        </div>

        <h2 className="font-semibold mt-4 group-hover:font-bold text-xl">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Skill;
