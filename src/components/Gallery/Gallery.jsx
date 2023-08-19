// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Photos from '../Photos/Photos'

// const Gallery = () => {

//     const GALLERY_URL = 'https://api.slingacademy.com/v1/sample-data/photos';

//     const [photosArrays, setPhotosArrays] = useState([])

//     async function fetchingPhotos(){
//         const response = await axios.get(GALLERY_URL)

//         const photosData = response.data.photos
//         const extractingData = photosData.map((p)=>{
//             return {
//                 desc: p.description,
//                 id: p.id,
//                 title: p.title,
//                 url: p.url
//             }
//         })
//         setPhotosArrays(extractingData)
//     }

//     useEffect(()=>{
//         fetchingPhotos()
//     }, [])

//   return (
//     <>
//     <div className='flex  flex-wrap gap-8 justify-center items-center mt-4'>
//       {
//         photosArrays.map((photos)=>{
//             return <Photos key={photos.id} desc={photos.desc} id={photos.id} title={photos.title} url={photos.url} />
//         })
//       }
//     </div>
//     <div className=' flex items-center justify-center gap-10 mt-4'>
//         <button className='text-xl pt-2 pb-2 pr-6 pl-6 text-white bg-[#042e5e] rounded-md font-bold' >Prev</button>
//         <button className='text-xl pt-2 pb-2 pr-6 pl-6 text-white bg-[#042e5e] rounded-md font-bold' >Next</button>
//       </div>
//     </>
//   )
// }

// export default Gallery

// ************New Implementation**************

import axios from "axios";
import React, { useEffect, useState } from "react";
import Photos from "../Photos/Photos";

const Gallery = () => {
  // let offset = 0;

  const [offset, setOffset] = useState(0);

  const [GALLERY_URL, setGALLERY_URL] = useState(
    `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`
  );

  const [photosArrays, setPhotosArrays] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  async function fetchingPhotos() {
    setIsLoading(true);
    const response = await axios.get(GALLERY_URL);

    const photosData = response.data.photos;
    const extractingData = photosData.map((p) => {
      return {
        desc: p.description,
        id: p.id,
        title: p.title,
        url: p.url,
      };
    });
    setPhotosArrays(extractingData);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchingPhotos();
  }, [GALLERY_URL]);

  function nextHandler() {
    setOffset(offset + 20);
    setGALLERY_URL(
      `https://api.slingacademy.com/v1/sample-data/photos?offset=${
        offset + 20
      }&limit=20`
    );
    console.log(offset);
  }

  function prevHandler() {
    setOffset(offset - 20);
    setGALLERY_URL(
      `https://api.slingacademy.com/v1/sample-data/photos?offset=${
        offset - 20
      }&limit=20`
    );
    console.log(offset);
  }

  return (
    <>
      <div className="flex  flex-wrap gap-8 justify-center items-center mt-4">
        {isLoading ? (
          <img className="w-[300px] h-[300px]"
            src="https://flyclipart.com/thumb2/transparent-dancing-gif-tumblr-688390.png"
            alt=""
          />
        ) : (
          photosArrays.map((photos) => {
            return (
              <Photos
                key={photos.id}
                desc={photos.desc}
                id={photos.id}
                title={photos.title}
                url={photos.url}
              />
            );
          })
        )}
      </div>
      <div className=" flex items-center justify-center gap-10 mt-4">
        <button
          disabled={offset < 20}
          onClick={prevHandler}
          className="text-xl pt-2 pb-2 pr-6 pl-6 text-white bg-[#042e5e] rounded-md font-bold disabled:opacity-75"
        >
          Prev
        </button>
        <button
          disabled={offset > 100}
          onClick={nextHandler}
          className="text-xl pt-2 pb-2 pr-6 pl-6 text-white bg-[#042e5e] rounded-md font-bold disabled:opacity-75"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Gallery;
