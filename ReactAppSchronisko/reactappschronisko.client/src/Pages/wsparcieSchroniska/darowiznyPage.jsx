import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchemaBlik = Yup.object().shape({
    imie: Yup.string().required('Pole jest wymagane'),
    nazwisko: Yup.string().required('Pole jest wymagane'),
    kodBlik: Yup.string()
        .matches(/^\d{6}$/, 'Kod BLIK musi składać się z 6 cyfr')
        .required('Pole jest wymagane')
});

const validationSchemaKarta = Yup.object().shape({
    cardNumber: Yup.string()
        .matches(/^\d{12}$/, 'Numer karty musi składać się z 12 cyfr')
        .required('Pole jest wymagane'),
    cardName: Yup.string().required('Pole jest wymagane'),
    cardSurname: Yup.string().required('Pole jest wymagane'),
    cardExpiry: Yup.string()
        .matches(/^\d{2}\/\d{2}$/, 'Data ważności musi mieć format MM/RR')
        .required('Pole jest wymagane'),
    cardCvv: Yup.string()
        .matches(/^\d{3}$/, 'CVV musi składać się z 3 cyfr')
        .required('Pole jest wymagane'),
    cardKwota: Yup.number()
        .positive('Kwota musi być dodatnia')
        .required('Pole jest wymagane')
});

const validationSchemaPrzelew = Yup.object().shape({
    nadawca: Yup.string().required('Pole jest wymagane'),
    adresNadawcy: Yup.string().required('Pole jest wymagane'),
    kwotaPrzelewu: Yup.number()
        .positive('Kwota musi być dodatnia')
        .required('Pole jest wymagane'),
    tytulPrzelewu: Yup.string().required('Pole jest wymagane')
});

