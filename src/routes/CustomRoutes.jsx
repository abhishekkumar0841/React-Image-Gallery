import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Gallery from '../components/Gallery/Gallery'
import PhotosDetails from '../components/PhotosDetails/PhotosDetails'

const CustomRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <Gallery/> } />
        <Route path='/:id' element={ <PhotosDetails/> } />
    </Routes>
  )
}

export default CustomRoutes
