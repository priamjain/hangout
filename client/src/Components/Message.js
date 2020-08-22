import React from 'react'
import ReactEmoji from 'react-emoji'
function Message({text,user}) {
	return (
		<div>
			<strong><em>{user} </em></strong>: {ReactEmoji.emojify(text)}
		</div>
	)
}

export default Message