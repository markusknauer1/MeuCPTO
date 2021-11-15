import { BrowserRouter, Switch, Route } from 'react-router-dom'

import index from './Components/Login/index'
import Home from './pages/Home'
import FormCad from './pages/FormularioCadastro'
import Pessoas from './pages/Pessoas'
import Relatorio from './pages/Relatorio/Relatorio'
import Observacoes from './pages/MenuDIreito/Observacoes'
import Equipes from './pages/MenuDIreito/Equipes'
import Gerencias from './pages/MenuDIreito/Gerencias'
import Unidades from './pages/MenuDIreito/Unidades'
import Atividades from './pages/MenuDIreito/Atividades'
import Area from './pages/MenuDIreito/Area'
import UniClienteExe from './pages/Relatorio/UnidadesCadastradas/UniClienteExe'
import UniClieSetor from './pages/Relatorio/UnidadesCadastradas/UniClieSetor'
import MesSetor from './pages/Relatorio/UnidadesCadastradas/MesSetor'
import UniContribSetor from './pages/Relatorio/UnidadesCadastradas/UniContribSetor'
import ObservCpto from './pages/Relatorio/DetalhesDaObservação/ObservCpto'
import SubMenuTextActive from './pages/SubMenuPages/SubMenuTextosAtivadores/SubMenuTextosAtivadores'
import SubMenuPessoas from './pages/SubMenuPages/SubMenuPessoas/SubMenuPessoas'
import SubMenuEmpresas from './pages/SubMenuPages/SubMenuEmpresas/SubMenuEmpresas'
import SubMenuTipoDeObservacao from './pages/SubMenuPages/SubMenuTiposDeobservaçoes/SubMenuTipoDeObservacao'
import SubMenuGruposUsuarios from './pages/SubMenuPages/SubMenuGruposDeUsuario/SubMenuGruposUsuarios'
import PermissoesDeacessoAoSistema from './pages/SubMenuPages/SubMenuGruposDeUsuario/pages-GruposDeUsuario/PermissoesDeAcessoAoSistema'
import tipoQualidadeDeObservacao from './pages/SubMenuPages/SubMenuTiposDeobservaçoes/tipoQualidadeDeObservacao'
import TQOQuestoesReg from './pages/SubMenuPages/SubMenuTiposDeobservaçoes/Questões-tiposDeQuestões/TQOQuestoesReg'
import AtivadoresSociais from './pages/SubMenuPages/SubMenuTextosAtivadores/TextosAtivadores/AtivadoresSociais'
import AtivadoresPsicologicos from './pages/SubMenuPages/SubMenuTextosAtivadores/TextosAtivadores/AtivadoresPsicologicos'
import AtivadoresCognitivos from './pages/SubMenuPages/SubMenuTextosAtivadores/TextosAtivadores/AtivadoresCognitivos'
import AtivadoresFisiologicos from './pages/SubMenuPages/SubMenuTextosAtivadores/TextosAtivadores/AtivadoresFisiologicos'
import AtivadoresPessoal from './pages/SubMenuPages/SubMenuTextosAtivadores/TextosAtivadores/AtivadoresPessoal'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* ------------ menu princial ----------------------------*/}
        <Route path="/" exact component={index} />
        <Route path="/Home" component={Home} />
        <Route path="/FormularioCadastro" component={FormCad} />
        <Route path="/Pessoas" component={Pessoas} />
        <Route path="/Relatorio" component={Relatorio}></Route>

        {/* ------------ menu sideBar direita---------------------- */}
        <Route path="/Observacoes" component={Observacoes} />
        <Route path="/Equipes" component={Equipes} />
        <Route path="/Gerencias" component={Gerencias}></Route>
        <Route path="/Unidades" component={Unidades}></Route>
        <Route path="/Area" component={Area}></Route>
        <Route path="/Atividades" component={Atividades}></Route>

        {/* -------- relaçao de paginas da tela relatório ------------*/}
        <Route path="/UniClienteExe" component={UniClienteExe}></Route>
        <Route path="/UniClieSetor" component={UniClieSetor}></Route>
        <Route path="/MesSetor" component={MesSetor}></Route>
        <Route path="/UniContribSetor" component={UniContribSetor}></Route>
        <Route path="/ObservCpto" component={ObservCpto}></Route>
        {/* ---------------- SUB MENU Gerencia----------------- */}
        <Route path="/SubMenuTextActive" component={SubMenuTextActive}></Route>
        <Route path="/SubMenuPessoas" component={SubMenuPessoas}></Route>
        <Route path="/SubMenuEmpresas" component={SubMenuEmpresas}></Route>
        <Route
          path="/SubMenuTipoDeObservacao"
          component={SubMenuTipoDeObservacao}
        ></Route>
        <Route
          path="/SubMenuGruposUsuarios"
          component={SubMenuGruposUsuarios}
        ></Route>

        {/*--------------acesso do sub Menu (tipo de observaçao)-------------*/}
        <Route
          path="/tipoQualidadeDeObservacao"
          component={tipoQualidadeDeObservacao}
        ></Route>
        <Route path="/TQOQuestoesReg" component={TQOQuestoesReg}></Route>
        <Route
          path="/PermissoesDeacessoAoSistema"
          component={PermissoesDeacessoAoSistema}
        ></Route>

        {/* ------------espaço para telas do page textos ativadores----------*/}
        <Route path="/AtivadoresSociais" component={AtivadoresSociais}></Route>
        <Route
          path="/AtivadoresPsicologicos"
          component={AtivadoresPsicologicos}
        ></Route>
        <Route path="/AtivadoresPessoal" component={AtivadoresPessoal}></Route>
        <Route
          path="/AtivadoresFisiológicos"
          component={AtivadoresFisiologicos}
        ></Route>
        <Route
          path="/AtivadoresCognitivos"
          component={AtivadoresCognitivos}
        ></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
