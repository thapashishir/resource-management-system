import {React, useState} from "react";
import { Table, ModalDialog } from "../components";
import { Button } from 'react-bootstrap';


function Home() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="home">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-2">
            <Button variant="primary" onClick={() => Toggle()}>
              Add
            </Button>
            {
              modal && 
              <ModalDialog show={modal} close={Toggle} title={"Add Resource Details"}/>
            }
          </div>
        </div>
        <div className="row pt-4">
            <div className="col-md-12">
                <Table/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;