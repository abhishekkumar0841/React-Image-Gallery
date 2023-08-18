import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Photos from '../Photos/Photos'

const Gallery = () => {

    const GALLERY_URL = 'https://api.slingacademy.com/v1/sample-data/photos'
    const [photosArrays, setPhotosArrays] = useState([])


    async function fetchingPhotos(){
        const response = await axios.get(GALLERY_URL)
        const photosData = response.data.photos
        const extractingData = photosData.map((p)=>{
            return {
                desc: p.description,
                id: p.id,
                title: p.title,
                url: p.url 
            }
        })
        setPhotosArrays(extractingData)
    }

    useEffect(()=>{
        fetchingPhotos()
    }, [])

  return (
    <div className='flex  flex-wrap gap-8 justify-center items-center mt-4'>
      {
        photosArrays.map((photos)=>{
            return <Photos key={photos.id} desc={photos.desc} id={photos.id} title={photos.title} url={photos.url} />
        })
      }
    </div>
  )
}

export default Gallery
