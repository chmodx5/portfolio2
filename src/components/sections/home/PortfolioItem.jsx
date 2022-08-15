import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioItem({ category, title, img, desc }) {
  return (
    <div className="group">
      <Link to={`/portfolio/${title}`}>
        <img
          src={img}
          alt={title}
          className="w-full h-full rounded shadow hover:shadow-lg aspect-square object-center object-cover  "
        />
      </Link>
      <div className="mt-4  ">
        <Link to={`/portfolio/${title}`}>
          <h5 className="font-bold group-hover:text-primary">{title}</h5>
          <small className="capitalize">{desc}</small>
        </Link>
      </div>
    </div>
  );
}
