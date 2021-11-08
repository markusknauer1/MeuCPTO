import React from 'react'
import { Link } from 'react-router-dom'
import ProfileDireita from '../../../Components/ProfileDireita'
import SideBar from '../../../Components/SideBar'
import SideBarDireita from '../../../Components/SideBar-right/SideBarDireita'
import '../../../styles/pages/SubMenuPages/pages-tiposDeobservaçoes/modalNovoTipoDeobservacao.css'

import Modal from '../pages-tiposDeobservaçoes/modal-tiposDeObservações/modalNovoGrupoDeQuestoes'
import * as TypIcons from 'react-icons/ti'
import SidebarGerencia from '../../../Components/SideBar-right/SidebarGerencia'

function tipoQualidadeDeObservacao() {
  return (
    <div className="HomePage">
      <Link to="/SubMenuTipoDeObservacao">
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
      <Modal />
      <SideBar />
      <div className="page">
        <div className="filter1">
          <div className="tittleGpObserv">
            <h2>Grupo de Questões - QUALIDADE DA OBSERVAÇÃO</h2>
          </div>
        </div>
        <div className="tabelaPadrao">
          <div className="container">
            <table>
              <tbody>
                <td className="TQOCod">1</td>
                <td className="TQOQuests">
                  <Link to="/TQOQuestoesReg">
                    <button className="btnMGUPermissoes">
                      <i className="fas fa-bars"></i>
                    </button>
                  </Link>
                  Questões
                </td>
                <td className="TQOGroupAnalise">Cuidado Ativo</td>
                <td className="TQOState">
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

export default tipoQualidadeDeObservacao
