import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

let socket;

function Chat({location}) {
		const [name, setName] = useState('');
		const [party, setParty] = useState('');
		const ENDPOINT = 'localhost:5000'
	useEffect(() => {
		const {name,party} = queryString.parse(location.search);

		socket=io(ENDPOINT);

		setName(name);
		setParty(party);
		
		socket.emit('join',{name,party},()=>{};

		return() ={
			socket.emit('disconnect');
			socket.off();
		}
	},[ENDPOINT,location.search])


	return (
		<div>
			
		</div>
	)
}

export default Chat