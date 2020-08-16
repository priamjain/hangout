import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Join() {
	const [party, setParty] = useState('');
	const [name, setName] = useState('')
	return (
		<div>
			<input type="text" value={party} onChange={(e)=>{setParty(e.target.value)}}/>
			<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
			<Link onClick={e=>(!party || !name)?e.prevetDefualt():null} to={`/chat?name=${name}&party=${party}`}>
				<button type='submit'>Join</button>
			</Link>
		</div>
	)
}

export default Join