import ProfileDireita from '../Components/ProfileDireita'
import SideBar from '../Components/SideBar'
import SideBarDireita from '../Components/SideBar-right/SideBarDireita'
import SidebarMobile from '../Components/SideBar-right/SidebarMobile'
import '../styles/pages/pessoas.css'
import Modal from './MenuDIreito/MenuDireito-Modal/ModalCadPessoa'

function Pessoas() {
  return (
    <div className="HomePage">
      <div>
        <input
          className="fnamePadrao"
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
          <h4 className="subtPadrao1">DADOS CADASTRAIS / NOVA PESSOA:</h4>
          <div className="subtPadrao2">
            <h2>Gerentes/Operadores</h2>
          </div>
        </div>
        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="tblPessoacod">
                      CÓD
                      <div>CÓD</div>
                    </th>
                    <th className="tblPessoaObservador">
                      Observador
                      <div>Observador</div>
                    </th>
                    <th className="tbtPessoalogin">
                      E-Mail/login
                      <div>E-Mail/login</div>
                    </th>
                    <th className="tblPessoaFuncao">
                      Função
                      <div>Função</div>
                    </th>
                    <th className="tblPessoaMetas">
                      Metas
                      <div>Metas</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>{' '}
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>{' '}
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>{' '}
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>{' '}
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>{' '}
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>{' '}
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>{' '}
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
                  <td className="btnMetas">
                    <button className="action">
                      <i className="fas fa-bars"></i>
                    </button>
                  </td>
                </tbody>{' '}
                <tbody>
                  <td className="btnCod">001</td>
                  <td className="btnOBS">Nome do Funcionário</td>
                  <td className="btnMail">cpto@cpto.com.br</td>
                  <td className="btnFunc">Supervisão</td>
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

export default Pessoas
