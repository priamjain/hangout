import React from 'react'
import SearchCalls from '../Models/SearchCalls'
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
		console.log(this.state.currentTrack);
		console.log(this.state.tracks);

		return (
			<React.Fragment>
				<div>
				<input type="text" name="query" value={this.state.query} onChange={(e)=>this.setState({query:e.target.value})}/>
				<button onClick={this.onSearch}>Search</button>
				</div>
				<div>
					<p>Player</p>
					<img src={`https://api.napster.com/imageserver/v2/albums/${this.state.currentTrack.albumId}/images/500x500.jpg`} alt="album art"/>
					<p>currentTrack: {this.state.currentTrack.type==='track'?this.state.currentTrack.name:'no track slected'}</p>
				</div>
				{this.state.tracks.map(track=><p key={track.id} onClick={()=>{this.clickHandle(track)}}>{`${track.name} by ${track.artistName}`}</p>)}			
			</React.Fragment>
		)
	}
}

export default MusicScreen