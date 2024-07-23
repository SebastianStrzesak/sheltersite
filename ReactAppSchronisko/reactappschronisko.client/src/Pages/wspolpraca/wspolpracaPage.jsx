import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';

const emailValidation = Yup.string().email('Nieprawidłowy adres email').required('Pole jest wymagane');
const phoneValidation = Yup.string().matches(/^\d{9}$/, 'Numer telefonu musi zawierać 9 cyfr').required('Pole jest wymagane');
const textValidation = Yup.string().required('Pole jest wymagane');

const FormFirma = () => {
    const validationSchema = Yup.object().shape({
        nazwaFirmy: textValidation,
        emailFirmy: emailValidation,
        telefonFirmy: phoneValidation,
        opisWspolpracyFirma: textValidation,
    });

    return (
        <Formik
            initialValues={{
                nazwaFirmy: '',
                emailFirmy: '',
                telefonFirmy: '',
                opisWspolpracyFirma: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Form data', values);
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="nazwaFirmy">
                                <Form.Label>Nazwa Firmy</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Wprowadz nazwe firmy"
                                    name="nazwaFirmy"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nazwaFirmy}
                                    className={touched.nazwaFirmy && errors.nazwaFirmy ? 'is-invalid' : ''}
                                />
                                {touched.nazwaFirmy && errors.nazwaFirmy ? (
                                    <div className="invalid-feedback">{errors.nazwaFirmy}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="emailFirmy">
                                <Form.Label>Adres Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Wprowadz adres email"
                                    name="emailFirmy"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.emailFirmy}
                                    className={touched.emailFirmy && errors.emailFirmy ? 'is-invalid' : ''}
                                />
                                {touched.emailFirmy && errors.emailFirmy ? (
                                    <div className="invalid-feedback">{errors.emailFirmy}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="telefonFirmy">
                                <Form.Label>Numer Telefonu</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Wprowadz numer telefonu"
                                    name="telefonFirmy"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.telefonFirmy}
                                    className={touched.telefonFirmy && errors.telefonFirmy ? 'is-invalid' : ''}
                                />
                                {touched.telefonFirmy && errors.telefonFirmy ? (
                                    <div className="invalid-feedback">{errors.telefonFirmy}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="opisWspolpracyFirma">
                                <Form.Label>Opis Wspolpracy</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Opisz krotko forme wspolpracy"
                                    name="opisWspolpracyFirma"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.opisWspolpracyFirma}
                                    className={touched.opisWspolpracyFirma && errors.opisWspolpracyFirma ? 'is-invalid' : ''}
                                />
                                {touched.opisWspolpracyFirma && errors.opisWspolpracyFirma ? (
                                    <div className="invalid-feedback">{errors.opisWspolpracyFirma}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="checkboxyFirma">
                                <Form.Label>Charakter wspolpracy</Form.Label>
                                <Form.Check type="checkbox" label="Sponsoring" name="checkboxyFirma" onChange={handleChange} />
                                <Form.Check type="checkbox" label="Wolontariat" name="checkboxyFirma" onChange={handleChange} />
                                <Form.Check type="checkbox" label="Inna" name="checkboxyFirma" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Button variant="primary" type="submit">Wyslij zgloszenie</Button>
                    </Row>
                </Form>
            )}
        </Formik>
    );
};

const FormInstytucja = () => {
    const validationSchema = Yup.object().shape({
        nazwaInstytucji: textValidation,
        emailInstytucji: emailValidation,
        telefonInstytucji: phoneValidation,
        opisWspolpracyInstytucja: textValidation,
        osobaReprezentacyjna: textValidation,
        oczekiwania: textValidation,
    });

    return (
        <Formik
            initialValues={{
                nazwaInstytucji: '',
                emailInstytucji: '',
                telefonInstytucji: '',
                opisWspolpracyInstytucja: '',
                osobaReprezentacyjna: '',
                oczekiwania: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Form data', values);
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="nazwaInstytucji">
                                <Form.Label>Nazwa Instytucji</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Wprowadz nazwe instytucji"
                                    name="nazwaInstytucji"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nazwaInstytucji}
                                    className={touched.nazwaInstytucji && errors.nazwaInstytucji ? 'is-invalid' : ''}
                                />
                                {touched.nazwaInstytucji && errors.nazwaInstytucji ? (
                                    <div className="invalid-feedback">{errors.nazwaInstytucji}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="emailInstytucji">
                                <Form.Label>Adres Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Wprowadz adres email"
                                    name="emailInstytucji"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.emailInstytucji}
                                    className={touched.emailInstytucji && errors.emailInstytucji ? 'is-invalid' : ''}
                                />
                                {touched.emailInstytucji && errors.emailInstytucji ? (
                                    <div className="invalid-feedback">{errors.emailInstytucji}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="telefonInstytucji">
                                <Form.Label>Numer Telefonu</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Wprowadz numer telefonu"
                                    name="telefonInstytucji"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.telefonInstytucji}
                                    className={touched.telefonInstytucji && errors.telefonInstytucji ? 'is-invalid' : ''}
                                />
                                {touched.telefonInstytucji && errors.telefonInstytucji ? (
                                    <div className="invalid-feedback">{errors.telefonInstytucji}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="opisWspolpracyInstytucja">
                                <Form.Label>Opis Wspolpracy</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Opisz krotko forme wspolpracy"
                                    name="opisWspolpracyInstytucja"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.opisWspolpracyInstytucja}
                                    className={touched.opisWspolpracyInstytucja && errors.opisWspolpracyInstytucja ? 'is-invalid' : ''}
                                />
                                {touched.opisWspolpracyInstytucja && errors.opisWspolpracyInstytucja ? (
                                    <div className="invalid-feedback">{errors.opisWspolpracyInstytucja}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="osobaReprezentacyjna">
                                <Form.Label>Osoba Reprezentacyjna</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Wprowadz imie i nazwisko osoby reprezentujacej instytucje"
                                    name="osobaReprezentacyjna"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.osobaReprezentacyjna}
                                    className={touched.osobaReprezentacyjna && errors.osobaReprezentacyjna ? 'is-invalid' : ''}
                                />
                                {touched.osobaReprezentacyjna && errors.osobaReprezentacyjna ? (
                                    <div className="invalid-feedback">{errors.osobaReprezentacyjna}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="oczekiwania">
                                <Form.Label>Oczekiwania</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Czego oczekujesz w zamian"
                                    name="oczekiwania"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.oczekiwania}
                                    className={touched.oczekiwania && errors.oczekiwania ? 'is-invalid' : ''}
                                />
                                {touched.oczekiwania && errors.oczekiwania ? (
                                    <div className="invalid-feedback">{errors.oczekiwania}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Button variant="primary" type="submit">Wyslij zgloszenie</Button>
                    </Row>
                </Form>
            )}
        </Formik>
    );
};

const FormGrupa = () => {
    const validationSchema = Yup.object().shape({
        nazwaGrupy: textValidation,
        emailGrupy: emailValidation,
        telefonGrupy: phoneValidation,
        opisWspolpracyGrupa: textValidation,
    });

    return (
        <Formik
            initialValues={{
                nazwaGrupy: '',
                emailGrupy: '',
                telefonGrupy: '',
                opisWspolpracyGrupa: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Form data', values);
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="nazwaGrupy">
                                <Form.Label>Nazwa Grupy</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Wprowadz nazwe grupy"
                                    name="nazwaGrupy"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nazwaGrupy}
                                    className={touched.nazwaGrupy && errors.nazwaGrupy ? 'is-invalid' : ''}
                                />
                                {touched.nazwaGrupy && errors.nazwaGrupy ? (
                                    <div className="invalid-feedback">{errors.nazwaGrupy}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="emailGrupy">
                                <Form.Label>Adres Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Wprowadz adres email"
                                    name="emailGrupy"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.emailGrupy}
                                    className={touched.emailGrupy && errors.emailGrupy ? 'is-invalid' : ''}
                                />
                                {touched.emailGrupy && errors.emailGrupy ? (
                                    <div className="invalid-feedback">{errors.emailGrupy}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="telefonGrupy">
                                <Form.Label>Numer Telefonu</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Wprowadz numer telefonu"
                                    name="telefonGrupy"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.telefonGrupy}
                                    className={touched.telefonGrupy && errors.telefonGrupy ? 'is-invalid' : ''}
                                />
                                {touched.telefonGrupy && errors.telefonGrupy ? (
                                    <div className="invalid-feedback">{errors.telefonGrupy}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="opisWspolpracyGrupa">
                                <Form.Label>Opis Wspolpracy</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Opisz krotko forme wspolpracy"
                                    name="opisWspolpracyGrupa"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.opisWspolpracyGrupa}
                                    className={touched.opisWspolpracyGrupa && errors.opisWspolpracyGrupa ? 'is-invalid' : ''}
                                />
                                {touched.opisWspolpracyGrupa && errors.opisWspolpracyGrupa ? (
                                    <div className="invalid-feedback">{errors.opisWspolpracyGrupa}</div>
                                ) : null}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="radioGrupa">
                                <Form.Label>Wielkosc grupy</Form.Label>
                                <Form.Check type="radio" label="1-3" name="radioGrupa" onChange={handleChange} />
                                <Form.Check type="radio" label="4-6" name="radioGrupa" onChange={handleChange} />
                                <Form.Check type="radio" label="7+" name="radioGrupa" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="switchesGrupa">
                                <Form.Check type="switch" label="Czy wszyscy pelnoletni?" />
                                <Form.Check type="switch" label="Czy ktos ma alergie?" />
                                <Form.Check type="switch" label="Czy jest ktos z niepelnosprawnoscia?" />
                                <Form.Check type="switch" label="Czy potrzebny opiekun?" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Button variant="primary" type="submit">Wyslij zgloszenie</Button>
                    </Row>
                </Form>
            )}
        </Formik>
    );
};

export const Wspolpraca = () => {
    return (
        <Container fluid style={{
            backgroundImage: 'url(/image/volunteer.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '60px'
        }}>
            <Form style={{
                border: '10px solid #ccc',
                padding: '60px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)', // tło
                backdropFilter: 'blur(7px)' // rozmycie
            }}>
                <Row>
                    <Tabs defaultActiveKey="danePupila" id="zagubiony" className="mb-3">
                        <Tab eventKey="danePupila" title="Dla Firm">
                            <Row><h3><center>---===Wspolpraca dla firm===---</center></h3></Row>
                            <FormFirma />
                        </Tab>
                        <Tab eventKey="dlainstytucji" title="Dla Instytucji">
                            <Row><h3><center>---===Wspolpraca dla instytucji===---</center></h3></Row>
                            <FormInstytucja />
                        </Tab>
                        <Tab eventKey="privategroup" title="Dla grup prywatnych">
                            <Row><h3><center>---===Wspolpraca z prywatnymi grupami===---</center></h3></Row>
                            <FormGrupa />
                        </Tab>
                    </Tabs>
                </Row>
            </Form>
        </Container>
    );
}