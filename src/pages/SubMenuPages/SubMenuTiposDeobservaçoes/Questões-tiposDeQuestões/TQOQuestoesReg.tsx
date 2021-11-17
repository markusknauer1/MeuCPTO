import React from 'react'
import ProfileDireita from '../../../../Components/ProfileDireita'
import SideBar from '../../../../Components/SideBar'
import SideBarDireita from '../../../../Components/SideBar-right/SideBarDireita'

import * as TypIcons from 'react-icons/ti'

import { Link } from 'react-router-dom'
import SidebarMobile from '../../../../Components/SideBar-right/SidebarMobile'
function TQOQuestoesReg() {
  return (
    <div className="HomePage">
      <Link to="/tipoQualidadeDeObservacao">
        <button className="btnReturn">
          <TypIcons.TiArrowBackOutline />
        </button>
      </Link>
      <div>
        <input
          className="fCxPesquisa"
          placeholder="Pesquisar"
          type="text"
          id="fname7"
          name="fname"
        />
      </div>
      <SideBar />
      <div className="page">
        <div className="filter1">
          <h2 className="subtcad2">Questões de : Cuidado Ativo</h2>
        </div>
        <div className="tabelaPadrao">
          <div className="container">
            <table>
              <tbody>
                <td className="TQOQuestCod">1</td>

                <td className="TQOQuestGroupAnalise">
                  <button className="btnTQOAltInfo">
                    <i className="fas fa-pen"></i>{' '}
                  </button>
                  Estava importando os EPI's necessários para o local?...
                </td>
                <td className="TQOQuestQuests">
                  <label>1,00</label>
                </td>
                <td className="TQOQuestState">
                  <i className="far fa-check-circle"></i>
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ProfileDireita />
      <div className="buttonProfileDireita">
        <SideBarDireita />
      </div>
      <SidebarMobile />
    </div>
  )
}

export default TQOQuestoesReg
