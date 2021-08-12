import React, { useState } from 'react';
import SectionWrapper from './../../generic/SectionWrapper';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from '../../generic/FormInput';
import Button from './../../generic/Button';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Snackbar from '../../generic/Snackbar';
import { AnimatePresence } from 'framer-motion';
import ContactLinks from './ContactLinks';
import { useInView } from 'react-intersection-observer';

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
	const [snackbar, setSnackbar] = useState({
		shouldShow: false,
		type: '',
		message: '',
	});

	const [contactSectionRef, contactSectionInView] = useInView({
		threshold: 0.35,
		root: null,
	});

	/* No need to prevent default action when form is submitted as Formik will do that automatically.
	Formik will call this function when the form is submitted and pass two arguments.
	The values object contains the names and values of the form inputs.
	The second argument is an object that contains various methods like resetForm, setSubmitting */
	async function handleSubmit(values, { resetForm, setSubmitting }) {
		try {
			// sending email; the response object will look like {status: 200, text: "OK"}
			const response = await emailjs.send(
				process.env.GATSBY_EMAILJS_SERVICE_ID,
				process.env.GATSBY_EMAILJS_TEMPLATE_ID,
				values,
				process.env.GATSBY_EMAILJS_USER_ID
			);
			// if the request was not successful then throw an error
			if (response.text !== 'OK') {
				throw new Error('Failed to send message. Please try again later.');
			}

			setSubmitting(false);
			resetForm();

			// show snackbar with success message
			setSnackbar({ shouldShow: true, type: 'success', message: 'Message sent successfully!' });
		} catch (error) {
			// show snackbar with error message
			setSnackbar({ shouldShow: true, type: 'error', message: error.message });
		}
	}
	return (
		<SectionWrapper
			title="Get in touch"
			id="contact"
			ref={contactSectionRef}
			sectionInView={contactSectionInView}
		>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnChange={false}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => {
					return (
						<FormComponent noValidate autoComplete="off">
							<FormInput elementType="basic" type="text" label="Name" name="name" />
							<FormInput elementType="basic" type="email" label="Email" name="email" />
							<FormInput elementType="textarea" label="Message" name="message" />

							<Button
								text={isSubmitting ? 'Sending...' : 'Send Message'}
								type="submit"
								isDisabled={isSubmitting}
							/>
						</FormComponent>
					);
				}}
			</Formik>
			<ContactLinks />
			<AnimatePresence>
				{snackbar.shouldShow && <Snackbar snackbar={snackbar} setSnackbar={setSnackbar} />}
			</AnimatePresence>
		</SectionWrapper>
	);
}

export default Contact;

const FormComponent = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 64rem;
	margin: 0 auto 6rem auto;
`;
