import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import camera from "../assets/camera.svg";
import perfil from "../assets/perfil-color.svg";

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <div className="header-logo">
          <Link to={"/"}>
            <img src={logo} alt="InstaRocket" />
          </Link>
        </div>
        <div className="header-main-publication-perfil">
          <div className="header-content-publication-perfil">
            <Link to={"/new"}>
              <img src={camera} alt="Enviar publicação" />
            </Link>
            <Link to={"/"}>
              <img src={perfil} alt="Perfil do usuário" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}