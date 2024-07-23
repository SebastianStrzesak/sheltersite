import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Psy = () => {
    const [ageFrom, setAgeFrom] = useState('');
    const [ageTo, setAgeTo] = useState('');
    const [weightFrom, setWeightFrom] = useState('');
    const [weightTo, setWeightTo] = useState('');
    const [errors, setErrors] = useState({});

    const validateAge = (value, field) => {
        let error = '';
        if (value !== '' && (isNaN(value) || value < 0)) {
            error = 'Proszę wpisać prawidłowy wiek';
        }
        setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
    };

    const validateWeight = (value, field) => {
        let error = '';
        if (value !== '' && (isNaN(value) || value < 0)) {
            error = 'Proszę wpisać prawidłową wagę';
        }
        setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
    };

    const dogs = [
        { id: 1, name: "Mangus", image: "image/dog11.jpg", description: "3 Letni piesek czeka na dom" },
        { id: 2, name: "Sif", image: "image/dog12.jpg", description: "Starsza suczka poszukuje domu" },
        { id: 3, name: "Quelag", image: "image/dog13.jpg", description: "Pozna towazysza do zabaw" }
    ];

    return (
        <Container fluid>
            <Row className="justify-content-center align-items-center">
                {dogs.map(dog => (
                    <Card style={{ width: '18rem', margin: '10px' }} key={dog.id}>
                        <Card.Img variant="top" src={dog.image} />
                        <Card.Body>
                            <Card.Title>{dog.name}</Card.Title>
                            <Card.Text>{dog.description}</Card.Text>
                            <Button variant="primary">Adoptuj</Button>
                        </Card.Body>
                    </Card>
                ))}
                {dogs.map(dog => (
                    <Card style={{ width: '18rem', margin: '10px' }} key={dog.id + 3}>
                        <Card.Img variant="top" src={dog.image} />
                        <Card.Body>
                            <Card.Title>{dog.name}</Card.Title>
                            <Card.Text>{dog.description}</Card.Text>
                            <Button variant="primary">Adoptuj</Button>
                        </Card.Body>
                    </Card>
                ))}
                {dogs.map(dog => (
                    <Card style={{ width: '18rem', margin: '10px' }} key={dog.id + 6}>
                        <Card.Img variant="top" src={dog.image} />
                        <Card.Body>
                            <Card.Title>{dog.name}</Card.Title>
                            <Card.Text>{dog.description}</Card.Text>
                            <Button variant="primary">Adoptuj</Button>
                        </Card.Body>
                    </Card>
                ))}
                {dogs.map(dog => (
                    <Card style={{ width: '18rem', margin: '10px' }} key={dog.id + 9}>
                        <Card.Img variant="top" src={dog.image} />
                        <Card.Body>
                            <Card.Title>{dog.name}</Card.Title>
                            <Card.Text>{dog.description}</Card.Text>
                            <Button variant="primary">Adoptuj</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filtrowanie listy</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col sm={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj po imieniu</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Sterylizacja</Form.Label>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label="Sterylizowany?"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Plec</Form.Label>
                                        <div className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Samiec"
                                                name="gender"
                                                type="radio"
                                                id="male"
                                                value="male"
                                            />
                                            <Form.Check
                                                inline
                                                label="Samica"
                                                name="gender"
                                                type="radio"
                                                id="female"
                                                value="female"
                                            />
                                            <Form.Check
                                                inline
                                                label="Nieistotne"
                                                name="gender"
                                                type="radio"
                                                id="any"
                                                value="any"
                                            />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Wiek od</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={ageFrom}
                                            onChange={(e) => {
                                                setAgeFrom(e.target.value);
                                                validateAge(e.target.value, 'ageFrom');
                                            }}
                                        />
                                        {errors.ageFrom && <Form.Text className="text-danger">{errors.ageFrom}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Wiek do</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={ageTo}
                                            onChange={(e) => {
                                                setAgeTo(e.target.value);
                                                validateAge(e.target.value, 'ageTo');
                                            }}
                                        />
                                        {errors.ageTo && <Form.Text className="text-danger">{errors.ageTo}</Form.Text>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Umaszczenie</Form.Label>
                                        <Form.Select aria-label="Rodzaj">
                                            <option value="Biale">Biale</option>
                                            <option value="Czarne">Czarne</option>
                                            <option value="Brazowe">Brazowe</option>
                                            <option value="Mieszane">Mieszane</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Uszy</Form.Label>
                                        <Form.Select aria-label="Rodzaj">
                                            <option value="Stojace">Stojace</option>
                                            <option value="Oklaple">Oklaple</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Ogon</Form.Label>
                                        <Form.Select aria-label="Rodzaj">
                                            <option value="do gory">do gory</option>
                                            <option value="klasyczny">klasyczny</option>
                                            <option value="krutki">krutki</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Waga od</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={weightFrom}
                                            onChange={(e) => {
                                                setWeightFrom(e.target.value);
                                                validateWeight(e.target.value, 'weightFrom');
                                            }}
                                        />
                                        {errors.weightFrom && <Form.Text className="text-danger">{errors.weightFrom}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Waga do</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={weightTo}
                                            onChange={(e) => {
                                                setWeightTo(e.target.value);
                                                validateWeight(e.target.value, 'weightTo');
                                            }}
                                        />
                                        {errors.weightTo && <Form.Text className="text-danger">{errors.weightTo}</Form.Text>}
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Imie</th>
                        <th>Plec</th>
                        <th>Umaszczenie</th>
                        <th>Wiek</th>
                        <th>Waga</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Azor</td>
                        <td>Pies</td>
                        <td>Czarny</td>
                        <td>3 lata</td>
                        <td>7,5 kg</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Rex</td>
                        <td>Pies</td>
                        <td>Mieszany</td>
                        <td>7 lat</td>
                        <td>4 kg</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Szarik</td>
                        <td>Suczka</td>
                        <td>Czarny</td>
                        <td>1 rok</td>
                        <td>17 kg</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Burek</td>
                        <td>Pies</td>
                        <td>Brazowy</td>
                        <td>5 lat</td>
                        <td>10 kg</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Luna</td>
                        <td>Suczka</td>
                        <td>Bialy</td>
                        <td>2 lata</td>
                        <td>8 kg</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Max</td>
                        <td>Pies</td>
                        <td>Mieszany</td>
                        <td>4 lata</td>
                        <td>6 kg</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Charlie</td>
                        <td>Pies</td>
                        <td>Czarny</td>
                        <td>6 lat</td>
                        <td>12 kg</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Bella</td>
                        <td>Suczka</td>
                        <td>Mieszany</td>
                        <td>3 lata</td>
                        <td>9 kg</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Rudy</td>
                        <td>Pies</td>
                        <td>Brazowy</td>
                        <td>8 lat</td>
                        <td>15 kg</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Princess</td>
                        <td>Suczka</td>
                        <td>Bialy</td>
                        <td>1 rok</td>
                        <td>7 kg</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Rex</td>
                        <td>Pies</td>
                        <td>Brazowy</td>
                        <td>2 lata</td>
                        <td>11 kg</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Bobby</td>
                        <td>Pies</td>
                        <td>Czarny</td>
                        <td>7 lat</td>
                        <td>13 kg</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>Milo</td>
                        <td>Pies</td>
                        <td>Brazowy</td>
                        <td>9 lat</td>
                        <td>14 kg</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
