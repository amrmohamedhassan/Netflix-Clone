import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../Contexts/UsersContext";

const Movies = () => {
  const { Users, Movies } = useContext(UsersContext);
  const [User, setUser] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (Users) {
      for (let user of Users) {
        if (user.id === id) {
          setUser(user);
        }
      }
    }
  }, [Users, id]);

  return (
    <div className="Movies">
      <nav>
        <div className="left">
          <img
            onClick={() => navigate("/accounts")}
            src="/Imgs/Logo.svg"
            alt="Logo"
          />
          <ul className="elements">
            <li className="el">Home</li>
            <li className="el">TV Shows</li>
            <li className="el">Movies</li>
            <li className="el">New & Popular</li>
            <li className="el">My List</li>
            <li className="el">Browse by Language</li>
          </ul>
        </div>
        <ul className="acc">
          <li>
            <img className="search" src="/Imgs/search.svg" alt="search" />
          </li>
          <li>{User.Name}</li>
          <li className="menu">
            <img className="profile" src={User.img} alt="Profile" />
            <img className="more" src="/Imgs/more.png" alt="" />
            <ul className="inv">
              <div className="list-cont">
                {Users &&
                  Users.map((user) => (
                    <li
                      onClick={() => navigate(`/movies/${user.id}`)}
                      className="inv-el"
                      key={user.id}
                    >
                      <img src={user.img} alt="" />
                      <p>{user.Name}</p>
                    </li>
                  ))}
                <img src="/Imgs/play.png" alt="" className="up-arrow" />
              </div>
              <div className="line"></div>
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="list-sgnout"
              >
                Log Out
              </button>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="cover">
        <img src="/Imgs/movie-logo.webp" alt="" />
        <div className="rank">
          <div className="top">
            <p>TOP 10</p>
          </div>
          <h1>#2 in TV Shows Today</h1>
        </div>
        <p className="details">
          Inspired by the adventures of Asrene Lupin, gentelman thief Assane
          Diop sets out to avenge his father for an injustice inflicted by the
          wealthy family.
        </p>
        <div className="buttons">
          <button className="play">
            <img src="/Imgs/play.png" alt="play" />
            Play
          </button>
          <button className="more-info">
            <img src="/Imgs/more-info.svg" alt="" />
            More Info
          </button>
        </div>
      </div>
      <div className="lists">
        <div className="movies">
          <h1>Movies</h1>
          <div className="cards">
            {Movies &&
              Movies.map((movie) => (
                <div className="card" key={movie.id}>
                  <img src={movie.img} alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className="series">
          <h1>Series</h1>
          <div className="cards">
            {Movies &&
              Movies.map((movie) => (
                <div className="card" key={movie.id}>
                  <img src={movie.img} alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className="movies">
          <h1>cartoons</h1>
          <div className="cards">
            {Movies &&
              Movies.map((movie) => (
                <div className="card" key={movie.id}>
                  <img src={movie.img} alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className="series">
          <h1>TV-Shows</h1>
          <div className="cards">
            {Movies &&
              Movies.map((movie) => (
                <div className="card" key={movie.id}>
                  <img src={movie.img} alt="" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
