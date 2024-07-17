import React from 'react';
import DynamicForm from './DynamicForm';
import { URL } from '../url';
import { Modal, Button } from 'react-bootstrap';

const fields = [
    { name: 'repair_name', placeholder: 'Repair Name' },
    { name: 'mo_name', placeholder: 'moname' },
    { name: 'date', type: 'datetime-local', placeholder: 'Date' },
    { name: 'num', placeholder: 'Number' },
    { name: 'thing', placeholder: 'thing' },
    { name: 'problem', placeholder: 'Problem' },
    { name: 'improve', placeholder: 'improve' },
    { name: 'cost', placeholder: 'cost' },
    { name: 'who', placeholder: 'who' },
    { name: 'note', placeholder: 'Note' },
    { name: 'unit', placeholder: 'unit' },
    { name: 'supervisor', placeholder: 'supervisor' },
    { name: 'incharge', placeholder: 'incharge' },
    { name: 'dep_head', placeholder: 'dep_head' },
    { name: 'tag', placeholder: 'Tag' },
];

const P = ({ show, handleClose }) => {
  return (
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>Upload Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <DynamicForm fields={fields} endpoint={`${URL}/upload/`} />
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                  Close
              </Button>
          </Modal.Footer>
      </Modal>
  );
};

export default P;