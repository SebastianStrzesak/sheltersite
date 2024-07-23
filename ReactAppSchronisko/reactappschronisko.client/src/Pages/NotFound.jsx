import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container fluid style={{
            backgroundImage: 'url(/image/404.jpg)', // Mo¿esz u¿yæ w³asnego obrazu t³a
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '60px'
        }}>
            <Row>
                <Col>
                    <h1 style={{ color: 'black', textAlign: 'center' }}>404 - Strona nie zostala znaleziona</h1>
                    <p style={{ color: 'black', textAlign: 'center' }}>Przepraszamy, ale strona, ktorej szukasz, nie istnieje.</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="primary" href="/">Powrot do strony glownej</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
