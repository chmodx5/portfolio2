import React, { useState } from "react";
import SectionContainer from "../SectionContainer";
import PortfolioItem from "./PortfolioItem";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Portfolio = ({ title, large, centered, subtitle }) => {
  const [categories, setCategories] = useState({
    production: [
      {
        id: 1,
        title: "Misicode",
        techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
        desc: " This portfolio website was made for my client to showcase their work in a clean and professional manner which easy to navigate and showcases my client's work in a way that is sure to impress potential clients.",
        image: "/portfolio/misicode.png",
        link: "https://misicod-portfolio.vercel.app/",
        github: "https://github.com/chmodx5/misicod_portfolio",
      },

      {
        id: 3,
        title: "Matungulu medical",
        techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
        desc: "This website was made for my client (a hospital) to market their brand as a hospital and also simplify some of the hospitals primary challanges which was booking of appointments.",
        image: "/portfolio/matungulu-medical.png",
        link: "https://www.matungulumedical.co.ke/",
        github: "https://github.com/chmodx5/matungulu",
      },
      {
        id: 4,
        title: "Knh-Error tool",
        techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
        desc: "This one is a web application that helps the above mentioned hospital to simplify the process of reporting errors in their system and it also has a dashboard that shows the errors that are reported by the hospital and analytics.",
        image: "/portfolio/knh-errortool.png",
        link: "https://www.medical-error.knh.or.ke/",
        github: "https://github.com/chmodx5/error-form",
      },
    ],
    "side projects": [
      {
        id: 2,
        title: "Koogle",
        techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
        desc: "This one is actually my attempt at making something that looks similar to and works like google.com .",
        image: "/portfolio/koogle.png",
        link: "https://koogle.vercel.app/",
        github: "https://github.com/chmodx5/koogle",
      },
    ],
  });
  const [portfolioItems, setPortfolioItems] = useState([
    {
      title: "Someone Else",
      category: "branding",
      img: "https://source.unsplash.com/cauCwvTkHLM",
      techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus reprehenderit eligenditemporibus asperiores ipsam eius. Quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus reprehenderit eligendi temporibus asperiores ipsam eius. Quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus rehenderit eligendi temporibus asperiores ipsam eius.",
      gitlink: "https://github.com",
      externallink: "https://github.com",
    },
    {
      title: "Someone Else",
      category: "branding",
      img: "https://source.unsplash.com/random",
      techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus reprehenderit eligenditemporibus asperiores ipsam eius. Quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus reprehenderit eligendi temporibus asperiores ipsam eius. Quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus rehenderit eligendi temporibus asperiores ipsam eius.",
      gitlink: "https://github.com",
      externallink: "https://github.com",
    },
    {
      title: "Someone Else",
      category: "branding",
      img: "https://source.unsplash.com/cauCwvTkHLM",
      techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus reprehenderit eligenditemporibus asperiores ipsam eius. Quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus reprehenderit eligendi temporibus asperiores ipsam eius. Quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus rehenderit eligendi temporibus asperiores ipsam eius.",
      gitlink: "https://github.com",
      externallink: "https://github.com",
    },
    {
      title: "Someone Else",
      category: "branding",
      img: "https://source.unsplash.com/random",
      techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus reprehenderit eligenditemporibus asperiores ipsam eius. Quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus reprehenderit eligendi temporibus asperiores ipsam eius. Quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus rehenderit eligendi temporibus asperiores ipsam eius.",
      gitlink: "https://github.com",
      externallink: "https://github.com",
    },
  ]);
  return (
    <SectionContainer
      id="portfolio"
      title={title}
      large={large}
      subtitle={subtitle}
      centered={centered}
    >
      <br />
      <div>
        <Tab.Group>
          <Tab.List className="space-x-4 flex justify-center">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    " rounded shadow hover:shadow-lg py-1 px-4 text-sm font-medium leading-5 text-primary capitalize",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
                    selected
                      ? " bg-primary text-white hover:bg-primary/90 shadow-lg"
                      : "  text-primary bg-white hover:bg-primary hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels classes="">
            {Object.values(categories).map((items, idx) => (
              <Tab.Panel key={idx} className={classNames(" mt-10")}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="relative rounded-md  hover:bg-gray-100"
                    >
                      <PortfolioItem
                        title={item.title}
                        img={item.image}
                        link={item.link}
                        github={item.github}
                        desc={item.desc}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </SectionContainer>
  );
};

export default Portfolio;
