import React from 'react';
import './Contact.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Contact = () => {
    return (
            <section className="contact contactSlide">
                <Form className="form">
                <h1>Escribinos a través de este formulario o cualquiera de nuestras redes sociales.</h1>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="email" placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Escribinos tu consulta</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                      <Button variant="dark" type="submit">Enviar</Button>
                </Form>
            </section>

    );
  }
  
  export default Contact;
  