import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const apiUrl = import.meta.env.VITE_API_URL; // Vite uses 'import.meta.env'



function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/api/forgot-password`, { email });

      setMessage(response.data.message); // Assuming the response contains a `message` field
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message); // Handle error messages
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <Container>
      <h2>Forgot Password</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {message && <p className="MSG">{message}</p>}
    </Container>
  );
}

export default ForgotPassword;
