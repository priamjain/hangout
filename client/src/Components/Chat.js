import React from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import Message from './Message'
import './Chat.css'
import ChatHeader from './ChatHeader'
import FormControl from 'react-bootstrap/FormControl'
class Chat extends React.Component{
	constructor(props) {
		super(props)
		const {name,party} = queryString.parse(this.props.location.search);
		this.state = {
			name: name,
			party: party,
			message: "",
			messages: []
		}
	}
	socket = io('https://hangout-backend.herokuapp.com');

	componentDidMount(){
		this.socket.emit('join',{name:this.state.name,party:this.state.party},()=>{});
		this.socket.on('message',(message)=>{
			console.log('msg');
			this.setState(prev=>{
				console.log('setmessage');
				return({messages:[...prev.messages,message]});
			});
			
		})
		this.socket.on('currentTrackId',(message)=>{
			this.props.setCurrentTrackId(message);
			
		})
	}

	componentWillUnmount(){
		this.socket.emit('disconnect');
		this.socket.off();
	}

	sendMessage = (e) =>{
		e.preventDefault();
		if(this.state.message){
			this.socket.emit('sendMessage',this.state.message,()=>{});
		}
		this.setState({message:""});
	}	
	
	render(){
		return (
			<div className='chat__container'>
			<ChatHeader party={this.state.party} name={this.state.name}></ChatHeader>
			<div className="chat__messages">
			{this.state.messages.map((msg,index) => <Message key={index} user={msg.user} text={msg.text}/>)}
			</div>
			<FormControl 
			className='chat__input'
			type="text"
			value={this.state.message}
			onChange={(e)=>this.setState({message:e.target.value})}
			onKeyPress={e=>e.key==='Enter'?this.sendMessage(e):null}/>
			</div>
			)
	}

}
export default Chat