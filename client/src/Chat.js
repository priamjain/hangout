import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import Message from './Message'
import './Chat.css'
import FormControl from 'react-bootstrap/FormControl'
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

	let msgcom = messages.map((msg,index) => <Message key={index} user={msg.user} text={msg.text}/>);

	return (
			<div className='w-100 chat p-4'>
				
				{msgcom}
				<FormControl 
					className='w-100'
					type="text"
					value={message}
					onChange={(e)=>setMessage(e.target.value)}
					onKeyPress={e=>e.key==='Enter'?sendMessage(e):null}/>
			</div>
	)
}

export default Chat