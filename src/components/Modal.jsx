import React from "react";
import './css/Modal.css';

function ModalUser({ show , closeModal}){

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return(
        <>
        <div className="modal-wrapper"
        style={{
          transform : show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
        >
          <div className="modal-header" >
              <b className="add" > AJOUT</b>
              <span className="close-modal-btn" onClick={closeModal} >X</span>
          </div> 
          <div className="modal-content">
              <div className="modal-body">
              <form >
                  
                  <input type="text" placeholder="Name"/>
                  <input type="text" placeholder="Username"/>
                  <input type="text" placeholder="Email"/>
                  <input type="text"  placeholder="Company"/>
                  <input type="text" placeholder="Address"/>
                  <input type="text" placeholder="Phone"/>
                  <input type="text" placeholder="Website"/>
  
                  <button className="btn-cancel" onClick={handleSubmit}>Ajouter</button>
                  </form>
  
              </div>
              <div className="modal-footer">
  
              </div>
          </div>
        </div>
        </>      
    )
}

export default ModalUser;