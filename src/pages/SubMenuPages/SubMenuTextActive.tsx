import React from 'react'
import ProfileDireita from '../../Components/ProfileDireita'
import SideBar from '../../Components/SideBar'
import SideBarDireita from '../../Components/SideBar-right/SideBarDireita'
import SidebarGerencia from '../../Components/SideBar-right/SidebarGerencia'
import '../../styles/pages/SubMenuPages/SubMenuTextActive.css'
import Modal from './pages-textosAtivadores/modal-textosAtivadores/ModalNovoGrupo'

function SubMenuTextActive() {
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
            <h2>Cadastro de Textos Ativadores</h2>
          </div>
        </div>
        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="btnCodActive">
                      CÓD
                      <div>CÓD</div>
                    </th>
                    <th className="btnActive">
                      Grupos de Ativadores
                      <div>Grupos de Ativadores</div>
                    </th>
                    <th className="btnStatusActive">
                      Observações
                      <div>Observações</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="tblCodActive">
                    001 <button className="SubMTACod"> Ver ativadores</button>
                  </td>
                  <td className="tblActive">Sociais</td>
                  <td className="tblStatusActive">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure iusto eius suscipit, repellat perferendis praesentium
                    obcaecati aliquid a recusandae alias dolorum mollitia?
                    Eligendi doloribus quia amet earum numquam, assumenda
                    consequuntur.
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodActive">
                    001 <button className="SubMTACod"> Ver ativadores</button>
                  </td>
                  <td className="tblActive">Psicólogicos</td>
                  <td className="tblStatusActive">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure iusto eius suscipit, repellat perferendis praesentium
                    obcaecati aliquid a recusandae alias dolorum mollitia?
                    Eligendi doloribus quia amet earum numquam, assumenda
                    consequuntur.
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodActive">
                    001 <button className="SubMTACod"> Ver ativadores</button>
                  </td>
                  <td className="tblActive">Fisiológicos</td>
                  <td className="tblStatusActive">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure iusto eius suscipit, repellat perferendis praesentium
                    obcaecati aliquid a recusandae alias dolorum mollitia?
                    Eligendi doloribus quia amet earum numquam, assumenda
                    consequuntur.
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodActive">
                    001 <button className="SubMTACod"> Ver ativadores</button>
                  </td>
                  <td className="tblActive">Cognitivos</td>
                  <td className="tblStatusActive">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure iusto eius suscipit, repellat perferendis praesentium
                    obcaecati aliquid a recusandae alias dolorum mollitia?
                    Eligendi doloribus quia amet earum numquam, assumenda
                    consequuntur.
                  </td>
                </tbody>
                <tbody>
                  <td className="tblCodActive">
                    001 <button className="SubMTACod"> Ver ativadores</button>
                  </td>
                  <td className="tblActive">Pessoal</td>
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
        <SidebarGerencia />
      </div>
    </div>
  )
}

export default SubMenuTextActive
