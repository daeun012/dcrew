import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Join() {
  return (
    <Container fluid="lg" className="pt-3">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="ID" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Join;
