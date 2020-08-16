import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

let socket;

function Chat({location}) {
		const [name, setName] = useState('');
		const [party, setParty] = useState('');
		const [messages, setMessages] = useState([]);
		const [message, setMessage] = useState('')
		const ENDPOINT = 'localhost:5000'
	useEffect(() => {
		const {name,party} = queryString.parse(location.search);

		socket=io(ENDPOINT);

		setName(name);
		setParty(party);
		
		socket.emit('join',{name,party},()=>{});

		return() =>{
			socket.emit('disconnect');
			socket.off();
		}
	},[ENDPOINT,location.search])

	useEffect(() => {
		socket.on('message',(message)=>{
			setMessages([...messages,message]);
		})
	}, [messages])

	const sendMessage = (e) =>{
		e.preventDefault();
		if(message){
			socket.emit('sendMessage',message,()=>setMessage(''));
		}
	}

	let msgcom = messages.map(msg=>msg.text);

	return (
		<div>
			<div>
				{msgcom}
				<input 
					type="text"
					value={message}
					onChange={(e)=>setMessage(e.target.value)}
					onKeyPress={e=>e.key==='Enter'?sendMessage(e):null}/>
			</div>
		</div>
	)
}

export default Chat