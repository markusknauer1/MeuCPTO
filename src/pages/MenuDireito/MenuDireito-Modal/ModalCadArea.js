import React, { useState } from 'react'
import '../../../styles/pages/MenuDireito/modal/modalArea.css'

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
        Nova Área
      </button>

      {modal && (
        <div className="modalArea">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalPadrao-content">
            <h2 className="titleModal">Nova Área</h2>
            <hr className="hrTitleModal1" />

            <input
              className="fArea"
              placeholder="Nova Área"
              type="text"
              id="fname"
              name="fname"
            ></input>

            <select
              name="Selecione"
              className="fAreaRef"
              type="text"
              id="fSexo"
            >
              <option value="">Select</option>
              <option value="">Select</option>
              <option value="">Select</option>
            </select>

            <textarea
              className="fObsArea"
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
