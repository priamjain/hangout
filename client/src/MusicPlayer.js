import React,{useState,useEffect} from 'react'

const {Napster} = window;

function MusicPlayer() {
	const [search, setSearch] = useState("")
	const [data, setData] = useState({});
	

	useEffect(() => {
		Napster.init({
		consumerKey: 'Y2IwMzgyMDMtMDYyZS00ZThjLWI5ODgtZTlmNjAzNDNlYmQ0',
		isHTML5Compatible: true
	})
	})

	const clickhandler = (e)=>{
		e.preventDefault();
		fetch(`https://api.napster.com/v2.2/search?apikey=Y2IwMzgyMDMtMDYyZS00ZThjLWI5ODgtZTlmNjAzNDNlYmQ0&query=${search}`)
		.then(res => res.json())
		.then(data => {setData(data);console.log(data);})
	}

	return (
		<div>
		<input type="text" value={search} onChange={e=>{setSearch(e.target.value)}}/>
		<button onClick={clickhandler}>submit</button>
		</div>

	)
}

export default MusicPlayer