import React from 'react'
import ReactEmoji from 'react-emoji'
import './Message.css'
function Message({text,user,name}) {
	let ownMessage = user===name;
	return (
		<div className={ownMessage?'ownMessage__container':null}>
		<div className={`message ${ownMessage?'ownMessage':'elseMessage'}`}>
			{ownMessage?null:<strong><em>{user} </em>:</strong>}{ReactEmoji.emojify(text)}
		</div>
		</div>
	)
}

export default Message