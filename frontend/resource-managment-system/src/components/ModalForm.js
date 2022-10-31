import { useState, useEffect } from 'react';
import {Form, Button} from 'react-bootstrap';
import { get } from '../apis/server';

function ModalForm(props) {
  
  let defaultData = {
    title:'',
    category: '',
    url : '',
    description: ''
  }

  const [state, setState] = useState(defaultData);
  
  
  const loadFormData = () =>{
    if (props.form_config.dataId){
      const response = get('/api/resource/get/' + props.form_config.dataId)
      response.then((response)=>{
        setState(response.data.data)
      }).catch((error)=>{
        console.log(error);
      })
    }
    
  }

  useEffect(() =>{
    loadFormData();
  },
  []
  );
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
    console.log("on change");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" defaultValue={state.title} placeholder="resource title" name="title" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example" name="category" onChange={handleChange} defaultValue={state.category}>
          <option>Select</option>
          <option value="1">Code Snipet</option>
          <option value="2">Enterntainment</option>
          <option value="3">Learning</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Url</Form.Label>
        <Form.Control type="text" placeholder="resource url" name="url" onChange={handleChange} defaultValue={state.url}/>
      </Form.Group>
      <Form.Group className="mb-3" name="description" onChange={handleChange}>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" defaultValue={state.description}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ModalForm;