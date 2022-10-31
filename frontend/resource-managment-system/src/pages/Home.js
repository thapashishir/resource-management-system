import {React, useEffect, useState} from "react";
import { Table, ModalDialog, ModalForm } from "../components";
import { Button } from 'react-bootstrap';
import { get } from '../apis/server';

function Home() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  const [data , setData] = useState([]);
  const [resourceDetails, setResourceDetails] = useState({})
  const [formConfig, setformConfig] = useState({})
 
  const getData = () =>{
    const response = get('/api/resource/list')
    response
    .then((response)=>{
      setData(response.data.data)
    })
    .catch(console.log("error"))
  }

  useEffect(() =>{
    getData()
  },
  []
  );

  const getResourceDetails = (resourceId) =>{
    setformConfig({ url:'/api/resource/edit', mode:"UPDATE" , dataId:resourceId})
    Toggle();
  }

  const handleAdd = () => {
    setformConfig({ url:'/api/resource/add', mode:'ADD' , dataId:0});
    Toggle();
  }

 
  return (
    <div className="home">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-2">
            <Button variant="primary" onClick={() => handleAdd()}>
              Add
            </Button>
            {
              modal && 
              <ModalDialog 
              show={modal} close={Toggle} 
              title={"Add Resource Details"} body={<ModalForm form_config={formConfig}/>}
              />
            }
          </div>
        </div>
        <div className="row pt-4">
            <div className="col-md-12">
                <Table table_data={data} handleEdit={getResourceDetails}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;