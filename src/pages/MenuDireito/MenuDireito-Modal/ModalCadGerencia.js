import React, { useState } from 'react'
import '../../../styles/pages/MenuDireito/modal/modalGerencia.css'

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
        Nova Gerencia
      </button>

      {modal && (
        <div className="modalGerencia">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalPadrao-content">
            <h2 className="titleModal">Nova Gerencia</h2>
            <hr className="hrTitleModal1" />

            <input
              className="fDescGerencia"
              placeholder="Nova Gerência"
              type="text"
              id="fname"
              name="fname"
            ></input>

            <textarea
              className="fObsGerencia"
              placeholder="Observações"
              type="text"
              id="fname"
              name="fname"
              row="none"
              maxLength="500"
            ></textarea>

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
