import React from 'react'
import './ChatHeader.css'

function ChatHeader({name,party}) {
	return (
		<div className='chatheader'>
			<div className=''>{party}</div>
		</div>
	)
}

export default ChatHeader