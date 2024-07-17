import React from 'react';
import DynamicForm from './DynamicForm';
import { URL } from '../url';
import { Modal, Button } from 'react-bootstrap';

const fields = [
    { name: 'date', placeholder: 'Date' },
    { name: 'pic_num', placeholder: 'Pic Number' },
    { name: 'material', placeholder: 'Material' },
    { name: 'problem', placeholder: 'Problem' },
    { name: 'fix_deal', placeholder: 'Fix Deal' },
    { name: 'times', placeholder: 'Times' },
    { name: 'fill_person', placeholder: 'Fill Person' },
    { name: 'department', placeholder: 'Department' },
    { name: 'department_director', placeholder: 'Department Director' },
    { name: 'note', placeholder: 'Note' },
    { name: 'model_principal', placeholder: 'Model Principal' },
    { name: 'primary_director', placeholder: 'Primary Director' },
    { name: 'time', type: 'datetime-local', placeholder: 'Time' },
];

const FPA = ({ show, handleClose, pk, repairName, orderNum }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Upload Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DynamicForm
                    fields={fields}
                    endpoint={`${URL}/upload/`}
                    pk={pk}
                    repairName={repairName}
                    orderNum={orderNum}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
  };

export default FPA;