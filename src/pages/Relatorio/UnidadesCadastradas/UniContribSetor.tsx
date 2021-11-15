import { useHistory } from 'react-router-dom'
import ProfileDireita from '../../../Components/ProfileDireita'
import SideBar from '../../../Components/SideBar'
import '../../../styles/pages/ModalObservaçoes/UniClienteExe.css'
import * as TypIcons from 'react-icons/ti'

import okImg from '../../../Images/ok.svg'
import GraphImg from '../../../Images/Graph.svg'
import wrongImg from '../../../Images/wrong.svg'
import logoHumaniTI from '../../../Images/LogoHumani-TI.svg'
import Calendar from 'react-calendar'
import SidebarMobile from '../../../Components/SideBar-right/SidebarMobile'
import Modal from '../ModalObservações/ModalObsUnidades'

function UniContribSetor() {
  let history = useHistory()
  return (
    <div className="HomePage">
      <SideBar />
      <button
        className="btnReturn"
        type="button"
        onClick={() => history.goBack()}
      >
        <TypIcons.TiArrowBackOutline />
      </button>
      <div className="page">
        <div className="filter1">
          <h4 className="subtRel1"> RELATÓRIO / UNIDADES</h4>
          <h2 className="subtRel2">Humanit-TI</h2>
          <img className="logoK" src={logoHumaniTI} alt="" />
          <label className="subtRel3">Observações realizadas: 0</label>
        </div>
        <div className="tabelaPadraoICS">
          <button className="UniClienteICS">
            <label htmlFor="" className="tittleICS">
              ICS
            </label>
            <label className="FuncaoResultado">00,00%</label>
            <label className="FuncaoMeta">
              Meta:
              <br />
              0.00%
            </label>
            <hr className="hr" />
            <label className="FuncaoReal">
              Real:
              <br />
              0.00%
            </label>
          </button>

          <button className="UniClienteProAtivo">
            <label htmlFor="" className="tittleProativo">
              ProAtivo
            </label>
            <label className="FuncaoResultado">00,00%</label>
            <label className="FuncaoMeta">
              Meta:
              <br />
              0.00%
            </label>
            <hr className="hr" />
            <label className="FuncaoReal">
              Real:
              <br />
              0.00%
            </label>
          </button>

          <button className="ICSUnidadegraph">
            <label htmlFor="" className="tittleICSRel">
              Incidência de Ativadores da Unidade no mês
            </label>
          </button>
        </div>

        <div className="cxLegenda">
          <label htmlFor="" className="lgLegenda">
            Legenda:
          </label>
          <button className="lgAcima">
            <img className="okImg" src={okImg} alt="" />{' '}
            <label className="lbllgAcima">Acima da Média</label>
          </button>
          <button className="lgMedia">
            <img className="GraphImg" src={GraphImg} alt="" /> Média
          </button>
          <button className="lgAbaixo">
            <img className="wrongImg" src={wrongImg} alt="" /> Abaixo da Média
          </button>
        </div>
      </div>
      <ProfileDireita />
      <aside className="calendarRelatorio">
        <h1 className="selectAnalise1">Resultado do IQO</h1>
        <h2 className="selectAnalise2">Índice de qualidade da observação</h2>
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
      <Modal />
      <SidebarMobile />
    </div>
  )
}

export default UniContribSetor
