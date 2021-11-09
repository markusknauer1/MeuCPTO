import React, { useState } from 'react'
import '../../../styles/pages/menuDireitoCss/modal/modalPessoa.css'

import DatePicker from 'react-date-picker'
import '../../../styles/components/DatePicker.css'

export default function Modal() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const [value, onChange] = useState(new Date())

  return (
    <>
      <button onClick={toggleModal} className="buttonModalPadrao">
        Nova Pessoa
      </button>

      {modal && (
        <div className="modalPessoa">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalPessoa-content">
            <h2 className="titleModal">Nova Pessoa</h2>

            <div className="formCadModal">
              <input
                className="fcadastroPessoa1"
                placeholder="Nome"
                type="text"
                id="fname"
                name="fname"
              ></input>

              <select
                name="Sexo"
                className="fcadastroPessoa2"
                type="text"
                id="fSexo"
              >
                <option value="">Sexo</option>
                <option value="">Feminino</option>
                <option value="">Masculino</option>
              </select>
              <select
                name="Função"
                className="fcadastroPessoa3"
                type="text"
                id="fcontexto"
              >
                <option value="">Função</option>
              </select>

              <div className="fcadastroPessoa4">
                <DatePicker
                  calendarType="Hebrew"
                  onChange={onChange}
                  value={value}
                />
              </div>

              <input
                className="fcadastroPessoa5"
                placeholder="E-Mail"
                type="text"
                id="mail"
                name="fname"
              ></input>
              <input
                className="fcadastroPessoa6"
                placeholder="Telefone"
                type="text"
                id="fname"
                name="fname"
              ></input>
              <input
                className="fcadastroPessoa7"
                placeholder="Celular"
                type="text"
                id="fname"
                name="fname"
              ></input>
              <input
                className="fcadastroPessoa8"
                placeholder="CEP"
                type="text"
                id="fname"
                name="fname"
              ></input>
              <button className="consulltaCep">
                <i class="fas fa-search"></i>
              </button>
              <input
                className="fcadastroPessoa9"
                placeholder="Endereço"
                type="text"
                id="fname"
                name="fname"
              ></input>
              <input
                className="fcadastroPessoa10"
                placeholder="Número"
                type="text"
                id="fname"
                name="fname"
              ></input>
              <input
                className="fcadastroPessoa11"
                placeholder="Complemento"
                type="text"
                id="fname"
                name="fname"
              ></input>
              <input
                className="fcadastroPessoa12"
                placeholder="Bairro"
                type="text"
                id="fname"
                name="fname"
              ></input>
              <input
                className="fcadastroPessoa13"
                placeholder="Cidade"
                type="text"
                id="fname"
                name="fname"
              ></input>
              <input
                className="fcadastroPessoa14"
                placeholder="Estado"
                type="text"
                id="fname"
                name="fname"
              ></input>
              <textarea
                className="fcadastroPessoa15"
                placeholder="Observações"
                type="text"
                id="fname"
                name="fname"
                row="none"
                maxLength="500"
              ></textarea>
              <input
                className="fcadastroPessoa16"
                placeholder="Senha"
                type="text"
                id="fname"
                name="fname"
              ></input>
              <input
                className="fcadastroPessoa17"
                placeholder="Confirmar Senha"
                type="text"
                id="fname"
                name="fname"
              ></input>
              <input
                className="fcadastroPessoa18"
                placeholder="Grupo"
                type="text"
                id="fname"
                name="fname"
              ></input>
            </div>
            <div className="InputAuthorization">
              <label>
                <input
                  className="CheckAcess"
                  type="checkbox"
                  placeholder="AppAcess"
                  defaultChecked={true}
                />

                <span className="checkText">Acesso ao APP</span>
              </label>
              <br />
              <label>
                <input
                  className="CheckAcess"
                  type="checkbox"
                  placeholder="WebAcess"
                  defaultChecked={true}
                />
                <span className="checkText">Acesso Web</span>
              </label>
            </div>

            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
            <button onClick={toggleModal} className="gravar-modal">
              Salvar Registro
            </button>
          </div>
        </div>
      )}
    </>
  )
}
