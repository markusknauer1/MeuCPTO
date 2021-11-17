import '.././styles/components/sidebar.css'
import ProfileDireita from '../Components/ProfileDireita'
import SideBar from '../Components/SideBar'
import '../styles/pages/home.css'
import { Link } from 'react-router-dom'
import Calendar from '../Components/Calendar'

import accomplished from '../Images/ok.svg'
import wrong from '../Images/wrong.svg'
import pending from '../Images/pending.svg'
import SidebarMobile from '../Components/SideBar-right/SidebarMobile'

function Home() {
  return (
    <div className="HomePage">
      <form action="">
        <label className="SelectUnidade1" htmlFor="">
          Selecione a Unidade:
        </label>

        <select name="Empresas" className="SelectUnidade2">
          <option className="select" value="">
            Unidade
          </option>
          <option value="">Unidade</option>
          <option value="">Unidade</option>
          <option value="">Unidade</option>
        </select>
      </form>

      <SideBar />
      <div className="page">
        <h5 className="subtcad1">PÁGINA INICIAL</h5>
        <Link to="/Home">
          <label className="subtcad2">Metas para Março</label>
        </Link>

        <div></div>
        <div className="Metas">
          <Link to="/Home">
            <button className="metas1">
              <label htmlFor="" className="tittleMeta2">
                Qualidade da Observação:
              </label>
              <hr className="hrMeta1" />
              <label htmlFor="" className="estimativa">
                0
              </label>
              <label htmlFor="" className="realidade">
                3
              </label>
              <img src={pending} className="pending" alt="Concluida" />
              <label htmlFor="" className="Conclusao1">
                Pendente
              </label>
            </button>
          </Link>

          <Link to="/Home">
            <button className="metas2">
              <label className="tittleMeta">Observação Comportamental:</label>
              <hr className="hrMeta" />
              <label htmlFor="" className="estimativa">
                5
              </label>

              <label htmlFor="" className="realidade">
                5
              </label>
              <img src={accomplished} className="ConclusaoOk" alt="Concluida" />
              <label htmlFor="" className="Conclusao1">
                Concluída
              </label>
            </button>
          </Link>

          <Link to="/Home">
            <button className="metas3">
              <label className="tittleMeta">
                Diálogo Diário de Segurança(DDS):
              </label>
              <hr className="hrMeta" />
              <label htmlFor="" className="estimativa">
                1
              </label>
              <label htmlFor="" className="realidade">
                3
              </label>
              <img src={wrong} className="ConclusaoWrong" alt="Concluida" />
              <label htmlFor="" className="Conclusao2">
                Não Concluída
              </label>
            </button>
          </Link>
          <Link to="/Home">
            <button className="metas4">
              <label htmlFor="" className="tittleMeta2">
                Qualidade da Observação:
              </label>
              <hr className="hrMeta1" />
              <label htmlFor="" className="estimativa">
                0
              </label>
              <label htmlFor="" className="realidade">
                3
              </label>
              <img src={pending} className="pending" alt="Concluida" />
              <label htmlFor="" className="Conclusao1">
                Pendente
              </label>
            </button>
          </Link>
          <Link to="/Home">
            <button className="metas5">
              <label htmlFor="" className="tittleMeta2">
                Qualidade da Observação:
              </label>
              <hr className="hrMeta1" />
              <label htmlFor="" className="estimativa">
                0
              </label>
              <label htmlFor="" className="realidade">
                3
              </label>
              <img src={pending} className="pending" alt="Concluida" />
              <label htmlFor="" className="Conclusao1">
                Pendente
              </label>
            </button>
          </Link>

          <Link to="/Home">
            <button className="metas6">
              <label className="tittleMeta3 ">
                Resultado Geral
                <br /> do ICS:
              </label>
              <img src={pending} className="pending1" alt="Concluida" />
              <label htmlFor="" className="resultGeral">
                00,00%
              </label>
            </button>
          </Link>

          <Link to="/Home">
            <button className="metas7">
              <label className="tittleMeta3">
                Resultado Geral
                <br /> do ICS:
              </label>
              <img src={pending} className="pending1" alt="Concluida" />
              <label htmlFor="" className="resultGeral">
                00,00%
              </label>
            </button>
          </Link>
          <Link to="/Home">
            <button className="MetaHome">
              <label className="graph">
                Incidência de Ativadores da unidade no mês
              </label>
            </button>
          </Link>
        </div>
      </div>
      <ProfileDireita />
      <aside className="calendarHome">
        <div className="calendarioHome">
          <Calendar calendarType="Hebrew" selectRange />
        </div>
      </aside>

      <SidebarMobile />
    </div>
  )
}

export default Home
