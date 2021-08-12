import React from 'react';
import styled, { css } from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import stylesConfig from '../../style/stylesConfig';

function FormInput(props) {
	return (
		<InputContainer>
			<InputLabel htmlFor={props.name}>{props.label}</InputLabel>
			{props.elementType === 'basic' && (
				<Input type={props.type} id={props.name} name={props.name} />
			)}

			{/* Using function-as-child pattern to render a styled textarea component
			Cannot use Formik's 'as' prop because styled components also has an 'as' prop */}
			{props.elementType === 'textarea' && (
				<Field name={props.name}>
					{({ field }) => (
						<TextAreaInput
							id={field.name}
							name={field.name}
							value={field.value}
							onChange={field.onChange}
							onBlur={field.onBlur}
							rows={6}
						/>
					)}
				</Field>
			)}

			<ErrorMessageComponent component="p" name={props.name} />
		</InputContainer>
	);
}

export default FormInput;

const inputStyles = css`
	width: 100%;
	border: none;
	border-radius: 4px;
	padding: 1.5rem;
	margin-bottom: 1rem;
	font-size: 1.8rem;
	background-color: #2b293b;
	color: ${stylesConfig.bodyFontColor};
	outline: none;
	transition: box-shadow 0.3s;

	&:focus {
		${'' /* box shadow support for Safari */}
		-webkit-appearance: none;
		-webkit-box-shadow: 0 0 2px 2px inset rgb(62, 44, 153);
		box-shadow: 0 0 2px 2px inset rgb(62, 44, 153);
	}
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	&:not(:last-child) {
		margin-bottom: 3rem;
	}
`;

const InputLabel = styled.label`
	color: ${stylesConfig.bodyFontColor};
	font-weight: 600;
	font-size: 2.2rem;
	margin-bottom: 0.8rem;
`;

const Input = styled(Field)`
	${inputStyles}
`;

const TextAreaInput = styled.textarea`
	${inputStyles}
`;

const ErrorMessageComponent = styled(ErrorMessage)`
	font-size: 1.8rem;
	color: ${stylesConfig.colorError};
`;
