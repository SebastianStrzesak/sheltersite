import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { ChatWidget } from '../components/ChatWidget';

export function Layout() {
    const [showGifModal, setShowGifModal] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [audio, setAudio] = useState(new Audio('/sound/dog.mp3'));
    const [isLogin, setIsLogin] = useState(true);

    const handleShowGifModal = () => setShowGifModal(true);
    const handleCloseGifModal = () => {
        setShowGifModal(false);
        setIsAudioPlaying(false); // Zatrzymuje audio
    };

    const toggleAudio = () => {
        if (isAudioPlaying) {
            audio.pause(); // Zatrzymuje audio
        } else {
            audio.play(); // Zaczyna audio
        }
        setIsAudioPlaying(!isAudioPlaying);
    };

    const stopAudio = () => {
        audio.pause();
        setIsAudioPlaying(false);
    };

    const handleShowAuthModal = (login) => {
        setIsLogin(login);
        setShowAuthModal(true);
    };

    const handleCloseAuthModal = () => setShowAuthModal(false);

    return (
        <div className="app">
            <Navbar expand="lg" className="custom-navbar">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="/image/logo.jpg" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <NavDropdown title="Nasi podopieczni" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link to="/psy" className="d-block">Psy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/koty" className="d-block">Koty</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <span className="nav-separator"></span>
                            <Nav.Link>
                                <Link to="/zagubione" className="d-block">Zgubilem pupila</Link>
                            </Nav.Link>
                            <span className="nav-separator"></span>
                            <Nav.Link>
                                <Link to="/znalezione" className="d-block">Znalazlem pupila</Link>
                            </Nav.Link>
                            <span className="nav-separator"></span>
                            <NavDropdown title="Wsparcie" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link to="/darowizny" className="d-block">Datki</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/dary" className="d-block">Dary rzeczowwe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/wolontariat" className="d-block">Wolontariat</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <span className="nav-separator"></span>
                            <Nav.Link>
                                <Link to="/wspolpraca" className="d-block">Wspolpraca</Link>
                            </Nav.Link>
                            <span className="nav-separator"></span>
                            <Nav.Link>
                                <Link to="/hotel" className="d-block">Hotel dla zwierzat</Link>
                            </Nav.Link>
                            <span className="nav-separator"></span>
                            <Nav.Link onClick={handleShowGifModal} style={{ cursor: 'pointer' }}>Podglad na zywo!</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Imie zwierzaka"
                                className="me-2"
                                aria-label="Szukaj"
                            />
                            <Button variant="primary">Szukaj</Button>
                        </Form>
                        <Nav>
                            <span className="nav-separator"></span>
                            <Nav.Link onClick={() => handleShowAuthModal(true)} style={{ cursor: 'pointer' }}>Logowanie</Nav.Link>
                            <span className="nav-separator"></span>
                            <Nav.Link onClick={() => handleShowAuthModal(false)} style={{ cursor: 'pointer' }}>Rejestracja</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid>
                <Row>
                    <Col sm={2}>
                        <center>
                            <h2><center>Zwierzaki do pilnej adopcji:</center></h2>
                            <Card className="w-100">
                                <Card.Img variant="top" src="/image/dog1.jpg" />
                                <Card.Body>
                                    <Card.Title>Kiszak</Card.Title>
                                    <Card.Text>
                                        <center>9 letni piesek poszukuje kochajacej rodziny, wymaga opieki weterynaryjnej !</center>
                                    </Card.Text>
                                    <Button variant="primary">Adoptuj</Button>
                                </Card.Body>
                            </Card>
                            <Card className="w-100">
                                <Card.Img variant="top" src="/image/dog2.jpg" />
                                <Card.Body>
                                    <Card.Title>Gucio</Card.Title>
                                    <Card.Text>
                                        <center>Mlody porzucony szczeniak czeka na nowa, kochajaca rodzine !</center>
                                    </Card.Text>
                                    <Button variant="primary">Adoptuj</Button>
                                </Card.Body>
                            </Card>
                            <Card className="w-100">
                                <Card.Img variant="top" src="/image/dog3.jpg" />
                                <Card.Body>
                                    <Card.Title>Artorias</Card.Title>
                                    <Card.Text>
                                        <center>Starszy piesek z problemami ze wzrokiem poszukuje opiekunczego i troskliwego gniazdka</center>
                                    </Card.Text>
                                    <Button variant="primary">Adoptuj</Button>
                                </Card.Body>
                            </Card>
                        </center>
                    </Col>

                    <Col className="outlet-content text-center">
                        <Outlet />
                    </Col>
                </Row>
            </Container>

            <footer className="footer">
                <Container fluid>
                    <hr />
                    <Row>
                        <Col sm={3}>
                        </Col>
                        <Col>
                            <h5>Dane kontaktowe schroniska:</h5>
                            <p>Adres: ul. Przykladowa 123, 00-000 Warszawa</p>
                            <p>Telefon: 123-456-789</p>
                            <p>Email: kontakt@schronisko.pl</p>
                        </Col>
                        <Col>
                            <h5>Godziny otwarcia:</h5>
                            <p>Poniedzialek - Piatek: 8:00 - 18:00</p>
                            <p>Sobota: 9:00 - 15:00</p>
                            <p>Niedziela: nieczynne</p>
                        </Col>
                        <Col>
                            <Form className="text-start" style={{ marginRight: '70px' }}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><h5>Napisz do Nas:</h5></Form.Label>
                                    <Form.Control as="textarea" placeholder="Tresc wiadomosci" rows={2} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control type="email" placeholder="podaj swoj mail" />
                                    <Button variant="primary">Wyslij</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </footer>

            <ChatWidget />

            <Modal show={showGifModal} onHide={handleCloseGifModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Kamera LIVE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="/image/dogs.gif" alt="dogs" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={toggleAudio}>
                        {isAudioPlaying ? 'Wlacz dzwiek' : 'Wylacz dzwiek'}
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showAuthModal} onHide={handleCloseAuthModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{isLogin ? 'Login' : 'Register'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isLogin ? (
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Podaj email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Haslo</Form.Label>
                                <Form.Control type="password" placeholder="Podaj haslo" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Login</Button>
                        </Form>
                    ) : (
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Adres email</Form.Label>
                                <Form.Control type="email" placeholder="Podaj email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Haslo</Form.Label>
                                <Form.Control type="Haslo" placeholder="Podaj haslo" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Potwierdz haslo</Form.Label>
                                <Form.Control type="password" placeholder="Powtorz haslo" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Utworz konto</Button>
                        </Form>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
}
