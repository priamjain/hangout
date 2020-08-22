import React,{useState} from 'react'
import './Join.css';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
function Join({token}) {
	const [party, setParty] = useState('');
	const [name, setName] = useState('')
	return (
			<Form className='join__container'>
				<h1 className='join__brand'>
					Hangout
				</h1>
				<div className='join__form'>
				<Form.Group as={Row} controlId="name" className=''>
					    <Form.Control className='join__input' type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
				</Form.Group>
				<Form.Group as={Row} controlId="party" className=''>
					<Form.Control className='join__input' type="text" placeholder="Enter Party Name" value={party} onChange={(e)=>setParty(e.target.value)}/>
				</Form.Group>
				<Link onClick={(e)=>!name||!party?e.preventDefault():null} to={`/chat?name=${name}&party=${party}`}>
					<Button className='w-100 join__button' variant="primary" type="submit">
						    	Join
					</Button>
				</Link>
				</div>
			</Form>
	)
}

export default Join