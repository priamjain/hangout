import React from 'react'

function Message({text,user}) {
	return (
		<div>
			<strong><em>{user} </em></strong>: {text}
		</div>
	)
}

export default Message