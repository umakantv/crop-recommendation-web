import React, { useReducer, useState } from 'react';
import Input from './components/Input';
import {Button, Modal} from 'react-bootstrap'
import axios from 'axios'

function CropPrediction(props) {
	const [show, setShow] = useState(false);
	const [result, setResult] = useState("RICE");
	const [formData, dispatch] = useReducer((state, newState) => ({
		...state, ...newState,
	}), {
		N: '78',
		P: '35',
		K: '44',
		temperature:  '26.5434085',
		humidity:  '84.6735597',
		ph:  '7.07265622',
		rainfall:  '183.622657',
	})
	const {N, P, K, temperature, humidity, ph, rainfall} = formData
	const onSubmit = (e) => {
		e.preventDefault()
		axios.post('http://localhost:3001/classify', formData)
		.then(response => {
			console.log(response.data)
			setResult(response.data.crop)
			setShow(true);

		})
	}
	const onChange = (e) => {
		dispatch({
			[e.target.name]: e.target.value
		})
	}
	const handleClose = () => {
		setShow(false)
	}

	return (
		<div>
			<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recommendation Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
					Crop suitable for your farm land: <br />
					{result.toUpperCase()}
				</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
			<h3>Crop Recommendation</h3>
			<form onSubmit={onSubmit}>
				<Input type="number" name="N" label="Nitrogen" placeholder="Eg: 78" value={N} onChange={onChange} />
				<Input type="number" name="P" label="Phosphorous" placeholder="Eg: 35" value={P} onChange={onChange} />
				<Input type="number" name="K" label="Potassium" placeholder="Eg: 44" value={K} onChange={onChange} />
				<Input type="number" name="temperature" label="Temperature in Celcius" placeholder="Eg: 26.5" value={temperature} onChange={onChange} />
				<Input type="number" name="humidity" label="Humidity" placeholder="Eg: 84" value={humidity} onChange={onChange} />
				<Input type="number" name="ph" label="pH value" placeholder="Eg: 7.07" value={ph} onChange={onChange} />
				<Input type="number" name="rainfall" label="Rainfall in cm" placeholder="Eg: 183.62" value={rainfall} onChange={onChange} />

				{/* <Input type="button" value="Submit" clasName="" /> */}
				<div className="d-grid gap-2">
					<Button type="submit" variant="primary" size="lg" className="block">Submit</Button>{' '}
				</div>
			</form>
		</div>
	);
}

export default CropPrediction;