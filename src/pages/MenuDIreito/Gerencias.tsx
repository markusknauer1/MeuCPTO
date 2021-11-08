import React from 'react'
import ProfileDireita from '../../Components/ProfileDireita'
import SideBar from '../../Components/SideBar'
import SideBarDireita from '../../Components/SideBar-right/SideBarDireita'
import '../../styles/pages/menuDireitoCss/gerencias.css'
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
          <div className="subtPadrao2">
            <h2>Cadastro de Gerências</h2>
          </div>
        </div>
        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="tblCod">
                      CÓD
                      <div>CÓD</div>
                    </th>
                    <th className="tblDescGeren">
                      Descrição / Gerência
                      <div>Descrição / Gerência</div>
                    </th>
                    <th className="tblUnidGer">
                      Unidade
                      <div>Unidade</div>
                    </th>
                    <th className="tblStatusGerencia">
                      Status
                      <div>Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="gerDesc">Descrição</td>
                  <td className="btnGerUni">Klabim</td>
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
      </div>
    </div>
  )
}

export default Gerencias

// <table>
//           <tr className="gerenciaRef1">
//             <td className="tblCod">CÓD</td>
//             <td className="tblDescGeren">Descrição / Gerência</td>
//             <td className="tblUnidGer">Unidade</td>
//             <td className="tblStatusGerencia">Status</td>
//           </tr>
//           </table>

//           <table className="gerenciaRef2">
//           <tr>
//           <td className="btnCod">001</td>
//             <td className="btnDescGeren">Equipe</td>
//             <td className="btnUnidGer">Gerência</td>
//             <td className="btnStatusGerencia"><i className="far fa-check-circle"></i></td>
//           </tr>
