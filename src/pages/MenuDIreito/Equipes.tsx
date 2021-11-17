import React from 'react'
import ProfileDireita from '../../Components/ProfileDireita'
import SideBar from '../../Components/SideBar'
import SideBarDireita from '../../Components/SideBar-right/SideBarDireita'
import SidebarMobile from '../../Components/SideBar-right/SidebarMobile'

import Modal from './MenuDireito-Modal/ModalCadEquipe'
import '../../styles/pages/MenuDireitoCss/equipes.css'

function Equipes() {
  return (
    <div className="HomePage">
      <div>
        <input
          className="fnamePadrao"
          placeholder="Pesquisar"
          type="text"
          id="fnameEquipes"
          name="fname"
        />
        <Modal />
      </div>
      <SideBar />
      <div className="page">
        <div className="filter1">
          <h4 className="subtPadrao1">DADOS CADASTRAIS / NOVA EQUIPE:</h4>

          <h2 className="subtPadrao2">Equipes</h2>
        </div>

        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="tblTtlcodEquipe">
                      CÓD
                      <div>CÓD</div>
                    </th>
                    <th className="tblTtlequipDesc">
                      Descrição / Equipe
                      <div>Descrição / Equipe</div>
                    </th>
                    <th className="tblTtlEquipGer">
                      Gerência Responsável
                      <div>Gerência Responsável</div>
                    </th>
                    <th className="tblTtlEquipCLient">
                      Cliente
                      <div>Cliente</div>
                    </th>
                    <th className="tblTtlEquipState">
                      Status
                      <div>Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="tblEquipesCod">001</td>
                  <td className="tblEquipesOBS">Descriçao / equipe</td>
                  <td className="tblEquipesMail">Gerência</td>
                  <td className="tblEquipesFunc">Klabim</td>
                  <td className="tblEquipesMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      <ProfileDireita />
      <div className="buttonProfileDireita">
        <SideBarDireita />
        <SidebarMobile />
      </div>
    </div>
  )
}

export default Equipes
