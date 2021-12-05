import Calendar from 'react-calendar'
import { Link } from 'react-router-dom'
import '../../styles/pages/relatorio.css'
import logoKlabim from '../../Images/logoK.png'
import '../../styles/components/Calendar.css'

import okImg from '../../Images/ok.svg'
import wrongImg from '../../Images/wrong.svg'
import SideBar from '../../Components/SideBar'
import ProfileDireita from '../../Components/ProfileDireita'
import SidebarMobile from '../../Components/SideBar-right/SidebarMobile'

function Relatorio() {
  return (
    <div className="HomePage">
      <SideBar />
      <div className="page">
        <div className="filter1">
          <h4 className="MetaMes1">PÁGINA INICIAL</h4>
          <h2 className="subtRel2">Resultado do ICS</h2>
          <img className="logoK" src={logoKlabim} alt="LogoK" />
          <h3 className="subtRel3">Índice de Comportamento Seguro</h3>
        </div>

        <div className="row tabelaPadrao2">
          <Link to="/UniClienteExe">
            <button className="ICS1">
              <img className="statusRel" src={okImg} alt="okImg" />
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
              <label className="locale">Unidade</label>
            </button>
          </Link>

          <Link to="/UniClienteExe">
            <button className="ICS2">
              <img className="statusRel" src={okImg} alt="okImg" />
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
              <label className="locale">Unidade</label>
            </button>
          </Link>

          <Link to="/UniClienteExe">
            <button className="ICS3">
              <img className="statusRel" src={wrongImg} alt="wrongImg" />
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
              <label className="locale">Unidade</label>
            </button>
          </Link>

          <Link to="/UniClienteExe">
            <button className="ICS4">
              <img className="statusRel" src={okImg} alt="okImg" />
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
              <label className="locale">Unidade</label>
            </button>
          </Link>

          <Link to="/UniClienteExe">
            <button className="ICS5">
              <img className="statusRel" src={wrongImg} alt="wrongImg" />
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
              <label className="locale">Unidade</label>
            </button>
          </Link>

          <Link to="/UniClienteExe">
            <button className="ICS6">
              <img className="statusRel" src={okImg} alt="okImg" />
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
              <label className="locale">Unidade</label>
            </button>
          </Link>

          <Link to="/UniClienteExe">
            <button className="ICS7">
              <img className="statusRel" src={wrongImg} alt="wrongImg" />
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
              <label className="locale">Unidade</label>
            </button>
          </Link>

          <Link to="/UniClienteExe">
            <button className="ICS8">
              <img className="statusRel" src={okImg} alt="okImg" />
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
              <label className="locale">Unidade</label>
            </button>
          </Link>

          <Link to="/UniClienteExe">
            <button className="ICS9">
              <img className="statusRel" src={wrongImg} alt="wrongImg" />
              <label className="FuncaoResultado">00,00%</label>
              <label className="FuncaoMeta">
                Meta:
                <br />
                0.00%
              </label>
              <hr className="hrICS" />
              <label className="FuncaoReal">
                Real:
                <br />
                0.00%
              </label>
              <label className="locale">Unidade</label>
            </button>
          </Link>
        </div>
        <div className="ICSgraph"></div>
      </div>
      <ProfileDireita />
      <aside className="calendarRelatorio">
        <h1 className="selectAnalise">Selecione:</h1>
        <form action="">
          <label className="SelectCliente" htmlFor="">
            Cliente/Unidade:
          </label>
          <select name="SelectIdCliente" className="SelectIdCliente">
            <option value="">Unidade</option>
            <option value="">Unidade</option>
            <option value="">Unidade</option>
            <option value="">Unidade</option>
          </select>
        </form>
        <form action="">
          <label className="SelectObserv" htmlFor="">
            Tipo de Observação:
          </label>
          <select name="SelectIdObserv" className="SelectIdObserv">
            <option value="">Unidade</option>
            <option value="">Unidade</option>
            <option value="">Unidade</option>
            <option value="">Unidade</option>
          </select>
          <label className="SelectDate">Periodo Analisado:</label>
        </form>

        <div className="calendarioAnalise">
          <Calendar calendarType="Hebrew" selectRange />
        </div>
      </aside>
      <SidebarMobile />
    </div>
  )
}

export default Relatorio
