import React from 'react'
import pepe from "../assets/pepe.webp"
import'./movie.css';

function Movie() {
  return (
    <div>
      <div className='Movie'>
        <div className='Movie-img'/>
        <img src={pepe} alt=""/>
      </div>
    </div>
  )
}

export default Movie