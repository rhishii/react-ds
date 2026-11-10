import React from 'react'
import churuli from "../assets/Churuli.jpeg"
import porotta from"../assets/porotta.jpg"
import tovino from"../assets/tovino.webp"
import kondal from "../assets/kondal.jpg"
import love from"../assets/love.jpg"
import mohini from"../assets/mohini.jpg"
import'./moviecard.css'

function MovieCard({Mtitle}) {
  return (
    <div>
        <div className="movies">
      <h1> {Mtitle}</h1>
      <div className="list">
        <img src={churuli} alt="" />
        <img src={porotta} alt="" />
        <img src={tovino} alt="" />
        <img src={kondal} alt="" />
        <img src={love} alt="" />
        <img src={mohini} alt=""/>
        <img src={churuli} alt="" />
        {/* <img src={biju} alt="" /> */}
        {/* <img src={pulimurugan} alt="" /> */}
        <img src={kondal} alt="" />
        <img src={love} alt="" />
        <img src={mohini} alt=""/>
      </div>
    </div>
    </div>
  )
}

export default MovieCard