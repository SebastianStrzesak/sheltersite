import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchemaGroup = Yup.object().shape({
    lider: Yup.string().required('Pole jest wymagane'),
    task: Yup.string().required('Pole jest wymagane'),
    formHorizontalRadios: Yup.string().required('Pole jest wymagane'),
    formHorizontalCheck: Yup.boolean().oneOf([true], 'Pole jest wymagane'),
});

const validationSchemaWork = Yup.object().shape({
    lider: Yup.string().required('Pole jest wymagane'),
    task: Yup.string().required('Pole jest wymagane'),
    formHorizontalRadios: Yup.string().required('Pole jest wymagane'),
    group1: Yup.string().required('Pole jest wymagane'),
});

export const Wolontariat = () => {
    return (
        <Row>
            <Col sm={6}>
                <Formik
                    initialValues={{
                        lider: '',
                        task: '',
                        formHorizontalRadios: '',
                        formHorizontalCheck: false,
                    }}
                    validationSchema={validationSchemaGroup}
                    onSubmit={(values) => {
                        console.log('Form data', values);
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalLider">
                                <h3>---===Zgloszenie grupy wolontariuszy===---<br /><br /></h3>
                                <Form.Label column sm={3}>
                                    Kierownik grupy:
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        type="text"
                                        name="lider"
                                        placeholder="Imie, Nazwisko, Telefon"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lider}
                                        className={touched.lider && errors.lider ? 'is-invalid' : ''}
                                    />
                                    {touched.lider && errors.lider ? (
                                        <div className="invalid-feedback">{errors.lider}</div>
                                    ) : null}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTask">
                                <Form.Label column sm={3}>
                                    Jak chcecie pomoc:
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        type="text"
                                        name="task"
                                        placeholder="Opis sposobu pomocy"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.task}
                                        className={touched.task && errors.task ? 'is-invalid' : ''}
                                    />
                                    {touched.task && errors.task ? (
                                        <div className="invalid-feedback">{errors.task}</div>
                                    ) : null}
                                </Col>
                            </Form.Group>

                            <fieldset>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label as="legend" column sm={3}>
                                        Wielkosc grupy:
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Check
                                            type="radio"
                                            label="5-10"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value="5-10"
                                            checked={values.formHorizontalRadios === '5-10'}
                                            className={touched.formHorizontalRadios && errors.formHorizontalRadios ? 'is-invalid' : ''}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="11-15"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value="11-15"
                                            checked={values.formHorizontalRadios === '11-15'}
                                            className={touched.formHorizontalRadios && errors.formHorizontalRadios ? 'is-invalid' : ''}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="20+"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value="20+"
                                            checked={values.formHorizontalRadios === '20+'}
                                            className={touched.formHorizontalRadios && errors.formHorizontalRadios ? 'is-invalid' : ''}
                                        />
                                        {touched.formHorizontalRadios && errors.formHorizontalRadios ? (
                                            <div className="invalid-feedback">{errors.formHorizontalRadios}</div>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                            </fieldset>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                <Col sm={{ span: 9, offset: 3 }}>
                                    <Form.Check
                                        label="Pelnoletni opiekun?"
                                        name="formHorizontalCheck"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        checked={values.formHorizontalCheck}
                                        className={touched.formHorizontalCheck && errors.formHorizontalCheck ? 'is-invalid' : ''}
                                    />
                                    {touched.formHorizontalCheck && errors.formHorizontalCheck ? (
                                        <div className="invalid-feedback">{errors.formHorizontalCheck}</div>
                                    ) : null}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 9, offset: 3 }}>
                                    <Button type="submit">Zglos grupe!</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    )}
                </Formik>
            </Col>

            <Col sm={6}>
                <img src="/image/yes.gif" alt="Wolontariat" />
            </Col>

            <Row>
                <br />
                <hr />
                <br />
                <Col sm={6}>
                    <Formik
                        initialValues={{
                            lider: '',
                            task: '',
                            formHorizontalRadios: '',
                            group1: '',
                        }}
                        validationSchema={validationSchemaWork}
                        onSubmit={(values) => {
                            console.log('Form data', values);
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalLider">
                                    <h3>---===Prace spoleczne===---<br /><br /></h3>
                                    <Form.Label column sm={3}>
                                        Imie i nazwisko:
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            type="text"
                                            name="lider"
                                            placeholder="Imie, Nazwisko, Telefon"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lider}
                                            className={touched.lider && errors.lider ? 'is-invalid' : ''}
                                        />
                                        {touched.lider && errors.lider ? (
                                            <div className="invalid-feedback">{errors.lider}</div>
                                        ) : null}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalTask">
                                    <Form.Label column sm={3}>
                                        Organ zlecajacy prace:
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            type="text"
                                            name="task"
                                            placeholder="Organ zlecajacy prace"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.task}
                                            className={touched.task && errors.task ? 'is-invalid' : ''}
                                        />
                                        {touched.task && errors.task ? (
                                            <div className="invalid-feedback">{errors.task}</div>
                                        ) : null}
                                    </Col>
                                </Form.Group>

                                <fieldset>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label as="legend" column sm={3}>
                                            Ilosc godzin do wyrobienia:
                                        </Form.Label>
                                        <Col sm={9}>
                                            <Form.Check
                                                type="radio"
                                                label="<10"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value="<10"
                                                checked={values.formHorizontalRadios === '<10'}
                                                className={touched.formHorizontalRadios && errors.formHorizontalRadios ? 'is-invalid' : ''}
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="11-15"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value="11-15"
                                                checked={values.formHorizontalRadios === '11-15'}
                                                className={touched.formHorizontalRadios && errors.formHorizontalRadios ? 'is-invalid' : ''}
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="20+"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios3"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value="20+"
                                                checked={values.formHorizontalRadios === '20+'}
                                                className={touched.formHorizontalRadios && errors.formHorizontalRadios ? 'is-invalid' : ''}
                                            />
                                            {touched.formHorizontalRadios && errors.formHorizontalRadios ? (
                                                <div className="invalid-feedback">{errors.formHorizontalRadios}</div>
                                            ) : null}
                                        </Col>
                                    </Form.Group>
                                </fieldset>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm={3}>
                                        Ilosc miesiecy do wyrobienia:
                                    </Form.Label>
                                    <Col sm={9}>
                                        <br />
                                        <Form.Check
                                            inline
                                            label="1"
                                            name="group1"
                                            type="radio"
                                            id="inline-radio-1"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value="1"
                                            checked={values.group1 === '1'}
                                            className={touched.group1 && errors.group1 ? 'is-invalid' : ''}
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            name="group1"
                                            type="radio"
                                            id="inline-radio-2"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value="2"
                                            checked={values.group1 === '2'}
                                            className={touched.group1 && errors.group1 ? 'is-invalid' : ''}
                                        />
                                        <Form.Check
                                            inline
                                            label="3"
                                            name="group1"
                                            type="radio"
                                            id="inline-radio-3"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value="3"
                                            checked={values.group1 === '3'}
                                            className={touched.group1 && errors.group1 ? 'is-invalid' : ''}
                                        />
                                        <Form.Check
                                            inline
                                            label="4"
                                            name="group1"
                                            type="radio"
                                            id="inline-radio-4"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value="4"
                                            checked={values.group1 === '4'}
                                            className={touched.group1 && errors.group1 ? 'is-invalid' : ''}
                                        />
                                        <Form.Check
                                            inline
                                            label="5"
                                            name="group1"
                                            type="radio"
                                            id="inline-radio-5"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value="5"
                                            checked={values.group1 === '5'}
                                            className={touched.group1 && errors.group1 ? 'is-invalid' : ''}
                                        />
                                        <Form.Check
                                            inline
                                            label="6"
                                            name="group1"
                                            type="radio"
                                            id="inline-radio-6"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value="6"
                                            checked={values.group1 === '6'}
                                            className={touched.group1 && errors.group1 ? 'is-invalid' : ''}
                                        />
                                        <Form.Check
                                            inline
                                            label="7 i wiecej"
                                            name="group1"
                                            type="radio"
                                            id="inline-radio-7"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value="7+"
                                            checked={values.group1 === '7+'}
                                            className={touched.group1 && errors.group1 ? 'is-invalid' : ''}
                                        />
                                        {touched.group1 && errors.group1 ? (
                                            <div className="invalid-feedback">{errors.group1}</div>
                                        ) : null}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Col sm={{ span: 9, offset: 3 }}>
                                        <Button type="submit">Zglos prace!</Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        )}
                    </Formik>
                </Col>
                <Col sm={6}>
                    <br /><br />
                    <img src="/image/praca.jpg" alt="Wolontariat" width="613" height="400" />
                </Col>
            </Row>
        </Row>
    );
};
