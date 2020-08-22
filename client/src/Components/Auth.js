import React from 'react';
import {Redirect} from 'react-router-dom'
const { Napster } = window;


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      access_token: '',
    };
  }

  componentDidMount() {
    const detailURL = new URL(window.location);
    const currentURL = detailURL.href;
    const API_SECRET = 'MjExOWFkNmEtOTdkYy00YzYzLWIxNDQtNTkzMTIzYjExOGU0';
    const API_KEY = 'Y2IwMzgyMDMtMDYyZS00ZThjLWI5ODgtZTlmNjAzNDNlYmQ0';
    if (detailURL.search === '') {
      window.location = `https://api.napster.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${currentURL}&response_type=code`;
    } else if (detailURL.search.includes('code')) {
      Napster.init({ consumerKey: API_KEY, isHTML5Compatible: true });

      const code = detailURL.search.substring(6);

      fetch(`https://api.napster.com/oauth/access_token?client_id=${API_KEY}&client_secret=${API_SECRET}&response_type=code&grant_type=authorization_code&redirect_uri=${currentURL}&code=${code}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(result => {
          Napster.player.on('ready', () => {
            Napster.member.set({
              accessToken: result.access_token,
              refreshToken: result.refresh_token
            });
          });

          this.setState({
            access_token: result.access_token,
          });
          this.props.setToken(result.access_token);
        });
    }
  }

  render() {
    return (
      <div>
        {this.state.access_token ? <Redirect to="/join"></Redirect> : null}
      </div>
    );
  }
}
