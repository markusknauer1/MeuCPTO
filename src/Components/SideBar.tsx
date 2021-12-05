import { Link } from 'react-router-dom'

import logoQMobile from '../Images/logoMeuCptoHorizBranco@2x.png'

function SideBar() {
  console.log(SideBar)
  return (
    <>
      <div className="logoQ1" />
      <div className="logoQ2" />
      <div className="logo" />
      <img className="logoMobile" src={logoQMobile} alt="logoQMobile" />
      <ul className="app-sidebar">
        <Link to="/Relatorio">
          <button className="buttonHome" type="button" />
        </Link>
        <Link to="/FormularioCadastro">
          <button className="buttonCadastro" type="button" />
        </Link>

        <Link to="/Pessoas">
          <button className="buttonShare" type="button" />
        </Link>
        <Link to="/Home">
          <button className="buttonGraph" type="button" />
        </Link>
        <Link to="/">
          <button className="buttonLogout" type="button" />
        </Link>
      </ul>
    </>
  )
}

export default SideBar
