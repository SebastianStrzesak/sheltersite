import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

const customMarker = new L.icon({
    iconUrl: '/image/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const validationSchema = Yup.object().shape({
    rasa: Yup.string().required('Pole jest wymagane'),
    umaszczenie: Yup.string().required('Pole jest wymagane'),
    wielkosc: Yup.string().required('Pole jest wymagane'),
    adres: Yup.string().required('Pole jest wymagane'),
    znaki: Yup.string().required('Pole jest wymagane'),
    imie: Yup.string().required('Pole jest wymagane'),
    nazwisko: Yup.string().required('Pole jest wymagane'),
    adresZglaszajacego: Yup.string().required('Pole jest wymagane'),
    telefon: Yup.string()
        .matches(/^\d{9}$/, 'Numer telefonu musi składać się z 9 cyfr')
        .required('Pole jest wymagane'),
    zgoda: Yup.boolean().oneOf([true], 'Musisz zaakceptować regulamin')
});

export const Znalezione = () => {
    const [markerPosition, setMarkerPosition] = useState([52.2297, 21.0122]);

    const DraggableMarker = () => {
        const [position, setPosition] = useState(markerPosition);

        const eventHandlers = {
            dragend() {
                const marker = markerRef.current;
                if (marker != null) {
                    setPosition(marker.getLatLng());
                    setMarkerPosition(marker.getLatLng());
                }
            }
        };

        const markerRef = React.useRef(null);

        return (
            <Marker
                draggable
                eventHandlers={eventHandlers}
                position={position}
                ref={markerRef}
                icon={customMarker}
            >
                <Popup>
                    Znalezione miejsce
                </Popup>
            </Marker>
        );
    };

    return (
        <Container fluid style={{
            backgroundImage: 'url(/image/found.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '60px'
        }}>
            <Formik
                initialValues={{
                    rasa: '',
                    umaszczenie: '',
                    wielkosc: '',
                    adres: '',
                    znaki: '',
                    imie: '',
                    nazwisko: '',
                    adresZglaszajacego: '',
                    telefon: '',
                    zgoda: false
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('Form data', values);
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} style={{
                        border: '10px solid #ccc',
                        padding: '60px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <Row><h3><center>---===DANE ZNALEZIONEGO ZWIERZECIA===---</center></h3></Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Rasa</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="rasa"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.rasa}
                                        isInvalid={!!errors.rasa && touched.rasa}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.rasa}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Umaszczenie</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="umaszczenie"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.umaszczenie}
                                        isInvalid={!!errors.umaszczenie && touched.umaszczenie}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.umaszczenie}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Wielkosc</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="wielkosc"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.wielkosc}
                                        isInvalid={!!errors.wielkosc && touched.wielkosc}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.wielkosc}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Row>
                                <Form.Group className="mb-3">
                                    <>
                                        <FloatingLabel
                                            controlId="floatingTextarea"
                                            label="Adres miejsce i czas znalezienia:"
                                            className="mb-3"
                                        >
                                            <Form.Control
                                                as="textarea"
                                                name="adres"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.adres}
                                                isInvalid={!!errors.adres && touched.adres}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.adres}</Form.Control.Feedback>
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingTextarea2" label="Znaki szczegolne / uwagi:">
                                            <Form.Control
                                                as="textarea"
                                                name="znaki"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.znaki}
                                                style={{ height: '100px' }}
                                                isInvalid={!!errors.znaki && touched.znaki}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.znaki}</Form.Control.Feedback>
                                        </FloatingLabel>
                                    </>
                                </Form.Group>
                            </Row>
                        </Row>
                        <Row><h3><center>---===WSKAZ NA MAPIE MIEJSCE ZNALEZIENIA===---</center></h3></Row>
                        <Row>
                            <MapContainer center={markerPosition} zoom={13} style={{ height: "400px", width: "100%" }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <DraggableMarker />
                            </MapContainer>
                        </Row>

                        <Row>
                            <Row><h3><center>---===DANE ZGLASZAJACEGO===---</center></h3></Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Imie</Form.Label>
                                    <Form.Control
                                        type="text"
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
                                    <Form.Label>Nazwisko</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nazwisko"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nazwisko}
                                        isInvalid={!!errors.nazwisko && touched.nazwisko}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.nazwisko}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Adres</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="adresZglaszajacego"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.adresZglaszajacego}
                                        isInvalid={!!errors.adresZglaszajacego && touched.adresZglaszajacego}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.adresZglaszajacego}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Telefon</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="telefon"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.telefon}
                                        isInvalid={!!errors.telefon && touched.telefon}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.telefon}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}></Col>
                            <Col xs={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Zgoda</Form.Label>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        name="zgoda"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        checked={values.zgoda}
                                        isInvalid={!!errors.zgoda && touched.zgoda}
                                        label="Potwierdzam zapoznanie sie z regulaminem RODO o ochronie danych osobowych"
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.zgoda}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col xs={4}></Col>
                            <Button variant="primary" type="submit">Wyslij zgloszenie</Button>
                        </Row>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};