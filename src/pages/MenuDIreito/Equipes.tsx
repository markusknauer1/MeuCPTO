import React from 'react'
import ProfileDireita from '../../Components/ProfileDireita'
import SideBar from '../../Components/SideBar'
import SideBarDireita from '../../Components/SideBar-right/SideBarDireita'
import '../../styles/pages/pessoas.css'
import SidebarMobile from '../../Components/SideBar-right/SidebarMobile'

import Modal from './MenuDireito-Modal/ModalCadEquipe'
import '../../styles/pages/menuDireitoCss/equipes.css'

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
          <div className="subtPadrao2">
            <h2>Equipes</h2>
          </div>
        </div>

        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="tblcodEquipe">
                      CÓD
                      <div>CÓD</div>
                    </th>
                    <th className="tblequipDesc">
                      Descrição / Equipe
                      <div>Descrição / Equipe</div>
                    </th>
                    <th className="tblEquipGer">
                      Gerência Responsável
                      <div>Gerência Responsável</div>
                    </th>
                    <th className="tblEquipCLient">
                      Cliente
                      <div>Cliente</div>
                    </th>
                    <th className="tblEquipState">
                      Status
                      <div>Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Descriçao / equipe</td>
                  <td className="btnMail">Gerência</td>
                  <td className="btnFunc">Klabim</td>
                  <td className="btnMetas">
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
