import React from 'react'
import './MusicSelect.css'
export default function MusicSelect(props) {
	return (
		<div className='music__select' onClick={()=>props.clickHandle(props.track)}>
			<img className="album__img" src={`https://api.napster.com/imageserver/v2/albums/${props.track.albumId}/images/500x500.jpg`} alt="album art"/>
			<div>
				<h3>{props.track.name}</h3>
				<p>{props.track.artistName}</p>
			</div>
		</div>
	)
}