export const Darowizny = () => {
    return (
        <Container fluid style={{
            backgroundImage: 'url(/image/fundraising.png)',
            backgroundSize: '27%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            padding: '60px'
        }}>
            <Form style={{
                border: '10px solid #ccc',
                padding: '60px',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(5px)'
            }}>
                <Row>
                    <h2><center>Obecnie celem zbiorki sa nowe kojce, dla 30 zwierzakow<br /></center></h2>
                </Row>
                <Row>
                    <ProgressBar animated now={70} />
                </Row>
                <Row>
                    <h3><center><br />Zebrano: <u>17 534,56</u> na <u>25 000,00 PLN</u><br /></center></h3>
                </Row>

                <Row>
                    <hr />
                    <center><h4><br />-----=====FORMULARZ PRZEKAZANIA DATKU====-----</h4><br /></center>
                </Row>
                <Row>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="1">Przelew online</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="2">BLIK</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="3">Karta platnicza</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="4">Przelew tradycyjny</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="1">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><img src="/image/bank1.png" alt="Bank 1" style={{ width: '100%', height: 'auto' }} /></td>
                                                    <td><img src="/image/bank2.png" alt="Bank 2" style={{ width: '100%', height: 'auto' }} /></td>
                                                    <td><img src="/image/bank3.png" alt="Bank 3" style={{ width: '100%', height: 'auto' }} /></td>
                                                    <td><img src="/image/bank4.png" alt="Bank 4" style={{ width: '100%', height: 'auto' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td><img src="/image/bank5.png" alt="Bank 5" style={{ width: '100%', height: 'auto' }} /></td>
                                                    <td><img src="/image/bank6.png" alt="Bank 6" style={{ width: '100%', height: 'auto' }} /></td>
                                                    <td><img src="/image/bank7.png" alt="Bank 7" style={{ width: '100%', height: 'auto' }} /></td>
                                                    <td><img src="/image/bank8.png" alt="Bank 8" style={{ width: '100%', height: 'auto' }} /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><img src="/image/blik.png" alt="Bank 1" style={{ width: '60%', height: 'auto' }} /></td>
                                                    <td>
                                                        <Formik
                                                            initialValues={{
                                                                imie: '',
                                                                nazwisko: '',
                                                                kodBlik: '',
                                                                anonimowaDotacja: false
                                                            }}
                                                            validationSchema={validationSchemaBlik}
                                                            onSubmit={(values) => {
                                                                console.log('Form data', values);
                                                            }}
                                                        >
                                                            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                                                                <Form onSubmit={handleSubmit}>
                                                                    <Row>
                                                                        <Col>
                                                                            <Form.Group className="mb-3">
                                                                                <Form.Control
                                                                                    placeholder="Imie"
                                                                                    name="imie"
                                                                                    onChange={handleChange}
                                                                                    onBlur={handleBlur}
                                                                                    value={values.imie}
                                                                                    isInvalid={!!errors.imie && touched.imie}
                                                                                />
                                                                                <Form.Control.Feedback type="invalid">{errors.imie}</Form.Control.Feedback>
                                                                            </Form.Group>
                                                                        </Col>
                                                                        <Col>
                                                                            <Form.Group className="mb-3">
                                                                                <Form.Control
                                                                                    placeholder="Nazwisko"
                                                                                    name="nazwisko"
                                                                                    onChange={handleChange}
                                                                                    onBlur={handleBlur}
                                                                                    value={values.nazwisko}
                                                                                    isInvalid={!!errors.nazwisko && touched.nazwisko}
                                                                                />
                                                                                <Form.Control.Feedback type="invalid">{errors.nazwisko}</Form.Control.Feedback>
                                                                            </Form.Group>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col sm={6}>
                                                                            <Form.Group className="mb-3">
                                                                                <Form.Control
                                                                                    placeholder="Kod blik"
                                                                                    name="kodBlik"
                                                                                    onChange={handleChange}
                                                                                    onBlur={handleBlur}
                                                                                    value={values.kodBlik}
                                                                                    isInvalid={!!errors.kodBlik && touched.kodBlik}
                                                                                />
                                                                                <Form.Control.Feedback type="invalid">{errors.kodBlik}</Form.Control.Feedback>
                                                                            </Form.Group>
                                                                        </Col>
                                                                        <Col>
                                                                            <Form.Group className="mb-3">
                                                                                <Form.Check
                                                                                    type="switch"
                                                                                    id="custom-switch"
                                                                                    label="Anonimowa dotacja?"
                                                                                    name="anonimowaDotacja"
                                                                                    onChange={handleChange}
                                                                                    onBlur={handleBlur}
                                                                                    checked={values.anonimowaDotacja}
                                                                                />
                                                                            </Form.Group>
                                                                        </Col>
                                                                    </Row>
                                                                    <Button variant="primary" type="submit">Wyslij dotacje</Button>
                                                                </Form>
                                                            )}
                                                        </Formik>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="3">
                                        <Formik
                                            initialValues={{
                                                cardNumber: '',
                                                cardName: '',
                                                cardSurname: '',
                                                cardExpiry: '',
                                                cardCvv: '',
                                                cardKwota: ''
                                            }}
                                            validationSchema={validationSchemaKarta}
                                            onSubmit={(values) => {
                                                console.log('Form data', values);
                                            }}
                                        >
                                            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                                                <Form onSubmit={handleSubmit}>
                                                    <div className="credit-card-form">
                                                        <div className="card-number">
                                                            <Form.Group className="mb-3">
                                                                <Form.Label htmlFor="cardNumber">Numer karty:</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    id="cardNumber"
                                                                    name="cardNumber"
                                                                    placeholder="123456789012"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.cardNumber}
                                                                    isInvalid={!!errors.cardNumber && touched.cardNumber}
                                                                />
                                                                <Form.Control.Feedback type="invalid">{errors.cardNumber}</Form.Control.Feedback>
                                                            </Form.Group>
                                                        </div>
                                                        <div className="card-info">
                                                            <Row>
                                                                <Col style={{ width: '25%', textAlign: 'left' }}>
                                                                    <br />
                                                                    <Image src="/image/chip.png" rounded width="50%" />
                                                                </Col>
                                                                <Col>
                                                                    <Form.Group className="mb-3">
                                                                        <Form.Label htmlFor="cardName">Imię:</Form.Label>
                                                                        <Form.Control
                                                                            type="text"
                                                                            id="cardName"
                                                                            name="cardName"
                                                                            placeholder="Jan"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.cardName}
                                                                            isInvalid={!!errors.cardName && touched.cardName}
                                                                        />
                                                                        <Form.Control.Feedback type="invalid">{errors.cardName}</Form.Control.Feedback>
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col>
                                                                    <Form.Group className="mb-3">
                                                                        <Form.Label htmlFor="cardSurname">Nazwisko:</Form.Label>
                                                                        <Form.Control
                                                                            type="text"
                                                                            id="cardSurname"
                                                                            name="cardSurname"
                                                                            placeholder="Kowalski"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.cardSurname}
                                                                            isInvalid={!!errors.cardSurname && touched.cardSurname}
                                                                        />
                                                                        <Form.Control.Feedback type="invalid">{errors.cardSurname}</Form.Control.Feedback>
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <Form.Group className="mb-3">
                                                                        <Form.Label htmlFor="cardExpiry">Ważność:</Form.Label>
                                                                        <Form.Control
                                                                            type="text"
                                                                            id="cardExpiry"
                                                                            name="cardExpiry"
                                                                            placeholder="MM/RR"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.cardExpiry}
                                                                            isInvalid={!!errors.cardExpiry && touched.cardExpiry}
                                                                        />
                                                                        <Form.Control.Feedback type="invalid">{errors.cardExpiry}</Form.Control.Feedback>
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col>
                                                                    <Form.Group className="mb-3">
                                                                        <Form.Label htmlFor="cardCvv">CVV:</Form.Label>
                                                                        <Form.Control
                                                                            type="text"
                                                                            id="cardCvv"
                                                                            name="cardCvv"
                                                                            placeholder="123"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.cardCvv}
                                                                            isInvalid={!!errors.cardCvv && touched.cardCvv}
                                                                        />
                                                                        <Form.Control.Feedback type="invalid">{errors.cardCvv}</Form.Control.Feedback>
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col>
                                                                    <Form.Group className="mb-3">
                                                                        <Form.Label htmlFor="cardKwota">Kwota:</Form.Label>
                                                                        <Form.Control
                                                                            type="text"
                                                                            id="cardKwota"
                                                                            name="cardKwota"
                                                                            placeholder="10PLN"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.cardKwota}
                                                                            isInvalid={!!errors.cardKwota && touched.cardKwota}
                                                                        />
                                                                        <Form.Control.Feedback type="invalid">{errors.cardKwota}</Form.Control.Feedback>
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col>
                                                                    <Row>
                                                                        <Col>
                                                                            <br />
                                                                            <Image src="/image/master.png" rounded width="70%" />
                                                                            <Button variant="primary" type="submit">Wyslij</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="4">
                                        <Formik
                                            initialValues={{
                                                nadawca: '',
                                                adresNadawcy: '',
                                                kwotaPrzelewu: '',
                                                tytulPrzelewu: ''
                                            }}
                                            validationSchema={validationSchemaPrzelew}
                                            onSubmit={(values) => {
                                                console.log('Form data', values);
                                            }}
                                        >
                                            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                                                <Form onSubmit={handleSubmit}>
                                                    <div className="d-flex">
                                                        <div className="traditional-transfer-form" style={{ width: '50%' }}>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label htmlFor="senderName">Nazwa odbiorcy:</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    id="senderName"
                                                                    name="senderName"
                                                                    value="Schronisko PsiKot"
                                                                    readOnly
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label htmlFor="senderAccount">Numer konta odbiorcy:</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    id="senderAccount"
                                                                    name="senderAccount"
                                                                    value="12 3456 7890 1234 5678 9012 3456"
                                                                    readOnly
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label htmlFor="nadawca">Nadawca: imię i nazwisko / nazwa firmy:</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    id="nadawca"
                                                                    name="nadawca"
                                                                    placeholder="Imię i nazwisko / firma"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.nadawca}
                                                                    isInvalid={!!errors.nadawca && touched.nadawca}
                                                                />
                                                                <Form.Control.Feedback type="invalid">{errors.nadawca}</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label htmlFor="adresNadawcy">Adres nadawcy:</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    id="adresNadawcy"
                                                                    name="adresNadawcy"
                                                                    placeholder="Wprowadź adres"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.adresNadawcy}
                                                                    isInvalid={!!errors.adresNadawcy && touched.adresNadawcy}
                                                                />
                                                                <Form.Control.Feedback type="invalid">{errors.adresNadawcy}</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label htmlFor="kwotaPrzelewu">Kwota przelewu:</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    id="kwotaPrzelewu"
                                                                    name="kwotaPrzelewu"
                                                                    placeholder="Wprowadź kwotę"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.kwotaPrzelewu}
                                                                    isInvalid={!!errors.kwotaPrzelewu && touched.kwotaPrzelewu}
                                                                />
                                                                <Form.Control.Feedback type="invalid">{errors.kwotaPrzelewu}</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label htmlFor="tytulPrzelewu">Tytuł przelewu:</Form.Label>
                                                                <Form.Control
                                                                    as="textarea"
                                                                    id="tytulPrzelewu"
                                                                    name="tytulPrzelewu"
                                                                    rows="3"
                                                                    placeholder="Tytuł / opis"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.tytulPrzelewu}
                                                                    isInvalid={!!errors.tytulPrzelewu && touched.tytulPrzelewu}
                                                                />
                                                                <Form.Control.Feedback type="invalid">{errors.tytulPrzelewu}</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Button variant="primary" type="submit">Generuj druk</Button>
                                                        </div>
                                                        <div style={{ width: '50%', marginLeft: '10px' }}>
                                                            <br />
                                                            <img src="/image/Przelew.png" alt="Przelew" style={{ width: '100%' }} />
                                                        </div>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Row>
            </Form>
        </Container>
    );
};
