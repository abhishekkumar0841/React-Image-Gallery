import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PhotosDetails = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState({});

  async function fetchingPhotos() {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    setPhotos({
      desc: response.data.photo.description,
      title: response.data.photo.title,
      url: response.data.photo.url,
    });
  }

  useEffect(() => {
    fetchingPhotos();
  }, []);

  return (
    <div className=" w-[100vw] h-[90vh] bg-[#042e5e] pl-10 pr-10">
      <div className="w-full h-full flex items-center  justify-around bg-[#042e5e] gap-10">
        <div className="w-[400px] h-[400px] rounded-lg overflow-hidden shadow-[0px_3px_10px_rgb(,159,169,0.2)]">
          <img className="w-full h-full" src={photos.url} alt="" />
        </div>
        <div className="flex flex-col items-center gap-8 text-center ">
          <div className="text-4xl text-white font-bold">{photos.title}</div>
          <div className="text-2xl text-white">{photos.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotosDetails;
