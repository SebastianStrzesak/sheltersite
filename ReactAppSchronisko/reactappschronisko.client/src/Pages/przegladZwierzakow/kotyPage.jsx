import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Koty = () => {
    const [ageFrom, setAgeFrom] = useState('');
    const [ageTo, setAgeTo] = useState('');
    const [weightFrom, setWeightFrom] = useState('');
    const [weightTo, setWeightTo] = useState('');
    const [errors, setErrors] = useState({ ageFrom: '', ageTo: '', weightFrom: '', weightTo: '' });

    const validateAge = (age, field) => {
        if (age !== '' && (isNaN(age) || age < 0)) {
            setErrors(prevErrors => ({ ...prevErrors, [field]: 'Prosze podac prawidlowy wiek (liczba dodatnia).' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, [field]: '' }));
        }
    };

    const validateWeight = (weight, field) => {
        if (weight !== '' && (isNaN(weight) || weight < 0)) {
            setErrors(prevErrors => ({ ...prevErrors, [field]: 'Prosze podac prawidlowa wage (liczba dodatnia).' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, [field]: '' }));
        }
    };

    return (
        <Container fluid>
            <Row className="justify-content-center align-items-center">
                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot11.jpg" />
                    <Card.Body>
                        <Card.Title>Puszek</Card.Title>
                        <Card.Text>
                            Czai sie na nowych wlascicieli
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot12.jpeg" />
                    <Card.Body>
                        <Card.Title>Capra</Card.Title>
                        <Card.Text>
                            Wypatruje nowego domu
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot13.jpg" />
                    <Card.Body>
                        <Card.Title>Taurus</Card.Title>
                        <Card.Text>
                            Ciekawa nowych przygod
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot11.jpg" />
                    <Card.Body>
                        <Card.Title>Puszek</Card.Title>
                        <Card.Text>
                            Czai sie na nowych wlascicieli
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot12.jpeg" />
                    <Card.Body>
                        <Card.Title>Capra</Card.Title>
                        <Card.Text>
                            Wypatruje nowego domu
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot13.jpg" />
                    <Card.Body>
                        <Card.Title>Taurus</Card.Title>
                        <Card.Text>
                            Ciekawa nowych przygod
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot11.jpg" />
                    <Card.Body>
                        <Card.Title>Puszek</Card.Title>
                        <Card.Text>
                            Czai sie na nowych wlascicieli
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot12.jpeg" />
                    <Card.Body>
                        <Card.Title>Capra</Card.Title>
                        <Card.Text>
                            Wypatruje nowego domu
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot13.jpg" />
                    <Card.Body>
                        <Card.Title>Taurus</Card.Title>
                        <Card.Text>
                            Ciekawa nowych przygod
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot11.jpg" />
                    <Card.Body>
                        <Card.Title>Puszek</Card.Title>
                        <Card.Text>
                            Czai sie na nowych wlascicieli
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot12.jpeg" />
                    <Card.Body>
                        <Card.Title>Capra</Card.Title>
                        <Card.Text>
                            Wypatruje nowego domu
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot13.jpg" />
                    <Card.Body>
                        <Card.Title>Taurus</Card.Title>
                        <Card.Text>
                            Ciekawa nowych przygod
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>
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
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                                <Form.Check
                                                    inline
                                                    label="Samiec"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Samica"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Nieistotne"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-3`}
                                                />
                                            </div>
                                        ))}
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
                                        <Form.Label>Futro</Form.Label>
                                        <Form.Select aria-label="Rodzaj">
                                            <option value="Geste">Geste</option>
                                            <option value="Klasyczne">Klasyczne</option>
                                            <option value="Brak">Brak</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={2}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Usposobienie</Form.Label>
                                        <Form.Select aria-label="Rodzaj">
                                            <option value="Przyjazny">Przyjazny</option>
                                            <option value="Neutralny">Neutralny</option>
                                            <option value="Trudny">Trudny</option>
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
                        <th>Rodzaj Futra</th>
                        <th>Wiek</th>
                        <th>Waga</th>
                        <th>Usposobienie</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Tiger</td>
                        <td>Kot</td>
                        <td>Geste</td>
                        <td>4 lata</td>
                        <td>6,3 kg</td>
                        <td>Przyjazny</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Whiskers</td>
                        <td>Kotka</td>
                        <td>Klasyczne</td>
                        <td>2 lata</td>
                        <td>4,8 kg</td>
                        <td>Neutralny</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Fluffy</td>
                        <td>Kotka</td>
                        <td>Brak</td>
                        <td>6 lat</td>
                        <td>5,5 kg</td>
                        <td>Trudny</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Smokey</td>
                        <td>Kot</td>
                        <td>Geste</td>
                        <td>5 lat</td>
                        <td>7,2 kg</td>
                        <td>Przyjazny</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Mittens</td>
                        <td>Kotka</td>
                        <td>Klasyczne</td>
                        <td>3 lata</td>
                        <td>4,1 kg</td>
                        <td>Neutralny</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Felix</td>
                        <td>Kot</td>
                        <td>Brak</td>
                        <td>8 lat</td>
                        <td>6,8 kg</td>
                        <td>Trudny</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Luna</td>
                        <td>Kotka</td>
                        <td>Geste</td>
                        <td>1 rok</td>
                        <td>3,9 kg</td>
                        <td>Przyjazny</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Simba</td>
                        <td>Kot</td>
                        <td>Klasyczne</td>
                        <td>7 lat</td>
                        <td>8,5 kg</td>
                        <td>Neutralny</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Cleo</td>
                        <td>Kotka</td>
                        <td>Brak</td>
                        <td>2 lata</td>
                        <td>5,2 kg</td>
                        <td>Trudny</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Rusty</td>
                        <td>Kot</td>
                        <td>Geste</td>
                        <td>6 lat</td>
                        <td>7,7 kg</td>
                        <td>Przyjazny</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Milo</td>
                        <td>Kot</td>
                        <td>Klasyczne</td>
                        <td>4 lata</td>
                        <td>5,9 kg</td>
                        <td>Neutralny</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Buddy</td>
                        <td>Kot</td>
                        <td>Brak</td>
                        <td>3 lata</td>
                        <td>6,4 kg</td>
                        <td>Trudny</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
