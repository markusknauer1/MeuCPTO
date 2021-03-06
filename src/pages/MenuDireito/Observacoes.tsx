import React from 'react'
import ProfileDireita from '../../Components/ProfileDireita'
import SideBar from '../../Components/SideBar'
import SideBarDireita from '../../Components/SideBar-right/SideBarDireita'
import '../../styles/pages/MenuDireito/observacoes.css'
import SidebarMobile from '../../Components/SideBar-right/SidebarMobile'
import ModalCadObservacoes from './MenuDireito-Modal/ModalCadObservacoes'

function Observacoes() {
  return (
    <div className="HomePage">
      <div>
        <input
          className="fCxPesquisa"
          placeholder="Pesquisar"
          type="text"
          id="fnameObs"
          name="fname"
        />
        <ModalCadObservacoes />
      </div>

      <SideBar />
      <div className="page">
        <div className="filter1">
          <h4 className="subtPadrao1">DADOS CADASTRAIS / NOVA PESSOA:</h4>

          <h2 className="subtPadrao2">Funções e Permissões de obsevação</h2>
        </div>

        <div className="tabelaPadrao">
          <section className="">
            <div className="container">
              <table>
                <thead>
                  <tr className="header">
                    <th className="ObsCod">
                      <div>CÓD</div>
                    </th>
                    <th className="ObsObservador">
                      <div>Observação</div>
                    </th>
                    <th className="ObsDescFun">
                      <div>Descrição da função</div>
                    </th>
                    <th className="ObsStatus">
                      <div>Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <td className="btnObsCod">001</td>
                  <td className="btnObs">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="BtnDescFun">Nome do Funcionário</td>
                  <td className="btnStatus">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnObsCod">001</td>
                  <td className="btnObs">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="BtnDescFun">Nome do Funcionário</td>
                  <td className="btnStatus">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnObsCod">001</td>
                  <td className="btnObs">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="BtnDescFun">Nome do Funcionário</td>
                  <td className="btnStatus">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnObsCod">001</td>
                  <td className="btnObs">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="BtnDescFun">Nome do Funcionário</td>
                  <td className="btnStatus">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnObsCod">001</td>
                  <td className="btnObs">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="BtnDescFun">Nome do Funcionário</td>
                  <td className="btnStatus">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnObsCod">001</td>
                  <td className="btnObs">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="BtnDescFun">Nome do Funcionário</td>
                  <td className="btnStatus">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnObsCod">001</td>
                  <td className="btnObs">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="BtnDescFun">Nome do Funcionário</td>
                  <td className="btnStatus">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnObsCod">001</td>
                  <td className="btnObs">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="BtnDescFun">Nome do Funcionário</td>
                  <td className="btnStatus">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnObsCod">001</td>
                  <td className="btnObs">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="BtnDescFun">Nome do Funcionário</td>
                  <td className="btnStatus">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnObsCod">001</td>
                  <td className="btnObs">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="BtnDescFun">Nome do Funcionário</td>
                  <td className="btnStatus">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnObsCod">001</td>
                  <td className="btnObs">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="BtnDescFun">Nome do Funcionário</td>
                  <td className="btnStatus">
                    <i className="far fa-check-circle"></i>
                  </td>
                </tbody>
                <tbody>
                  <td className="btnObsCod">001</td>
                  <td className="btnObs">
                    <i className="fas fa-bars"></i>
                  </td>
                  <td className="BtnDescFun">Nome do Funcionário</td>
                  <td className="btnStatus">
                    <i className="far fa-check-circle"></i>
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

export default Observacoes
