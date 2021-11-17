import ProfileDireita from '../../../Components/ProfileDireita'
import SideBar from '../../../Components/SideBar'
import SideBarDireita from '../../../Components/SideBar-right/SideBarDireita'
import Modal from '../../MenuDIreito/MenuDireito-Modal/ModalCadPessoa'
import '../../../styles/pages/SubMenuPages/SubMenuPessoas/SubMenuPessoas.css'
import SidebarMobile from '../../../Components/SideBar-right/SidebarMobile'

function SubMenuPessoas() {
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
          <h2 className="subtcad2">Cadastro Geral de Pessoas</h2>
        </div>
        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="tblSubCod">
                      CÓD
                      <div>CÓD</div>
                    </th>
                    <th className="tblSubPessoacod">
                      Pessoa
                      <div>Pessoa</div>
                    </th>
                    <th className="tblSubMail">
                      E-Mail/login
                      <div>E-Mail/login</div>
                    </th>
                    <th className="tblSubMetas">
                      Metas
                      <div>Metas</div>
                    </th>
                    <th className="tblSubAtivo">
                      Ativo
                      <div>Ativo</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnSubCod">001</td>
                  <td className="btnSubOBS">João da silva</td>
                  <td className="btnSubMail">Alex@humanit-ti.com</td>
                  <td className="btnSubMetas">
                    <button className="btnSMPMetas">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                  <td className="btnSubAtivo">
                    <button className="btnSMPAtivo">
                      <i className="fas fa-check-circle"></i>
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
      <SidebarMobile />
    </div>
  )
}

export default SubMenuPessoas
