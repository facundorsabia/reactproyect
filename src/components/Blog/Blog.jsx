import React from 'react';
import './Blog.css'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

const Blog = () => {
    return (
        <section className="blog blogSlide">
            <CardGroup>
            <Card className="card">
                <Card.Img variant="top" src="https://iconcollective.edu/wp-content/uploads/Kick-and-Bass-Mixing-Tips.jpg" />
                <Card.Body>
                <Card.Title>Cómo producir un Kick Bass potente</Card.Title>
                <Card.Text className="cardText">
                    Aprende las técnias de ecualización más avanzadas para conseguir una base potente.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Autor: Kid Riot</small>
                </Card.Footer>
            </Card>
            <Card className="card">
                <Card.Img variant="top" src="https://i.ytimg.com/vi/ElJt1ew5ri8/maxresdefault.jpg" />
                <Card.Body>
                <Card.Title>Voces en tu pista</Card.Title>
                <Card.Text className="cardText">
                    Reverb y delay, los secretos para manejar planos en las voces.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Autor: Russ</small>
                </Card.Footer>
            </Card>
            <Card className="card">
                <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/x1uASJ4EG8mVtBaDBd1hfQBddXlWaheDKGAWsZPUKtsQ8NFXgqlPOiTMkNC0zw7Lvx_iz13BrUwU8WJ2ugHJ_yz0V7fcMZT16VUYeuKwf7RBxVxtDyjQi3YSWy-AjgwAo7WodLjnG0MCZN9JmczJirN6EYlYC6khesmu6971zk2u5kuVylct" />
                <Card.Body>
                <Card.Title>Imágen Stereo</Card.Title>
                <Card.Text className="cardText">
                    Los secretos del paneo en la producción para generar un espacio sonoro tridimensional.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Autor: Dangelo</small>
                </Card.Footer>
            </Card>
            </CardGroup>
        </section>
    );
  }
  
  export default Blog;
  