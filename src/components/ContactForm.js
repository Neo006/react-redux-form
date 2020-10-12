import React from 'react'
import {Field, reduxForm, SubmissionError} from 'redux-form'

const submit = ({firstName = '', lastName = '', email = ''}) => {
    let error = {};
    let isError = false;

    if (firstName.trim() === '') {
        error.firstName = 'Requierd';
        isError = true;
    }
    if (lastName.trim() === '') {
        error.lastName = 'Requierd';
        isError = true;
    }
    if (email.trim() === '') {
        error.email = 'Requierd';
        isError = true;
    }

    if (isError) {
        throw new SubmissionError(error);
    }
}

const renderField = ({type, label, input, meta: {touched, error}}) => (
    <div className="form-group">
        <label>{label}</label>
        <input {...input} className="form-control" type={type}/>
        {touched && error &&
        <span className="error">{error}</span>}
    </div>
)

const ContactFormFunc = ({handleSubmit}) => {
    return (
        <div className='container mt-4'>
            <form onSubmit={handleSubmit(submit)}>
                <Field name="firstName" label="First Name" type="text" component={renderField} />
                <Field name="lastName" label="Last Name" type="text" component={renderField} />
                <Field name="email" label="Email Name" type="email" component={renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

const ContactForm = reduxForm({
    form: 'contactForm'
})(ContactFormFunc)

export default ContactForm;