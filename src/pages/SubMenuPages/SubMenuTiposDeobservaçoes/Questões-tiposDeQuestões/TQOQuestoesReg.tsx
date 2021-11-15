import React from 'react'
import ProfileDireita from '../../../../Components/ProfileDireita'
import SideBar from '../../../../Components/SideBar'
import SideBarDireita from '../../../../Components/SideBar-right/SideBarDireita'
import SidebarGerencia from '../../../../Components/SideBar-right/SidebarGerencia'

import * as TypIcons from 'react-icons/ti'

import { Link } from 'react-router-dom'
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
          className="fnameSubMenu"
          placeholder="Pesquisar"
          type="text"
          id="fname7"
          name="fname"
        />
      </div>
      <SideBar />
      <div className="page">
        <div className="filter1">
          <div className="tittleGpObserv">
            <h2>Questões de : Cuidado Ativo</h2>
          </div>
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
        <SidebarGerencia />
      </div>
    </div>
  )
}

export default TQOQuestoesReg
