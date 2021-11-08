import React from 'react'
import "react-calendar/dist/Calendar.css";
import logo1 from "../Components/profile.png"
import logologo from "../Components/logoIniciativaAzul@2x.png"
import "../styles/components/profiledireita.css";
import { Link } from 'react-router-dom';

function ProfileDireita() {
  return (
    
    <div className="Profile-direita">
      <img className="logo1" src={logo1} alt="logo" />
      <div className="greetings1">
        <h6>Seja muito Bem-vindo,</h6>
      </div>
      <div>
        <h6 className="greetings2">João da Silva</h6>
      </div>
      <div>
        <Link to="/Home">
        <button  className="profile-profileEditor" >
          Ver perfil
        </button></Link>
        <img className="logologo" src={logologo} alt="logo" />
      </div>
    </div>
  )
}

export default ProfileDireita
