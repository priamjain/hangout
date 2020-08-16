import React,{useState} from 'react'
import './Join.css';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Join() {
	const [party, setParty] = useState('');
	const [name, setName] = useState('')
	return (
			<Form className='w-100 p-5 m-4 join'>
			  <Form.Group controlId="name">
			    <Form.Label>Name</Form.Label>
			    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
			  </Form.Group>

			  <Form.Group controlId="party">
			    <Form.Label>Party Name</Form.Label>
			    <Form.Control type="text" placeholder="Enter Party Name" value={party} onChange={(e)=>setParty(e.target.value)}/>
			  </Form.Group>
			  <Link to={`/chat?name=${name}&party=${party}`}>
				  <Button variant="primary" type="submit">
				    Submit
				  </Button>
			  </Link>
			</Form>
	)
}

export default Join