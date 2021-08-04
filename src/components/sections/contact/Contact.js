import React from 'react';
import SectionWrapper from './../../generic/SectionWrapper';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from '../../generic/FormInput';
import Button from './../../generic/Button';
import styled from 'styled-components';

// initial form input values
const initialValues = { name: '', email: '', message: '' };

// schema object for contact form validation
const validationSchema = Yup.object({
	name: Yup.string()
		.required('Name is required')
		.min(4, 'Name needs to be at least 4 characters long'),

	email: Yup.string().email('Not a valid email').required('Email is required'),
	message: Yup.string().required('Message is required'),
});

function Contact() {
	function handleSubmit(e) {
		e.preventDefault();
		console.log('form submitted');
	}
	return (
		<SectionWrapper title="Get in touch">
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnChange={false}
				onSubmit={handleSubmit}
			>
				{formik => (
					<FormComponent noValidate>
						<FormInput elementType="basic" type="text" label="Name" name="name" />
						<FormInput elementType="basic" type="email" label="Email" name="email" />
						<FormInput elementType="textarea" label="Message" name="message" />

						<Button text="Send Email" type="submit" />
					</FormComponent>
				)}
			</Formik>
		</SectionWrapper>
	);
}

export default Contact;

const FormComponent = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
