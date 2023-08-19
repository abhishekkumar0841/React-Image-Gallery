import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PhotosDetails = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function fetchingPhotos() {
    setIsLoading(true);
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    setPhotos({
      desc: response.data.photo.description,
      title: response.data.photo.title,
      url: response.data.photo.url,
    });
    setIsLoading(false);
  }

  useEffect(() => {
    fetchingPhotos();
  }, []);

  return (
    <div className=" w-[100vw] min-h-[90vh] bg-[#042e5e] pl-10 pr-10 flex justify-center items-center ">
      {isLoading ? (
        <img className="w-[300px] h-[300px]" src="https://flyclipart.com/thumb2/transparent-dancing-gif-tumblr-688390.png" alt="" />
      ) : (
        <div className="w-full h-full flex flex-col lg:flex-row gap-3 sm:gap-10 pt-6 items-center justify-center bg-[#042e5e] ">
          <div className=" w-[full] h-[full] sm:w-[40%] sm:h-[40%] rounded-lg overflow-hidden shadow-[0px_3px_10px_rgb(,159,169,0.2)] flex-shrink-0">
            <img
              className="w-full h-full object-fill "
              src={photos.url}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-3 sm:gap-8 text-center p-4 max-w-[700px] flex-shrink">
            <div className="text-2xl sm:text-4xl text-white font-bold border-b-2 border-white p-2 rounded-sm">{photos.title}</div>
            <div className="text-xl sm:text-2xl text-white">{photos.desc}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotosDetails;
