import { Link } from 'react-router-dom'

import logoQMobile from '../Images/logoMeuCptoHorizBranco@2x.png'

function SideBar() {
  return (
    <div>
      <div className="logoQ1" />
      <div className="logoQ2" />
      <div className="logo" />
      <img className="logoMobile" src={logoQMobile} alt="logoQMobile" />
      <ul className="app-sidebar">
        <Link to="/Home">
          <button className="buttonHome" type="button"></button>
        </Link>
        <Link to="/FormularioCadastro">
          <button className="buttonCadastro" type="button"></button>
        </Link>

        <Link to="/Pessoas">
          <button className="buttonShare" type="button"></button>
        </Link>
        <Link to="/Relatorio">
          <button className="buttonGraph" type="button"></button>
        </Link>
        <Link to="/">
          <button className="buttonLogout" type="button"></button>
        </Link>
      </ul>
    </div>
  )
}

export default SideBar
