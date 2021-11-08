import ProfileDireita from '../../../Components/ProfileDireita'
import SideBar from '../../../Components/SideBar'
import SideBarDireita from '../../../Components/SideBar-right/SideBarDireita'
import Modal from '../pages-textosAtivadores/modal-textosAtivadores/ModalNovoAtivador'

function AtivadoresSocias() {
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
            <h2>Ativadores: Sociais</h2>
          </div>
        </div>
        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="btnCodActivSocial">
                      CÓD
                      <div>CÓD</div>
                    </th>
                    <th className="btnActivSocial">
                      Texto Ativador
                      <div>Grupos de Ativadores</div>
                    </th>
                    <th className="btnObsActivSocial">
                      Observações/aplicação
                      <div>Observações/aplicação</div>
                    </th>
                    <th className="btnPesoActivSocial">
                      Peso
                      <div>Peso</div>
                    </th>
                    <th className="btnStatusActivSocial">
                      Status
                      <div>Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="tblCodActive">001 - Ver ativadores</td>
                  <td className="tblActive">Sociais</td>
                  <td className="tblStatusActive">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure iusto eius suscipit, repellat perferendis praesentium
                    obcaecati aliquid a recusandae alias dolorum mollitia?
                    Eligendi doloribus quia amet earum numquam, assumenda
                    consequuntur.
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

export default AtivadoresSocias
