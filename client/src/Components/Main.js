import React from 'react'
import Chat from './Chat'
import Music from './Music'
import {useLocation} from 'react-router-dom'
const Main = ({token}) => {
	let location = useLocation();
	return (
		<div className="w-100">
		<div className="mt-5">
		<Chat location={location}></Chat>
		</div>
		<div>
			<Music token={token}></Music>
		</div>
		</div>
		)
}

export default Main