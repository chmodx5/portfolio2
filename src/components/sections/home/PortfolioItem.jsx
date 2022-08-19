import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioItem({
  category,
  title,
  img,
  desc,
  link,
  github,
}) {
  return (
    <div className="group">
      <img
        src={img}
        alt={title}
        className="w-full h-full rounded shadow hover:shadow-lg aspect-square object-center object-cover  "
      />

      <div className="mt-4  ">
        <h5 className="font-bold group-hover:text-primary">{title}</h5>
        <small className="capitalize">{desc}</small>

        <div className="space-x-4 py-3">
          <a className="btn-primary" target="_blank" href={github}>
            Github
          </a>
          <a className="btn-outlined" target="_blank" href={link}>
            Visit page
          </a>
        </div>
      </div>
    </div>
  );
}
