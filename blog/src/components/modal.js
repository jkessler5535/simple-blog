import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const EmailSignUpPopUp = () => {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform any additional validation or processing if needed

    // Set submitted to true to display "Thanks for joining!" message
    setSubmitted(true);
  };

  return (
    <Modal show={show} backdrop="static" onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up for Our Newsletter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {submitted ? (
          <p>Thanks for joining!</p>
        ) : (
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default EmailSignUpPopUp;