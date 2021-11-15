import { Link } from 'react-router-dom'
import ProfileDireita from '../../../Components/ProfileDireita'
import SideBar from '../../../Components/SideBar'
import SidebarMobile from '../../../Components/SideBar-right/SidebarMobile'
import '../../../styles/pages/observCpto.css'
import InfoUnidade from './InfoUnidade'

function ObservCpto() {
  return (
    <div className="HomePage">
      <i className="icon-search"></i>
      <input
        className="fnameObservCpto"
        placeholder="Pesquisar"
        type="text"
        id="fname1"
        name="fname"
      />

      <SideBar />
      <div className="page">
        {' '}
        <div>
          <h4 className="subtObservCPTO1"> RELATÓRIO / UNIDADES</h4>
          <h2 className="subtObservCPTO2">Observação Comportamental</h2>
        </div>
        <div>
          <button className="observComp">
            <label htmlFor="">Comportamento Seguro</label>
            <label htmlFor="" className="indiceTotal">
              100,00%
            </label>
          </button>

          <h3 className="subtObservCPTO3">Detalhes da Observação</h3>
          <label htmlFor="" className="filterList">
            {' '}
            filtro:
          </label>
          <Link to="">
            <button className="filterList1">
              <i className="far fa-laugh-beam"></i>
            </button>
          </Link>
          <Link to="">
            <button className="filterList2">
              <i className="far fa-meh"></i>
            </button>
          </Link>
          <Link to="">
            <button className="filterList3">
              <i className="far fa-frown"></i>
            </button>
          </Link>
        </div>
        <div className="ObservFeitas">
          <table>
            <tr className="TittleObservCpto1">
              <label className="btnGroup">Grupo</label>
              <label className="btnQuest">Questão</label>
              <label className="btnActivit">Atividade</label>
            </tr>
          </table>

          <table className="TittleObservCpto2">
            <tr>
              <td className="tblObsCod">001</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">0110</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">1001</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">010</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">001</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">001</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">0100</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">001</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">001</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">001</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">001</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">0001</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">010101</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">00110</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">00011</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">0101010</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">1001010</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">10101</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
            <tr>
              <td className="tblObsCod">010101</td>
              <td className="tblGroup">TESTE</td>
              <td className="tblQuest">TESTE</td>
              <td className="tblActivit">Gerência</td>
              <td className="tblFilter">
                <i className="far fa-laugh-beam"></i>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <ProfileDireita />
      <InfoUnidade />
      <SidebarMobile />
    </div>
  )
}

export default ObservCpto
