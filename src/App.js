import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error/Error.jsx";
import Login from "./components/Login/Login.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import accounts from "./data.js";
import sonido from "./assets/sounds/CardSound.mp3";
import { deleteFavorite } from "./redux/actions/actions.js";
import { useDispatch } from "react-redux";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const dispatch = useDispatch();
  const access = false;

  // Save access in localStorage so that you don't close the session when you reload the page and in this way we can see the 404 error page
  localStorage.setItem(access, false);

  function login(userData) {
    var i = undefined;
    accounts.forEach((e) => {
      if (e.username === userData.username) {
        i = e.id - 1;
        return i;
      }
    });
    if (
      userData.username === accounts[i].username &&
      userData.password === accounts[i].password
    ) {
      localStorage.setItem(access, true);
      navigate("/home");
    }
  }

  // Signup start
  function signup(userData) {
    let i = accounts.length;
    const newUser = {
      id: i + 1,
      name: userData.username,
      password: userData.password,
    };
    console.log(newUser);
    accounts.push(newUser);
    console.log(accounts);
  }
  // Signup end

  useEffect(() => {
    !localStorage.getItem(access) && navigate("/");
    // eslint-disable-next-line
  }, [access]);

  function onSearch(id) {
    location.pathname !== "/" && navigate("/home");
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let loaded = characters.find((e) => e.id === data.id);
          if (loaded) {
            alert("This card is already loaded");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("There is no card with that ID");
        }
      });
    document.getElementById("caudio").play(); //Card sound play
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
    dispatch(deleteFavorite(id));
  };

  function random() {
    location.pathname !== "/" && navigate("/home"); //redrection to home
    let randomID = Math.floor(Math.random() * 826);
    onSearch(randomID);
    document.getElementById("caudio").play(); //Card sound play
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      {/* Card sound source */}
      <audio id="caudio">
        <source src={sonido} type="audio/mpeg" />
      </audio>
      {/* Card sound source */}

      <div
        style={{
          position: "sticky",
          top: "10px",
          overflow: "hidden",
          backgroundColor: "#333",
          borderRadius: "30px",
          zIndex: "9999",
        }}>
        {/* Change in the logic to positive so that it only render in the desired pages and not in the login or urls not accepted (404) */}
        {(location.pathname === "/home" ||
          location.pathname === "/about" ||
          location.pathname === "/favorites" ||
          location.pathname === "/detail/:detailId") && (
          <NavBar onSearch={onSearch} random={random} />
        )}
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={<Login login={login} signup={signup} />}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
