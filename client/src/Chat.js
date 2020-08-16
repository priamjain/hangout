import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import Message from './Message'
let socket;

function Chat({location}) {
	const [name, setName] = useState('');
	const [party, setParty] = useState('');
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState('')
	const ENDPOINT = 'localhost:5000'
	useEffect(() => {
		const {name1,party1} = queryString.parse(location.search);

		socket=io(ENDPOINT);

		setName(name1);
		setParty(party1);
		
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

	let msgcom = messages.map((msg,index) => <Message key={index} user={msg.user} text={msg.text}/>);

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