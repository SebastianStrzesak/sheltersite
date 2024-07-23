import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Custom Date Picker Component
const CustomDatePicker = ({ selected, onChange }) => {
    return (
        <DatePicker
            selected={selected}
            onChange={onChange}
            dateFormat="dd/MM/yyyy"
            className="form-control"
            wrapperClassName="d-inline-block"
        />
    );
};

const phoneRegExp = /^[0-9]{9}$/;

const validationSchema = Yup.object().shape({
    ownerName: Yup.string().required('Imię i nazwisko jest wymagane'),
    phone: Yup.string().matches(phoneRegExp, 'Numer telefonu musi mieć 9 cyfr').required('Numer telefonu jest wymagany'),
    petName: Yup.string().required('Imię pupila jest wymagane'),
    breed: Yup.string().required('Rasa jest wymagana'),
    weight: Yup.number().required('Waga jest wymagana'),
    startDate: Yup.date().required('Data rozpoczęcia jest wymagana'),
    endDate: Yup.date().required('Data zakończenia jest wymagana'),
});

const BasicPackageForm = () => {
    const [basicStartDate, setBasicStartDate] = useState(null);
    const [basicEndDate, setBasicEndDate] = useState(null);

    return (
        <Formik
            initialValues={{
                ownerName: '',
                phone: '',
                petName: '',
                startDate: null,
                endDate: null,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ handleSubmit, setFieldValue }) => (
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col sm={6}>
                            <Form.Group as={Row} className="mb-3">
                                <h3><br />Pakiet Podstawowy</h3>
                                <Form.Label column sm={3}>
                                    Imie i nazwisko (wlasciciela):
                                </Form.Label>
                                <Col sm={9}>
                                    <Field name="ownerName" type="text" placeholder="Imie i nazwisko" className="form-control" />
                                    <ErrorMessage name="ownerName" component="div" className="text-danger" />
                                </Col>
                                <Form.Label column sm={3}>
                                    Telefon kontaktowy:
                                </Form.Label>
                                <Col sm={9}>
                                    <Field name="phone" type="text" placeholder="Telefon" className="form-control" />
                                    <ErrorMessage name="phone" component="div" className="text-danger" />
                                </Col>
                                <Form.Label column sm={3}>
                                    Imie pupila:
                                </Form.Label>
                                <Col sm={9}>
                                    <Field name="petName" type="text" placeholder="np. Rex" className="form-control" />
                                    <ErrorMessage name="petName" component="div" className="text-danger" />
                                </Col>
                                <Form.Label column sm={3}>
                                    Data rozpoczecia oraz zakonczenia:
                                </Form.Label>
                                <Col sm={9}>
                                    Start--->Koniec:<br />
                                    <CustomDatePicker selected={basicStartDate} onChange={(date) => { setBasicStartDate(date); setFieldValue('startDate', date); }} />
                                    <ErrorMessage name="startDate" component="div" className="text-danger" />
                                    <CustomDatePicker selected={basicEndDate} onChange={(date) => { setBasicEndDate(date); setFieldValue('endDate', date); }} />
                                    <ErrorMessage name="endDate" component="div" className="text-danger" />
                                </Col>
                            </Form.Group>
                            <Button type="submit">Zarezerwuj!</Button>
                            <br />
                            <br />
                            <h5>Koszt doby: 20 PLN</h5>
                        </Col>
                        <Col sm={6}>
                            <img src="/image/hotel1.jpg" alt="Hotel 1" width="613" height="400" />
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
};

const PremiumPackageForm = () => {
    const [premiumStartDate, setPremiumStartDate] = useState(null);
    const [premiumEndDate, setPremiumEndDate] = useState(null);
    const [premiumStars, setPremiumStars] = useState(1);

    const calculateCost = () => {
        let baseCost = 0;
        switch (premiumStars) {
            case 1: baseCost = 29; break;
            case 2: baseCost = 35; break;
            case 3: baseCost = 45; break;
            case 4: baseCost = 55; break;
            case 5: baseCost = 75; break;
            default: baseCost = 0; break;
        }
        return baseCost;
    };

    return (
        <Formik
            initialValues={{
                ownerName: '',
                phone: '',
                petName: '',
                startDate: null,
                endDate: null,
                premiumStars: 1,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ handleSubmit, setFieldValue }) => (
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col sm={6}>
                            <img src="/image/hotel2.jpg" alt="Hotel 2" width="613" height="400" />
                        </Col>
                        <Col sm={6}>
                            <Form.Group as={Row} className="mb-3">
                                <h3><br />Pakiet Premium</h3>
                                <Form.Label column sm={3}>
                                    Imie i nazwisko (wlasciciela):
                                </Form.Label>
                                <Col sm={9}>
                                    <Field name="ownerName" type="text" placeholder="Imie i nazwisko" className="form-control" />
                                    <ErrorMessage name="ownerName" component="div" className="text-danger" />
                                </Col>
                                <Form.Label column sm={3}>
                                    Telefon kontaktowy:
                                </Form.Label>
                                <Col sm={9}>
                                    <Field name="phone" type="text" placeholder="Telefon" className="form-control" />
                                    <ErrorMessage name="phone" component="div" className="text-danger" />
                                </Col>
                                <Form.Label column sm={3}>
                                    Imie pupila:
                                </Form.Label>
                                <Col sm={9}>
                                    <Field name="petName" type="text" placeholder="np. Azor" className="form-control" />
                                    <ErrorMessage name="petName" component="div" className="text-danger" />
                                </Col>
                                <Form.Label column sm={3}>
                                    Jakosc pokoju:
                                </Form.Label>
                                <Col sm={9}>
                                    <Field name="premiumStars" type="radio" value="1" checked={premiumStars === 1} onChange={() => { setPremiumStars(1); setFieldValue('premiumStars', 1); }} /> *
                                    <Field name="premiumStars" type="radio" value="2" checked={premiumStars === 2} onChange={() => { setPremiumStars(2); setFieldValue('premiumStars', 2); }} /> **
                                    <Field name="premiumStars" type="radio" value="3" checked={premiumStars === 3} onChange={() => { setPremiumStars(3); setFieldValue('premiumStars', 3); }} /> ***
                                    <Field name="premiumStars" type="radio" value="4" checked={premiumStars === 4} onChange={() => { setPremiumStars(4); setFieldValue('premiumStars', 4); }} /> ****
                                    <Field name="premiumStars" type="radio" value="5" checked={premiumStars === 5} onChange={() => { setPremiumStars(5); setFieldValue('premiumStars', 5); }} /> *****
                                </Col>
                                <Form.Label column sm={3}>
                                    Data rozpoczecia oraz zakonczenia:
                                </Form.Label>
                                <Col sm={9}>
                                    Start--->Koniec:<br />
                                    <CustomDatePicker selected={premiumStartDate} onChange={(date) => { setPremiumStartDate(date); setFieldValue('startDate', date); }} />
                                    <ErrorMessage name="startDate" component="div" className="text-danger" />
                                    <CustomDatePicker selected={premiumEndDate} onChange={(date) => { setPremiumEndDate(date); setFieldValue('endDate', date); }} />
                                    <ErrorMessage name="endDate" component="div" className="text-danger" />
                                </Col>
                            </Form.Group>
                            <Button type="submit">Zarezerwuj!</Button>
                            <br />
                            <br />
                            <h5>Koszt doby: {calculateCost()} PLN</h5>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
};

const DeluxePackageForm = () => {
    const [deluxeStartDate, setDeluxeStartDate] = useState(null);
    const [deluxeEndDate, setDeluxeEndDate] = useState(null);
    const [massage, setMassage] = useState(false);
    const [behaviorist, setBehaviorist] = useState(false);
    const [vet, setVet] = useState(false);
    const [cosmetologist, setCosmetologist] = useState(false);

    const calculateCost = () => {
        let baseCost = 100; // Koszt podstawowy za dobę

        // Dodatkowe usługi
        if (massage) baseCost += 30;
        if (behaviorist) baseCost += 50;
        if (vet) baseCost += 80;
        if (cosmetologist) baseCost += 40;

        return baseCost;
    };

    return (
        <Formik
            initialValues={{
                ownerName: '',
                phone: '',
                petName: '',
                breed: '',
                weight: '',
                startDate: null,
                endDate: null,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ handleSubmit, setFieldValue }) => (
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col sm={6}>
                            <Form.Group as={Row} className="mb-3">
                                <h3><br />Pakiet Deluxe</h3>
                                <Form.Label column sm={3}>
                                    Imie i nazwisko (wlasciciela):
                                </Form.Label>
                                <Col sm={9}>
                                    <Field name="ownerName" type="text" placeholder="Imie i nazwisko" className="form-control" />
                                    <ErrorMessage name="ownerName" component="div" className="text-danger" />
                                </Col>
                                <Form.Label column sm={3}>
                                    Telefon kontaktowy:
                                </Form.Label>
                                <Col sm={9}>
                                    <Field name="phone" type="text" placeholder="Telefon" className="form-control" />
                                    <ErrorMessage name="phone" component="div" className="text-danger" />
                                </Col>
                                <Form.Label column sm={3}>
                                    Imie psa:
                                </Form.Label>
                                <Col sm={9}>
                                    <Field name="petName" type="text" placeholder="Imie psa" className="form-control" />
                                    <ErrorMessage name="petName" component="div" className="text-danger" />
                                </Col>
                                <Form.Label column sm={3}>
                                    Rasa:
                                </Form.Label>
                                <Col sm={9}>
                                    <Field name="breed" type="text" placeholder="Rasa" className="form-control" />
                                    <ErrorMessage name="breed" component="div" className="text-danger" />
                                </Col>
                                <Form.Label column sm={3}>
                                    Waga (kg):
                                </Form.Label>
                                <Col sm={9}>
                                    <Field name="weight" type="number" placeholder="Waga" className="form-control" />
                                    <ErrorMessage name="weight" component="div" className="text-danger" />
                                </Col>
                                <Form.Label column sm={3}>
                                    Data przyjazdu:
                                </Form.Label>
                                <Col sm={9}>
                                    <CustomDatePicker selected={deluxeStartDate} onChange={(date) => { setDeluxeStartDate(date); setFieldValue('startDate', date); }} />
                                    <ErrorMessage name="startDate" component="div" className="text-danger" />
                                </Col>
                                <Form.Label column sm={3}>
                                    Data wyjazdu:
                                </Form.Label>
                                <Col sm={9}>
                                    <CustomDatePicker selected={deluxeEndDate} onChange={(date) => { setDeluxeEndDate(date); setFieldValue('endDate', date); }} />
                                    <ErrorMessage name="endDate" component="div" className="text-danger" />
                                </Col>
                                <Form.Label column sm={3}>
                                    Dodatkowe uslugi:
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch-massage"
                                        label="Masaze"
                                        checked={massage}
                                        onChange={() => { setMassage(!massage); }}
                                    />
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch-behaviorist"
                                        label="Behawiorysta"
                                        checked={behaviorist}
                                        onChange={() => { setBehaviorist(!behaviorist); }}
                                    />
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch-vet"
                                        label="Weterynarz 24/7"
                                        checked={vet}
                                        onChange={() => { setVet(!vet); }}
                                    />
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch-cosmetologist"
                                        label="Kosmetyczka"
                                        checked={cosmetologist}
                                        onChange={() => { setCosmetologist(!cosmetologist); }}
                                    />
                                </Col>
                                <Form.Label column sm={3}>
                                    Dodatkowe uwagi:
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control as="textarea" rows={3} placeholder="Dodatkowe uwagi" />
                                </Col>
                            </Form.Group>
                            <Button type="submit">Zarezerwuj!</Button>
                            <br />
                            <br />
                            <h5>Koszt doby: {calculateCost()} PLN</h5>
                        </Col>
                        <Col sm={6}>
                            <img src="/image/hotel3.jpg" alt="Hotel 3" width="613" height="400" />
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
};

const Hotel = () => {
    return (
        <div>
            <BasicPackageForm />
            <br />
            <hr />
            <br />
            <PremiumPackageForm />
            <br />
            <hr />
            <br />
            <DeluxePackageForm />
        </div>
    );
};

export { Hotel };
