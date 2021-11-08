import React, { useState } from 'react'
import '../../../../styles/pages/SubMenuPages/pages-tiposDeobservaçoes/modalNovoTipoDeobservacao.css'

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

  return (
    <>
      <button onClick={toggleModal} className="buttonModalPadrao">
        Novo tipo
      </button>

      {modal && (
        <div className="NovoTipoDeobservacao">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="NovoTipoDeobservacao-content">
            <h2 className="titleModal">Novo Tipo de Observação</h2>

            <input
              className="NTODescricao"
              placeholder="Descrição"
              type="text"
              id="fname"
              name="fname"
            ></input>
            <label className="NTOFatores">
              Fatores para calculo de resultado final da observação:
            </label>
            <label className="TQOTittlePositivo">Positivo:</label>
            <input
              className="NTOPositivo"
              placeholder="1"
              type="text"
              id="fname"
              name="fname"
            ></input>
            <label className="TQOTittleNegativo">Negativo:</label>
            <input
              className="NTONegativo"
              placeholder="1"
              type="text"
              id="fname"
              name="fname"
            ></input>
            <label className="TQOTittleNeutro">Neutro:</label>
            <input
              className="NTONeutro"
              placeholder="1"
              type="text"
              id="fname"
              name="fname"
            ></input>

            <textarea
              className="NTODescriçao"
              placeholder="Observações"
              type="text"
              id="fname"
              name="fname"
              row="none"
              maxLength="500"
            ></textarea>
            <input
              className="NTOCheckPermitir1"
              type="checkbox"
              placeholder=""
              defaultChecked={false}
            />
            <span className="NTOCheckPermitir2">
              Permitir resposta NÃO APLICADO no APP
            </span>

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
