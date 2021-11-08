import { useState } from 'react'
import '../../styles/components/SideBar-right/SidebarMobile.css'

import logologo from '../../Components/logoIniciativaAzul@2x.png'

import * as IonIcons from 'react-icons/io'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'

import logo from '../../Images/logoMeuCptoHorizBranco.png'

function SidebarGerencia() {
  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <IconContext.Provider value={{ color: 'hsl(0, 0%, 100%)' }}>
        <div className="navbar">
          <Link to="#" className="NavButtomDireita">
            <IonIcons.IoIosAddCircleOutline onClick={showSidebar} />
          </Link>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            {/* logoSuperior */}
            <img className="Moblogo" src={logo} alt="logo" />
            {/* --- */}
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <div className="close-background"></div>
                <aside className="MobileProfileDireita">
                  <Link to="/SubMenuEmpresas">
                    <button className="Mobwork">EMPRESAS</button>
                  </Link>
                  <Link to="/SubMenuTipoDeObservacao">
                    <button className="MobtypObs">TIPO DE OBSERVAÇÃO</button>
                  </Link>
                  <Link to="/SubMenuTextActive">
                    <button className="MobTextActiv">TEXTOS ATIVADORES</button>
                  </Link>
                  <Link to="/SubMenuPessoas">
                    <button className="MobpeopleTest">PESSOAS</button>
                  </Link>
                  <Link to="/SubMenuGruposUsuarios">
                    <button className="MobUserGroup">GRUPOS DE USUÁRIOS</button>
                  </Link>
                </aside>
              </li>
            </ul>
            <div>
              <img className="Moblogologo" src={logologo} alt="logo" />
            </div>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default SidebarGerencia
