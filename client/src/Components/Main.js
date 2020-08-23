import React from 'react'
import Chat from './Chat'
import Music from './Music'
import './Main.css'
import {useLocation} from 'react-router-dom'
const Main = ({token}) => {
	let location = useLocation();
	return (
		<div className="main w-100">
		<div className="main_chat mt-5">
		    <Chat location={location}></Chat>
		</div>
		<div className='main_music w-100'>
			<Music token={token}></Music>
		</div>
		</div>
		)
}

export default Main