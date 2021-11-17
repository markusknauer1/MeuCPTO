import React from 'react'
import ProfileDireita from '../../Components/ProfileDireita'
import SideBar from '../../Components/SideBar'
import SideBarDireita from '../../Components/SideBar-right/SideBarDireita'
import '../../styles/pages/MenuDireitoCss/area1.css'
import Modal from './MenuDireito-Modal/ModalCadArea'

import SidebarMobile from '../../Components/SideBar-right/SidebarMobile'

function Area() {
  return (
    <div className="HomePage">
      <div>
        <input
          className="fnamePadrao"
          placeholder="Pesquisar"
          type="text"
          id="fnameArea"
          name="fname"
        />
        <Modal />
      </div>
      <SideBar />
      <div className="page">
        <div className="filter1">
          <h4 className="subtPadrao1">DADOS CADASTRAIS / NOVO ÁREA:</h4>

          <h2 className="subtPadrao2">Local / Área</h2>
        </div>

        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="btnCodArea">
                      CÓD
                      <div>CÓD</div>
                    </th>
                    <th className="btnObserv">
                      Obs.
                      <div>Obs.</div>
                    </th>
                    <th className="btnLocalArea">
                      Local / Área
                      <div>Local / Área</div>
                    </th>
                    <th className="btnGerenResp">
                      Gerência / Responsável
                      <div>Gerência / Responsável</div>
                    </th>
                    <th className="btnMeta">
                      Meta
                      <div>Metas</div>
                    </th>
                    <th className="btnAtivo">
                      Ativo
                      <div>Ativo</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodArea">001</td>
                  <td className="tblObserv">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="tblLocalArea">Gerência</td>
                  <td className="tblGerenResp">Cliente</td>
                  <td className="tblMeta">
                    <i className="far fa-check-circle"></i>
                  </td>
                  <td className="tblStatusAtivo">
                    <i className="far fa-check-circle"></i>
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

export default Area
