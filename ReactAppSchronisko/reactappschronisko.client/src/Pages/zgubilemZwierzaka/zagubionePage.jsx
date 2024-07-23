import React from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const validationSchema = Yup.object({
    imiePupila: Yup.string().required('Imię pupila jest wymagane'),
    rodzaj: Yup.string().required('Rodzaj jest wymagany'),
    wiek: Yup.number().required('Wiek jest wymagany').positive('Wiek musi być dodatni').integer('Wiek musi być liczbą całkowitą'),
    plec: Yup.string().required('Płeć jest wymagana'),
    wielkosc: Yup.string().required('Wielkość jest wymagana'),
    przewidzianaNagroda: Yup.string().required('Nagroda jest wymagana'),
    umaszczenie: Yup.string().required('Umaszczenie jest wymagane'),
    obroza: Yup.string().required('Obroża / szelki są wymagane'),
    adresZgubienia: Yup.string().required('Adres miejsca zgubienia jest wymagany'),
    okolicznosciZgubienia: Yup.string().required('Okoliczności zgubienia są wymagane'),
    imieZglaszajacego: Yup.string().required('Imię jest wymagane'),
    nazwiskoZglaszajacego: Yup.string().required('Nazwisko jest wymagane'),
    telefon: Yup.string().required('Telefon jest wymagany').matches(/^\d{3}-\d{3}-\d{3}$/, 'Telefon musi być w formacie XXX-XXX-XXX'),
    miejscowosc: Yup.string().required('Miejscowość jest wymagana'),
    kodPocztowy: Yup.string().required('Kod pocztowy jest wymagany').matches(/^\d{2}-\d{3}$/, 'Kod pocztowy musi być w formacie XX-XXX'),
    ulica: Yup.string().required('Ulica, nr. domu są wymagane'),
    email: Yup.string().email('Niepoprawny adres email').required('Email jest wymagany'),
    captcha: Yup.string().required('Kod z obrazka jest wymagany'),
    zgodaRODO: Yup.bool().oneOf([true], 'Musisz wyrazić zgodę na RODO'),
});

