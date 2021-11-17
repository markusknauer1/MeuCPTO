import React from 'react'
import ProfileDireita from '../../Components/ProfileDireita'
import SideBar from '../../Components/SideBar'
import SideBarDireita from '../../Components/SideBar-right/SideBarDireita'
import SidebarMobile from '../../Components/SideBar-right/SidebarMobile'
import '../../styles/pages/MenuDireitoCss/unidades.css'

function Unidades() {
  return (
    <div className="HomePage">
      <div>
        <input
          className="fnamePadrao"
          placeholder="Pesquisar"
          type="text"
          id="fnameUnidade"
          name="fname"
        />

        <button className="buttonModalPadrao1" type="button">
          <h2>Nova Unidade</h2>
        </button>
      </div>
      <SideBar />
      <div className="page">
        <div className="filter1">
          <h4 className="subtPadrao1">DADOS CADASTRAIS / NOVA UNIDADE:</h4>

          <h2 className="subtPadrao2">Unidades:</h2>
        </div>
        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="tblCodUni">
                      CÓD
                      <div>CÓD</div>
                    </th>
                    <th className="tblUni">
                      Unidades
                      <div>Unidades</div>
                    </th>
                    <th className="tblStatusUnidades">
                      Status
                      <div>Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnUni">Unidade</td>
                  <td className="btnStatusUnidades">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnUni">Unidade</td>
                  <td className="btnStatusUnidades">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnUni">Unidade</td>
                  <td className="btnStatusUnidades">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnUni">Unidade</td>
                  <td className="btnStatusUnidades">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnUni">Unidade</td>
                  <td className="btnStatusUnidades">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnUni">Unidade</td>
                  <td className="btnStatusUnidades">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnUni">Unidade</td>
                  <td className="btnStatusUnidades">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnUni">Unidade</td>
                  <td className="btnStatusUnidades">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnUni">Unidade</td>
                  <td className="btnStatusUnidades">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnUni">Unidade</td>
                  <td className="btnStatusUnidades">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnUni">Unidade</td>
                  <td className="btnStatusUnidades">
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

export default Unidades
