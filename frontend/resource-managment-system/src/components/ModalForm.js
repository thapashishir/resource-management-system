import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';

function ModalForm() {
  const defaultData = {
    title:'',
    category: '',
    url : '',
    description: ''
  }
  const [state, setState] = useState(defaultData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form data', state);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="resource title" name="title" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example" name="category" onChange={handleChange}>
          <option>Select</option>
          <option value="1">Code Snipet</option>
          <option value="2">Enterntainment</option>
          <option value="3">Learning</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Url</Form.Label>
        <Form.Control type="text" placeholder="resource url" name="url" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" name="description" onChange={handleChange}>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ModalForm;