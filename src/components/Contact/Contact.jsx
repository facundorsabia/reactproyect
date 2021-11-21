import React from 'react';
import './Contact.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2';

const Contact = () => {

const contactMessage = () => {
    Swal.fire({
        icon: 'info',
        title: `Gracias por contactarnos, te responderemos a la brevedad.`,
        showConfirmButton: false,
        timer: 5000
    })
    }

    return (
            <section className="contact contactSlide">
                <Form className="form">
                <h1>Escribinos a través de este formulario o cualquiera de nuestras redes sociales.</h1>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="name" placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Escribinos tu consulta</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button onClick={contactMessage} variant="dark" type="submit">Enviar</Button>
                </Form>
            </section>
    );
}
export default Contact;