export const Zagubione = () => {
    return (
        <Container fluid style={{
            backgroundImage: 'url(/image/misspet.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '60px'
        }}>
            <Formik
                initialValues={{
                    imiePupila: '',
                    rodzaj: '',
                    wiek: '',
                    plec: '',
                    wielkosc: '',
                    przewidzianaNagroda: '',
                    umaszczenie: '',
                    obroza: '',
                    adresZgubienia: '',
                    okolicznosciZgubienia: '',
                    imieZglaszajacego: '',
                    nazwiskoZglaszajacego: '',
                    telefon: '',
                    miejscowosc: '',
                    kodPocztowy: '',
                    ulica: '',
                    email: '',
                    captcha: '',
                    zgodaRODO: false,
                }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ handleSubmit }) => (
                    <FormikForm onSubmit={handleSubmit} style={{ border: '10px solid #ccc', padding: '60px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Row>
                            <Tabs defaultActiveKey="danePupila" id="zagubiony" className="mb-3">
                                <Tab eventKey="danePupila" title="Dane Pupila">
                                    <Row><h3><center>---===DANE ZAGUBIONEGO ZWIERZECIA===---</center></h3></Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Imie pupila</Form.Label>
                                                <Field name="imiePupila" type="text" className="form-control" />
                                                <ErrorMessage name="imiePupila" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Rodzaj</Form.Label>
                                                <Field as="select" name="rodzaj" className="form-control">
                                                    <option value="">Wybierz rodzaj</option>
                                                    <option value="Pies">Pies</option>
                                                    <option value="Kot">Kot</option>
                                                    <option value="Inne">Inny</option>
                                                </Field>
                                                <ErrorMessage name="rodzaj" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Wiek</Form.Label>
                                                <Field name="wiek" type="text" className="form-control" />
                                                <ErrorMessage name="wiek" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Plec</Form.Label>
                                                <div>
                                                    <Field type="radio" name="plec" value="Samiec" /> Samiec
                                                    <Field type="radio" name="plec" value="Samica" /> Samica
                                                    <Field type="radio" name="plec" value="Brak informacji" /> Brak informacji
                                                </div>
                                                <ErrorMessage name="plec" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Wielkosc</Form.Label>
                                                <Field as="select" name="wielkosc" className="form-control">
                                                    <option value="">Wybierz wielkość</option>
                                                    <option value="do 15 cm">do 15 cm</option>
                                                    <option value="od 15 do 25cm">od 15 do 25cm</option>
                                                    <option value="od 25 do 35cm">od 25 do 35cm</option>
                                                    <option value="powyzej 35 cm">powyżej 35 cm</option>
                                                </Field>
                                                <ErrorMessage name="wielkosc" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Szczepienia</Form.Label>
                                                <Field type="checkbox" name="szczepienia" className="form-check-input" />
                                                <ErrorMessage name="szczepienia" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Przewidziana nagroda:</Form.Label>
                                                <Field name="przewidzianaNagroda" type="text" className="form-control" />
                                                <ErrorMessage name="przewidzianaNagroda" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="formFile" className="mb-3">
                                                <Form.Label>Aktualne zdjecie pupila</Form.Label>
                                                <Field name="zdjeciePupila" type="file" className="form-control" />
                                                <ErrorMessage name="zdjeciePupila" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="daneDodatkowe" title="Dane dodatkowe">
                                    <Row><h3><center>---===DANE DODATKOWE ZAGUBIONEGO ZWIERZECIA===---</center></h3></Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Umaszczenie</Form.Label>
                                                <Field name="umaszczenie" type="text" className="form-control" />
                                                <ErrorMessage name="umaszczenie" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Obroza / szelki</Form.Label>
                                                <Field name="obroza" type="text" className="form-control" />
                                                <ErrorMessage name="obroza" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Tresura</Form.Label>
                                                <Field type="checkbox" name="tresura" className="form-check-input" />
                                                <ErrorMessage name="tresura" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3">
                                            <>
                                                <FloatingLabel controlId="floatingTextarea" label="Adres miejsca zgubienia:" className="mb-3">
                                                    <Field as="textarea" name="adresZgubienia" className="form-control" />
                                                    <ErrorMessage name="adresZgubienia" component="div" className="text-danger" />
                                                </FloatingLabel>
                                                <FloatingLabel controlId="floatingTextarea2" label="Okolicznosci zgubienia:">
                                                    <Field as="textarea" name="okolicznosciZgubienia" className="form-control" style={{ height: '100px' }} />
                                                    <ErrorMessage name="okolicznosciZgubienia" component="div" className="text-danger" />
                                                </FloatingLabel>
                                            </>
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Col xs={4}></Col>
                                        <Col xs={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Zgoda</Form.Label>
                                                <Field type="checkbox" name="zgoda" className="form-check-input" />
                                                <ErrorMessage name="zgoda" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4}></Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="DaneZglaszajacego" title="Dane Zglaszajacego">
                                    <Row><h3><center>---===DANE ZGLASZAJACEGO ZAGUBIENIE===---</center></h3></Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Imie</Form.Label>
                                                <Field name="imieZglaszajacego" type="text" className="form-control" />
                                                <ErrorMessage name="imieZglaszajacego" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Nazwisko</Form.Label>
                                                <Field name="nazwiskoZglaszajacego" type="text" className="form-control" />
                                                <ErrorMessage name="nazwiskoZglaszajacego" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Telefon</Form.Label>
                                                <Field name="telefon" type="text" className="form-control" />
                                                <ErrorMessage name="telefon" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Miejscowosc</Form.Label>
                                                <Field name="miejscowosc" type="text" className="form-control" />
                                                <ErrorMessage name="miejscowosc" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Kod pocztowy</Form.Label>
                                                <Field name="kodPocztowy" type="text" className="form-control" />
                                                <ErrorMessage name="kodPocztowy" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ulica, nr. domu</Form.Label>
                                                <Field name="ulica" type="text" className="form-control" />
                                                <ErrorMessage name="ulica" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>mail</Form.Label>
                                                <Field name="email" type="text" className="form-control" />
                                                <ErrorMessage name="email" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src="public/image/capcha.jpg" />
                                            </Card>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Przepisz kod z obrazka</Form.Label>
                                                <Field name="captcha" type="text" className="form-control" />
                                                <ErrorMessage name="captcha" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>RODO</Form.Label>
                                                <Field type="checkbox" name="zgodaRODO" className="form-check-input" />
                                                <ErrorMessage name="zgodaRODO" component="div" className="text-danger" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Label>Zaloz konto (nieobowiazkowe)</Form.Label>
                                            <FloatingLabel controlId="floatingInput" label="Podaj Mail" className="mb-3">
                                                <Field name="emailKonto" type="email" className="form-control" placeholder="name@example.com" />
                                                <ErrorMessage name="emailKonto" component="div" className="text-danger" />
                                            </FloatingLabel>
                                            <FloatingLabel controlId="floatingPassword" label="Podaj haslo">
                                                <Field name="hasloKonto" type="password" className="form-control" placeholder="Haslo" />
                                                <ErrorMessage name="hasloKonto" component="div" className="text-danger" />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Button variant="primary" type="submit">Wyslij zgloszenie</Button>{' '}
                                    </Row>
                                </Tab>
                            </Tabs>
                        </Row>
                    </FormikForm>
                )}
            </Formik>
        </Container>
    );
}