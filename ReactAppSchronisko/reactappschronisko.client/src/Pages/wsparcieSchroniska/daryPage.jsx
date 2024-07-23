import React from 'react';
import Form from 'react-bootstrap/Form';
import 'react-calendar/dist/Calendar.css';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    donor_name: Yup.string().required('Pole jest wymagane'),
    donor_email: Yup.string()
        .email('Nieprawidłowy adres email')
        .required('Pole jest wymagane'),
    donor_phone: Yup.string()
        .matches(/^\d{9}$/, 'Telefon musi składać się z 9 cyfr')
        .required('Pole jest wymagane'),
    gift_type: Yup.string().required('Pole jest wymagane'),
    gift_description: Yup.string().required('Pole jest wymagane'),
    gift_delivery_date: Yup.date().required('Pole jest wymagane'),
});

export const Dary = () => {
    return (
        <Formik
            initialValues={{
                donor_name: '',
                donor_email: '',
                donor_phone: '',
                gift_type: 'food',
                gift_description: '',
                gift_delivery_date: '',
                can_deliver: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Form data', values);
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div className="gift-donation-container" style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className="gift-donation-form" style={{ width: '50%' }}>
                            <div className="form-group">
                                <label htmlFor="donor_name">Dane Darczyncy:</label>
                                <input
                                    type="text"
                                    id="donor_name"
                                    name="donor_name"
                                    placeholder="Wprowadz swoje dane (osoba / firma / instytucja)"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.donor_name}
                                    className={touched.donor_name && errors.donor_name ? "is-invalid" : ""}
                                />
                                {touched.donor_name && errors.donor_name ? (
                                    <div className="invalid-feedback">{errors.donor_name}</div>
                                ) : null}
                            </div>

                            <div className="form-group" style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ marginRight: '20px' }}>
                                    <label htmlFor="donor_email">Adres e-mail:</label>
                                    <input
                                        type="email"
                                        id="donor_email"
                                        name="donor_email"
                                        placeholder="Wprowadz adres e-mail"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.donor_email}
                                        className={touched.donor_email && errors.donor_email ? "is-invalid" : ""}
                                    />
                                    {touched.donor_email && errors.donor_email ? (
                                        <div className="invalid-feedback">{errors.donor_email}</div>
                                    ) : null}
                                </div>
                                <div style={{ marginRight: '20px' }}>
                                    <label htmlFor="donor_phone">Telefon:</label>
                                    <input
                                        type="tel"
                                        id="donor_phone"
                                        name="donor_phone"
                                        placeholder="Wprowadz nr. telefonu"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.donor_phone}
                                        className={touched.donor_phone && errors.donor_phone ? "is-invalid" : ""}
                                    />
                                    {touched.donor_phone && errors.donor_phone ? (
                                        <div className="invalid-feedback">{errors.donor_phone}</div>
                                    ) : null}
                                </div>
                                <div style={{ marginRight: '20px' }}>
                                    <label htmlFor="gift_type">Rodzaj daru:</label>
                                    <select
                                        id="gift_type"
                                        name="gift_type"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.gift_type}
                                        className={touched.gift_type && errors.gift_type ? "is-invalid" : ""}
                                    >
                                        <option value="food">Zywnosc</option>
                                        <option value="toys">Zabawki</option>
                                        <option value="bedding">Posciel</option>
                                        <option value="medical_supplies">Artykuly medyczne</option>
                                        <option value="other">Inne</option>
                                    </select>
                                    {touched.gift_type && errors.gift_type ? (
                                        <div className="invalid-feedback">{errors.gift_type}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <Form>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label="Mozesz dostarczyc?"
                                            name="can_deliver"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            checked={values.can_deliver}
                                        />
                                    </Form>
                                </div>
                            </div>

                            <div className="form-group" style={{ width: '100%' }}>
                                <label htmlFor="gift_description">Opis daru:</label>
                                <textarea
                                    id="gift_description"
                                    name="gift_description"
                                    rows="3"
                                    style={{ width: '100%' }}
                                    placeholder="Opisz dar, ktory chcesz podarowac"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gift_description}
                                    className={touched.gift_description && errors.gift_description ? "is-invalid" : ""}
                                ></textarea>
                                {touched.gift_description && errors.gift_description ? (
                                    <div className="invalid-feedback">{errors.gift_description}</div>
                                ) : null}
                            </div>

                            <div className="form-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <div style={{ marginRight: '20px' }}>
                                    <label htmlFor="gift_delivery_date">Wybierz date dostawy:</label>
                                    <input
                                        type="date"
                                        id="gift_delivery_date"
                                        name="gift_delivery_date"
                                        style={{ border: '2px solid #ccc', borderRadius: '5px', padding: '5px' }}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.gift_delivery_date}
                                        className={touched.gift_delivery_date && errors.gift_delivery_date ? "is-invalid" : ""}
                                    />
                                    {touched.gift_delivery_date && errors.gift_delivery_date ? (
                                        <div className="invalid-feedback">{errors.gift_delivery_date}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="gift_image">Wybierz zdjecie:</label>
                                    <input
                                        type="file"
                                        id="gift_image"
                                        name="gift_image"
                                        accept="image/*"
                                        style={{ border: '2px solid #ccc', borderRadius: '5px', padding: '5px' }}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div style={{ margin: '0 auto' }}>
                                    <br />
                                    <Button variant="success" type="submit">Zatwierdz</Button>
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '50%', paddingLeft: '20px' }}>
                            <img src="/image/thanks.gif" alt="Dary" style={{ width: '100%' }} />
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
};