import ProfileDireita from '../../../Components/ProfileDireita'
import SideBar from '../../../Components/SideBar'
import SideBarDireita from '../../../Components/SideBar-right/SideBarDireita'
import SidebarMobile from '../../../Components/SideBar-right/SidebarMobile'
import '../../../styles/pages/SubMenuPages/SubMenuEmpresas/SubMenuEmpresas.css'
import Modal from './modal-Empresas/AlterarRegistroEmpresas'

function SubMenuEmpresas() {
  return (
    <div className="HomePage">
      <div>
        <input
          className="fCxPesquisa"
          placeholder="Pesquisar"
          type="text"
          id="fname1"
          name="fname"
        />
        <Modal />
      </div>
      <SideBar />
      <div className="page">
        <div className="filter1">
          <h2 className="subtPadrao2">Cadastro Geral de Empresas</h2>
        </div>
        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="tblSubEmpresaCod">
                      <div>Código</div>
                    </th>
                    <th className="tblSubEmpresaEmpresa">
                      <div>Empresa</div>
                    </th>
                    <th className="tblSubEmpresaAtivo">
                      <div>Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubEmpresaCod">01</td>
                  <td className="btnSubEmpresaOBS">Humanit-TI</td>
                  <td className="btnSubEmpresaAtivo">
                    <i className="fas fa-check-circle"></i>
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
      <SidebarMobile />
    </div>
  )
}

export default SubMenuEmpresas
