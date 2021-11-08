import ProfileDireita from '../../Components/ProfileDireita'
import SideBar from '../../Components/SideBar'
import SideBarDireita from '../../Components/SideBar-right/SideBarDireita'
import Modal from '../MenuDIreito/MenuDireito-Modal/ModalCadPessoa'
import '../../styles/pages/SubMenuPages/SubMenuEmpresas.css'
import SidebarGerencia from '../../Components/SideBar-right/SidebarGerencia'

function SubMenuEmpresas() {
  return (
    <div className="HomePage">
      <div>
        <input
          className="fnameSubMenu"
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
          <div className="subtPadrao2">
            <h2>Cadastro Geral de Empresas</h2>
          </div>
        </div>
        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="tblSubEmpresaCod">
                      CÓD
                      <div>CÓD</div>
                    </th>
                    <th className="tblSubEmpresaPessoacod">
                      Pessoa
                      <div>Pessoa</div>
                    </th>
                    <th className="tblSubEmpresaAtivo">
                      Ativo
                      <div>Ativo</div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <td className="btnSubEmpresaCod">001</td>
                  <td className="btnSubEmpresaOBS">João da silva</td>
                  <td className="btnSubEmpresaAtivo"></td>
                </tbody>
              </table>
            </div>
          </section>
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

export default SubMenuEmpresas
