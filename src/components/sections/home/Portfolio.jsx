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
    branding: [
      {
        id: 1,
        title: "Branding",
        techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
        desc: "I am a Branding Designer who is passionate about creating beautiful and functional designs for the web and mobile.",
        image: "https://source.unsplash.com/random/800x600/?design",
        link: "https://www.behance.net/gallery/95979793/Branding",
        github: "https://github.com",
      },
      {
        id: 2,
        title: "Web Design",
        techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
        desc: "I am a Web Designer who is passionate about creating beautiful and functional designs for the web and mobile.",
        image: "https://source.unsplash.com/random/800x600/?webdesign",
        link: "https://www.behance.net/gallery/95979793/Branding",
        github: "https://github.com",
      },
      {
        id: 3,
        title: "UI/UX Design",
        techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
        desc: "I am a UI/UX Designer who is passionate about creating beautiful and functional designs for the web and mobile.",
        image: "https://source.unsplash.com/random/800x600/?uxdesign",
        link: "https://www.behance.net/gallery/95979793/Branding",
        github: "https://github.com",
      },
    ],
    development: [
      {
        id: 3,
        title: "Web Development",
        techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
        desc: "I am a Web Developer who is passionate about creating beautiful and functional designs for the web and mobile.",
        image: "https://source.unsplash.com/random/800x600/?webdevelopment",
        link: "https://www.behance.net/gallery/95979793/Branding",
        github: "https://github.com",
      },
      {
        id: 4,
        title: "Mobile Development",
        techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
        desc: "I am a Mobile Developer who is passionate about creating beautiful and functional designs for the web and mobile.",
        image: "https://source.unsplash.com/random/800x600/?mobiledevelopment",
        link: "https://www.behance.net/gallery/95979793/Branding",
        github: "https://github.com",
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
