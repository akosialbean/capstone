import { Button, Form, Container, Col, Card } from "react-bootstrap";
import { useState } from "react";

const Login = () => {
  // SHOW/HIDE PASSWORD FUNCTIONALITY
  const [showPassword, setShowPassword] = useState(false);

  // FUNCTION TO TOGGLE PASSWORD VISIBILITY
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Card>
        <Card.Header>Sign In</Card.Header>
        <Card.Body>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  required
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>
              <Form.Check 
              type="checkbox" 
              label="Show Password"
              onChange={togglePasswordVisibility} 
              />
            </Form>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
