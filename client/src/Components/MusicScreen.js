import React from 'react'
import SearchCalls from '../Models/SearchCalls'
import MusicSelect from './MusicSelect'
let Napster;
export class MusicScreen extends React.Component {
	constructor(props) {
		super(props)

		this.state = {

			token:props.token,
			tracks:[],
			currentTrack:{}
		}
	}
	componentDidMount(){
		Napster=window.Napster;

	}

	onSearch = () =>{
		SearchCalls.getSearch(this.state.token,this.state.query)
		.then(search=>search.data.tracks)
		.then(tracks=>{this.setState({tracks})})
	} 

	clickHandle = (track) =>{
		this.setState({currentTrack:track})
		Napster.player.play(track.id.toLowerCase());
	}
	
	render() {
		const player = 	<div className='music__select'>
							<img className="album__img"src={`https://api.napster.com/imageserver/v2/albums/${this.state.currentTrack.albumId}/images/500x500.jpg`} alt="album art"/>
							<h3>{this.state.currentTrack.name}</h3>
							<p>{this.state.currentTrack.artistName}</p>
						</div>

		return (
			<React.Fragment>
			<div>
			<input type="text" name="query" value={this.state.query} onChange={(e)=>this.setState({query:e.target.value})}/>
			<button onClick={this.onSearch}>Search</button>
			</div>
			{this.state.currentTrack.type==='track'?player:null}

			{this.state.tracks.map(track=><MusicSelect key={track.id} track={track} clickHandle={this.clickHandle}>{`${track.name} by ${track.artistName}`}</MusicSelect>)}			
			</React.Fragment>
			)
	}
}

export default MusicScreen