import Modal from '../modal-textosAtivadores/ModalNovoAtivador'
import '../../../../styles/pages/SubMenuPages/SubMenuTextosAtivadores/pages-textosAtivadores/AtivadoresPadrao.css'
import SideBar from '../../../../Components/SideBar'
import ProfileDireita from '../../../../Components/ProfileDireita'
import SideBarDireita from '../../../../Components/SideBar-right/SideBarDireita'
import { useHistory } from 'react-router-dom'
import * as TypIcons from 'react-icons/ti'
import SidebarMobile from '../../../../Components/SideBar-right/SidebarMobile'

function AtivadoresCognitivos() {
  let history = useHistory()
  return (
    <div className="HomePage">
      <div>
        <input
          className="fnamePadrao"
          placeholder="Pesquisar"
          type="text"
          id="fname7"
          name="fname"
        />
        <button
          className="btnReturn"
          type="button"
          onClick={() => history.goBack()}
        >
          <TypIcons.TiArrowBackOutline />
        </button>
        <Modal />
      </div>
      <SideBar />
      <div className="page">
        <div className="filter1">
          <h2 className="subtPadrao2">Ativadores: Cognitivos</h2>
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
      <SidebarMobile />
    </div>
  )
}

export default AtivadoresCognitivos
