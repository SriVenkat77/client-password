import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const apiUrl = import.meta.env.VITE_API_URL; // Vite uses 'import.meta.env'

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiUrl}/api/reset-password/${token}`, { password });
      setMessage(res.data.message || 'Password reset successfully'); // Adjust to handle the response structure
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred'); // Adjust to handle the error structure
    }
  };

  return (
    <Container>
      <h2>Reset Password</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {message && <p className="MSG" >{message}</p>}
    </Container>
  );
}

export default ResetPassword;
