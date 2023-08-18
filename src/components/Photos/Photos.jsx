import React from "react";
import { Link } from "react-router-dom";

const Photos = ({ id, url }) => {
  return (
    <div className="w-[300px] h-[300px]">
      <Link to={`/${id}`}>
        <img className="w-[100%] h-[100%]" src={url} />
      </Link>
    </div>
  );
};

export default Photos;
