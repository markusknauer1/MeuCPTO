import home from '../Images/Home.svg'

import formularioCad from '../Images/pointer.svg'
import pessoas from '../Images/Pessoas.svg'
import graph from '../Images/Graph.svg'
import Logout from '../Images/Logout.svg'

import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import logoQMobile from '../Images/logoMeuCptoHorizBranco@2x.png'

function SideBar() {
  const { goBack } = useHistory()
  return (
    <div>
      <div className="logoQ1" />
      <div className="logoQ2" />
      <div className="logo" />
      <img className="logoMobile" src={logoQMobile} alt="logoQMobile" />
      <aside className="app-sidebar">
        <Link to="/Home">
          <button className="buttonHome" type="button">
            <img src={home} className="buttonHome" alt="home" />
          </button>
        </Link>

        <Link to="/FormularioCadastro">
          <button className="buttonCadastro" type="button">
            <img
              src={formularioCad}
              className="buttonCadastro"
              alt="formularioCad"
            />
          </button>
        </Link>

        <Link to="/Pessoas">
          <button className="buttonShare" type="button">
            <img src={pessoas} className="buttonShare" alt="pessoas" />
          </button>
        </Link>
        <Link to="/Relatorio">
          <button className="buttonGraph" type="button">
            <img src={graph} className="buttonGraph" alt="graph" />
          </button>
        </Link>
        <Link to="/">
          <button className="buttonLogout" type="button">
            <img src={Logout} className="buttonLogout" alt="Logout" />
          </button>
        </Link>
      </aside>
    </div>
  )
}

export default SideBar
