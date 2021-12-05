import ProfileDireita from '../Components/ProfileDireita'
import SideBar from '../Components/SideBar'
import '../styles/pages/FormularioCadastro.css'
import SideBarDireita from '../Components/SideBar-right/SideBarDireita'
import logoK from '../Images/logoK.png'
import SidebarMobile from '../Components/SideBar-right/SidebarMobile'

function FormularioCadastro() {
  const newLocal = <img className="logoKmobile" src={logoK} alt="LogoEmpresa" />
  return (
    <div className="HomePage">
      <SideBar />

      <div className="page">
        <div className="filter1">
          <h4 className="subtcad1">UNIDADES:</h4>
          <h2 className="subtcad2">Unidade Registrada (Produção)</h2>
          {newLocal}
          <h3 className="subtcad3">Dados Cadastrais:</h3>
        </div>
        <form className="tabelaPadraoCad">
          <p className="titulo1">Nome Fantasia</p>
          <input
            className="fcadastro1"
            type="text"
            autoComplete="nope"
            id="fname"
            name="fname"
          />
          <p className="titulo2">CNPJ</p>
          <input
            className="fcadastro2"
            type="text"
            autoComplete="nope"
            id="fname"
            name="fname"
          />
          <p className="titulo3">Segmento</p>
          <input
            className="fcadastro3"
            type="text"
            autoComplete="nope"
            id="fname"
            name="fname"
          />
          <p className="titulo4">CEP</p>
          <input
            className="fcadastro4"
            type="text"
            autoComplete="nope"
            id="fname"
            name="fname"
          />
          <p className="titulo5">Número</p>
          <input
            className="fcadastro5"
            type="text"
            autoComplete="nope"
            id="fname"
            name="fname"
          />
          <p className="titulo6">Bairro</p>
          <input
            className="fcadastro6"
            type="text"
            autoComplete="nope"
            id="fname"
            name="fname"
          />
          <p className="titulo7">Razão Social</p>
          <input
            className="fcadastro7"
            type="text"
            autoComplete="nope"
            id="fname"
            name="fname"
          />
          <p className="titulo8">Inscrição Estadual</p>
          <input
            className="fcadastro8"
            type="text"
            autoComplete="nope"
            id="fname"
            name="fname"
          />
          <p className="titulo9">Responsável</p>
          <input
            className="fcadastro9"
            type="text"
            autoComplete="nope"
            id="fname"
            name="fname"
          />
          <p className="titulo10">Endereço</p>
          <input
            className="fcadastro10"
            type="text"
            autoComplete="nope"
            id="fname"
            name="fname"
          />
          <p className="titulo11">Complemento</p>
          <input
            className="fcadastro11"
            type="text"
            autoComplete="nope"
            id="fname"
            name="fname"
          />
          <p className="titulo12">Cidade</p>
          <input
            className="fcadastro12"
            type="text"
            autoComplete="nope"
            id="fname"
            name="fname"
          />
          <p className="titulo13">Estado</p>
          <input
            className="fcadastro13"
            type="text"
            autoComplete="nope"
            id="fname"
            name="fname"
          />

          <button className="buttonSave">Salvar</button>
        </form>
      </div>
      <ProfileDireita />
      <SidebarMobile />
      <div className="buttonProfileDireita">
        <SideBarDireita />
      </div>
    </div>
  )
}

export default FormularioCadastro
