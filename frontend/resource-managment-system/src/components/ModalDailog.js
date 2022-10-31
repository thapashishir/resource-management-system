import {React}  from "react";
import {Button, Modal} from "react-bootstrap";
import ModalForm from "./ModalForm";
//https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
//https://www.pluralsight.com/guides/how-to-open-and-close-react-bootstrap-modal-programmatically
function ModalDialog(props){
    return(
        <>
            <Modal
                show={props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={() => props.close()}>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.body}
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={() => props.close()}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDialog;