
import "./movie.css";

import movieLogo from "../assets/antony2.png";
import plusIcon from "../assets/plus.svg";
import likeIcon from "../assets/thumbs-up.svg";
import movie1 from "../assets/mohini.jpg";
import movie2 from "../assets/old guard.jpg";
import movie3 from "../assets/porotta.jpg";
import movie4 from "../assets/Churuli.jpeg";
import movie5 from "../assets/love.jpg"
import movie6 from "../assets/jailer.avif"
import movie7 from "../assets/legacy.jpg"
import MovieCard from "../components/MovieCard";
function Movies() {
  return (
    <div className="movie-card">
      <div
          className="movie-background">

      </div>

      <div className="movie-content">

        <img src={movieLogo}alt="Movie Logo"className="movie-logo"/>

        <div className="movie-buttons">
          <button className="play-btn">
             ▶ Play
          </button>

          <button className="icon-btn">   
          <img src={plusIcon} alt="plus" /></button>

          <button className="icon-btn">
          <img src={likeIcon} alt="Like" /></button>

        </div>

        <div className="movie-details">
          <div className="movie-left">

            <p className="movie-year">
              2026/  2h 36m/ HD
            </p>

            <p className="movie-rating">
              U/A 13+ violence, mature themes, tobacco use
            </p>

            <h3>
              Watch in Tamil, Telugu, Hindi, Malayalam, Kannada
            </h3>

            <p className="movie-description">
              In 1986 Madras, a timid boy accidentally traps
              a feared gangster in a school restroom, where
              an unlikely friendship brings out new sides
              of them both.
            </p>

          </div>

          <div className="movie-right">

            <p>
              <h2>Cast:</h2> antony varghese pepe,
              raj b shetty, usha, more
            </p>

            <p>
              <h2>Genres:</h2> Drama Movies,
              Comedy Movies, Tamil-Language Movies
            </p>

            <p>
              <h2>This Movie Is:</h2> Heartfelt
            </p>

          </div>
          

        </div>

        
      
      </div>
      <MovieCard Mtitle="Top five movies"/>
    </div>
  );
}

export default Movies;