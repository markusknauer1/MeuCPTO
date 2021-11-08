import React from 'react'
import 'react-calendar/dist/Calendar.css'
import logo1 from '../Images/perflAlex.png'
import logologo from '../Components/logoIniciativaAzul@2x.png'
import '../styles/components/profiledireita.css'
import { Link } from 'react-router-dom'
import SidebarMobile from './SideBar-right/SidebarMobile'

function ProfileDireita() {
  return (
    <div className="Profile-direita">
      <div className="greetings1">
        <h6>Seja muito Bem-vindo,</h6>
      </div>
      <div>
        <h6 className="greetings2">João da Silva</h6>
      </div>

      <div className="cxProfile">
        <img className="logo1" src={logo1} alt="logo" />
        <Link to="/Home">
          <button className="profile-profileEditor">Ver perfil</button>
        </Link>
        <img className="logologo" src={logologo} alt="logo" />
      </div>

      <div className="menuExtra">
        <SidebarMobile />
      </div>
    </div>
  )
}

export default ProfileDireita
