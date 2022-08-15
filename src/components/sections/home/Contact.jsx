import React, { useState } from "react";
import SectionContainer from "../SectionContainer";
import { ImLocation, ImWhatsapp } from "react-icons/im";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdPhone } from "react-icons/md";

const Contact = ({ title, large, centered, subtitle }) => {
  return (
    <SectionContainer
      id="contact"
      title={title}
      large={large}
      subtitle={subtitle}
      centered={centered}
    >
      <br />
      <div className=" ">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <ImLocation />,
              desc: "Nairobi, Kenya",
              link: "",
            },
            {
              icon: <MdPhone />,
              desc: "0746405792",
              link: "tel:0746405792",
            },
            {
              icon: <MdOutlineEmail />,
              desc: "onesmaswanjala2021@gmail.com",
              link: "mailto:onesmaswanjala2021@gmail.com",
            },
            {
              icon: <ImWhatsapp />,
              desc: "+254746405792",
              link: "https://api.whatsapp.com/send?phone=+254746405792",
            },
            {
              icon: <FaGithub />,
              desc: "@chmodx5",
              link: "https://github.com/chmodx5",
            },
            {
              icon: <FaLinkedin />,
              desc: "Onesmas Wanjala",
              link: "https://www.linkedin.com/in/onesmas-wanjala-10127b216/",
            },
          ].map((contact, index) => (
            <a href={contact.link} key={index} target="_blank">
              <li className="flex gap-8 items-center  px-5 py-10 group bg-white rounded shadow hover:shadow-lg">
                <div className="flex space-x-3 items-center">
                  <span className="text-3xl group-hover:text-primary">
                    {contact.icon}
                  </span>
                  <p className="group-hover:font-semibold">{contact.desc}</p>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default Contact;
