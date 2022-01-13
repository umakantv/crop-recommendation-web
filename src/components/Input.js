import React from 'react';
import {Form} from 'react-bootstrap';

function Input({
	label, placeholder, value, onChange, ...props
}) {
	return (
		<div>
			<Form.Group className="mb-3" controlId={`${label}`}>
				<Form.Label>{label}</Form.Label>
				<Form.Control value={value} placeholder={placeholder} onChange={onChange} {...props} />
			</Form.Group>
		</div>
	);
}

export default Input;