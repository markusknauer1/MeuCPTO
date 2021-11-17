import React from 'react'
import ProfileDireita from '../../Components/ProfileDireita'
import SideBar from '../../Components/SideBar'
import SideBarDireita from '../../Components/SideBar-right/SideBarDireita'
import '../../styles/pages/MenuDireitoCss/gerencias.css'
import SidebarMobile from '../../Components/SideBar-right/SidebarMobile'
import ModalCadGerencia from './MenuDireito-Modal/ModalCadGerencia'

function Gerencias() {
  return (
    <div className="HomePage">
      <div>
        <input
          className="fnamePadrao"
          placeholder="Pesquisar"
          type="text"
          id="fnameGerencia"
          name="fname"
        />
        <ModalCadGerencia />
      </div>
      <SideBar />
      <div className="page">
        <div className="filter1">
          <h4 className="subtPadrao1">DADOS CADASTRAIS / NOVA GERÊNCIA:</h4>

          <h2 className="subtPadrao2">Cadastro de Gerências</h2>
        </div>

        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="tblTtlCod">
                      <div>CÓD</div>
                    </th>
                    <th className="tblTtlDescGeren">
                      <div>Descrição / Gerência</div>
                    </th>
                    <th className="tblTtlUnidGer">
                      <div>Unidade</div>
                    </th>
                    <th className="tblTtlStatusGerencia">
                      <div>Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="tblGerCod">001</td>
                  <td className="tblGerDesc">Descrição</td>
                  <td className="tblGerUni">Klabim</td>
                  <td className="tblGerStatus">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblGerCod">001</td>
                  <td className="tblGerDesc">Descrição</td>
                  <td className="tblGerUni">Klabim</td>
                  <td className="tblGerStatus">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblGerCod">001</td>
                  <td className="tblGerDesc">Descrição</td>
                  <td className="tblGerUni">Klabim</td>
                  <td className="tblGerStatus">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblGerCod">001</td>
                  <td className="tblGerDesc">Descrição</td>
                  <td className="tblGerUni">Klabim</td>
                  <td className="tblGerStatus">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblGerCod">001</td>
                  <td className="tblGerDesc">Descrição</td>
                  <td className="tblGerUni">Klabim</td>
                  <td className="tblGerStatus">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblGerCod">001</td>
                  <td className="tblGerDesc">Descrição</td>
                  <td className="tblGerUni">Klabim</td>
                  <td className="tblGerStatus">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblGerCod">001</td>
                  <td className="tblGerDesc">Descrição</td>
                  <td className="tblGerUni">Klabim</td>
                  <td className="tblGerStatus">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="tblGerCod">001</td>
                  <td className="tblGerDesc">Descrição</td>
                  <td className="tblGerUni">Klabim</td>
                  <td className="tblGerStatus">
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

export default Gerencias
