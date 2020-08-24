import React from 'react'
import Chat from './Chat'
import MusicScreen from './MusicScreen'
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
		<MusicScreen token={token}></MusicScreen>
		</div>
		</div>
		)
}

export default Main