import ProfileDireita from '../../Components/ProfileDireita'
import SideBar from '../../Components/SideBar'
import SideBarDireita from '../../Components/SideBar-right/SideBarDireita'
import '../../styles/pages/SubMenuPages/SubMenuTipoDeObservacao.css'
import SidebarGerencia from '../../Components/SideBar-right/SidebarGerencia'
import { Link } from 'react-router-dom'
import Modal from '../SubMenuPages/pages-tiposDeobservaçoes/modal-tiposDeObservações/modalNovoTipoDeObservacao'

function SubMenuTipoDeObservacao() {
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
            <h2>Tipos de Observações</h2>
          </div>
        </div>
        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="tblSubTipObsCod">
                      <div>CÓD</div>
                    </th>
                    <th className="tblSubTipObsPessoad">
                      <div>Descrição da Observação</div>
                    </th>
                    <th className="tblSubTipObsfator1">
                      <div>fator(+)</div>
                    </th>
                    <th className="tblSubTipObsfator2">
                      <div>fator(-)</div>
                    </th>
                    <th className="tblSubTipObsFatorN">
                      <div>fator(N)</div>
                    </th>
                    <th className="tblSubTipObsPermissao">
                      <div className="tblPermitir">Permitir NA</div>
                    </th>
                    <th className="tblSubTipObsAtivo">
                      <div>Ativo</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="btnSubTipObsCod">
                    <Link to="/tipoQualidadeDeObservacao">
                      <button className="btnPageGroupQuest">
                        001{' '}
                        <label className="GroupTipObs">GRUPO DE QUESTÕES</label>
                      </button>
                    </Link>
                  </td>
                  <td className="btnSubTipObsQualiObs">
                    QUALIDADE DA OBSERVAÇÃO
                  </td>
                  <td className="btnSubTipObsfator1">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsfator2">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsfatorN">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsPermissao">
                    <label htmlFor=""></label>
                  </td>
                  <td className="btnSubAtivo">
                    <label htmlFor="">
                      <i className="far fa-check-circle"></i>
                    </label>
                  </td>
                </tbody>

                <tbody>
                  <td className="btnSubTipObsCod">
                    <button className="btnPageGroupQuest">
                      001{' '}
                      <label className="GroupTipObs">GRUPO DE QUESTÕES</label>
                    </button>
                  </td>

                  <td className="btnSubTipObsQualiObs">
                    OBSERVAÇÃO COMPORTAMENTAL
                  </td>
                  <td className="btnSubTipObsfator1">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsfator2">
                    <label htmlFor="">13</label>
                  </td>
                  <td className="btnSubTipObsfatorN">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsPermissao">
                    <label htmlFor=""></label>
                  </td>
                  <td className="btnSubAtivo">
                    <label htmlFor="">
                      <i className="far fa-check-circle"></i>
                    </label>
                  </td>
                </tbody>

                <tbody>
                  <td className="btnSubTipObsCod">
                    <button className="btnPageGroupQuest">
                      001{' '}
                      <label className="GroupTipObs">GRUPO DE QUESTÕES</label>
                    </button>
                  </td>

                  <td className="btnSubTipObsQualiObs">OCORRÊNCIAS</td>
                  <td className="btnSubTipObsfator1">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsfator2">
                    <label htmlFor="">13</label>
                  </td>
                  <td className="btnSubTipObsfatorN">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsPermissao">
                    <label htmlFor=""></label>
                  </td>
                  <td className="btnSubAtivo">
                    <label htmlFor="">
                      <i className="far fa-check-circle"></i>
                    </label>
                  </td>
                </tbody>

                <tbody>
                  <td className="btnSubTipObsCod">
                    <button className="btnPageGroupQuest">
                      001{' '}
                      <label className="GroupTipObs">GRUPO DE QUESTÕES</label>
                    </button>
                  </td>

                  <td className="btnSubTipObsQualiObs">
                    DIÁLOGO DIÁRIO DE SEGURANÇA (DDS)
                  </td>
                  <td className="btnSubTipObsfator1">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsfator2">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsfatorN">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsPermissao">
                    <label htmlFor=""></label>
                  </td>
                  <td className="btnSubAtivo">
                    <label htmlFor="">
                      <i className="far fa-check-circle"></i>
                    </label>
                  </td>
                </tbody>

                <tbody>
                  <td className="btnSubTipObsCod">
                    <button className="btnPageGroupQuest">
                      001{' '}
                      <label className="GroupTipObs">GRUPO DE QUESTÕES</label>
                    </button>
                  </td>

                  <td className="btnSubTipObsQualiObs">NOVA OBSERVAÇÃO</td>
                  <td className="btnSubTipObsfator1">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsfator2">
                    <label htmlFor="">15</label>
                  </td>
                  <td className="btnSubTipObsfatorN">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsPermissao">
                    <label htmlFor=""></label>
                  </td>
                  <td className="btnSubAtivo">
                    <label htmlFor="">
                      <i className="far fa-check-circle"></i>
                    </label>
                  </td>
                </tbody>

                <tbody>
                  <td className="btnSubTipObsCod">
                    <button className="btnPageGroupQuest">
                      001{' '}
                      <label className="GroupTipObs">GRUPO DE QUESTÕES</label>
                    </button>
                  </td>

                  <td className="btnSubTipObsQualiObs">AÇAO JTI</td>
                  <td className="btnSubTipObsfator1">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsfator2">
                    <label htmlFor="">13</label>
                  </td>
                  <td className="btnSubTipObsfatorN">
                    <label htmlFor="">1</label>
                  </td>
                  <td className="btnSubTipObsPermissao">
                    <label htmlFor=""></label>
                  </td>
                  <td className="btnSubAtivo">
                    <label htmlFor="">
                      <i className="far fa-check-circle"></i>
                    </label>
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

export default SubMenuTipoDeObservacao
