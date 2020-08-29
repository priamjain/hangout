import React,{useState} from 'react'
import Chat from './Chat'
import MusicScreen from './MusicScreen'
import './Main.css'
import {useLocation} from 'react-router-dom'
const Main = ({token}) => {
	const [currentTrackId, setCurrentTrackId] = useState("")
	let location = useLocation();
	return (
		<div className="main w-100">
		<div className="main_chat mt-5">
		<Chat setCurrentTrackId={setCurrentTrackId} currentTrackId={currentTrackId} location={location}></Chat>
		</div>
		<div className='main_music w-100'>
		<MusicScreen setCurrentTrackId={setCurrentTrackId} token={token}></MusicScreen>
		</div>
		</div>
		)
}

export default Main