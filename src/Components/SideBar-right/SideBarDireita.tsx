import { Link } from 'react-router-dom'
import '../../styles/components/SideBar-right/SideBarDireita.css'

function SideBarDireita() {
  return (
    <div>
      <aside className="MenuProfileDireita">
        <Link to="/FormularioCadastro">
          <button className="caddate">Dados Cadastrais</button>
        </Link>
        <Link to="/Unidades">
          <button className="contacts">Contatos da Unidade</button>
        </Link>
        <Link to="/Pessoas">
          <button className="people">Pessoas</button>
        </Link>
        <Link to="/Equipes">
          <button className="teams">Equipes</button>
        </Link>
        <Link to="/Gerencias">
          <button className="manage">Gerência</button>
        </Link>
        <Link to="/Atividades">
          <button className="activities">Atividades</button>
        </Link>
        <Link to="/Area">
          <button className="area">Área</button>
        </Link>
        <Link to="/Observacoes">
          <button className="comments">Observações</button>
        </Link>
        <Link to="/Relatorio">
          <button className="dashIcs">Dashboard ICS</button>
        </Link>
      </aside>
    </div>
  )
}

export default SideBarDireita
