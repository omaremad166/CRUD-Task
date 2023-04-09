import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AddUser } from '../Services/user-service';
import { User } from '../Models/user';

function RegisterUser() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    debugger;
    const userData: User = {id, name, phone, age};

    try {
      await AddUser(userData);
      console.log('User registered successfully!');
      setName('');
      setPhone('');
      setAge('');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="container">
      <h1>Register User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RegisterUser;