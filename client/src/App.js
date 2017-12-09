import React, { Component } from 'react';
import SongForm from './components/SongForm'
import SongList from './components/SongList'
import axios from 'axios'

class App extends Component {
  state={ songs: [] }

  componentDidMount(){
    axios.get('/api/songs')
      .then( res => this.setState({songs: res.data}));
  }

  // resetState = (data) => {
  //   console.log("RUNINGIGNGNIGNINIGNGIN")
  //   console.log("this has been run")
  //   this.setState({songs: [...this.state.songs]})
  //   // this.forceUpdate()
  // }

  createSong = (song) => {
    // const songs = { song }
    axios.post('/api/songs', { song })
      .then( res => {
        const { songs } = this.state;
        this.setState({songs: [...songs, res.data]})
    });
  }

  updateSong = (song) => {

    axios.put(`/api/songs/${song.id}`, song)
      .then( res => {
        let songs = this.state.songs.map(s => {
          if(s.id === song.id)
            return res.data;
          return s;
        });
        this.setState({songs})
        console.log('RESPONSE')
        })
      .catch(res => {
    });
  }

  deleteSong = (id) => {
    axios.delete(`/api/songs/${id}`)
      .then( () => {
        const { songs } = this.state
        this.setState({ songs: songs.filter( (s) =>  s.id !== id )})
      });
  }

  render() {

    return (
      <div className="ui container">

        <h1>Stupify Billboards</h1>
        <SongForm createSong={this.createSong} />
            <SongList
              resetState={this.resetState}
              songs={this.state.songs}
              deleteSong={this.deleteSong}
              updateSong={this.updateSong}
            />
      </div>
    );
  }
}

export default App;
