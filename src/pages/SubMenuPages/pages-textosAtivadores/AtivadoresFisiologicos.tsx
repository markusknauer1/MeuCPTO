import ProfileDireita from '../../../Components/ProfileDireita'
import SideBar from '../../../Components/SideBar'
import SideBarDireita from '../../../Components/SideBar-right/SideBarDireita'
import Modal from './modal-textosAtivadores/ModalNovoAtivador'
import '../../../styles/pages/SubMenuPages/modal-textosAtivadores/pages-textosAtivadores/AtivadoresPadrao.css'

function AtivadoresFisiológico() {
  return (
    <div className="HomePage">
      <div>
        <input
          className="fnameSubMenu"
          placeholder="Pesquisar"
          type="text"
          id="fname7"
          name="fname"
        />
        <Modal />
      </div>
      <SideBar />
      <div className="page">
        <div className="filter1">
          <div className="subtPadrao2">
            <h2>Ativadores: Fisiológicos</h2>
          </div>
        </div>
        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="tblActivPadrao1">
                      <div>CÓD</div>
                    </th>
                    <th className="tblActivPadrao2">
                      <div>Texto Ativador</div>
                    </th>
                    <th className="tblActivPadrao3">
                      <div>Observações/Aplicação</div>
                    </th>
                    <th className="tblActivPadrao4">
                      <div>Peso</div>
                    </th>
                    <th className="tblActivPadrao5">
                      <div>Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="tblActivPadrao6">001</td>
                  <td className="tblActivPadrao7">Sociais</td>
                  <td className="tblActivPadrao8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure iusto eius suscipit, repellat perferendis praesentium
                    obcaecati aliquid a recusandae alias dolorum mollitia?
                    Eligendi doloribus quia amet earum numquam, assumenda
                    consequuntur.
                  </td>
                  <td className="tblActivPadrao9">0,00</td>
                  <td className="tblActivPadrao10"></td>
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

export default AtivadoresFisiológico
