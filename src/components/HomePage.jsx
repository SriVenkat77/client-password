import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function HomePage() {
  return (
    <div>
      

      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title as="h2">Welcome to Passco</Card.Title>
                <Card.Text>
                  Discover amazing features and manage your account with ease.
                  Explore our platform and get started today! <br/> If you Forgot your password CLICK Here!
                </Card.Text>
                <Button variant="primary" href="/forgot-password">
                  Forgot Password
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
