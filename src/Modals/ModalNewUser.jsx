import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap'
import PostUser from './PostUser';

import "./Modals.css"
const ModalNewUser = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)}
    const handleShow = () => setShow(true)

    
    return ( 
        <>
        <button onClick={handleShow} className="btn btn-outline-primary btnCreate"> Crear Usuario</button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar nuevo usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body><PostUser handleClose={handleClose} /></Modal.Body>
        </Modal>
      </>
     );
}
 
export default ModalNewUser;