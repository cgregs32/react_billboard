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

  createSong = (song) => {
    // const songs = { song }
    axios.post('/api/songs', { song })
      .then( res => {
        const { songs } = this.state;
        this.setState({songs: [...songs, res.data]})
      });
    }

  updateSong = (id) => {
    axios.put(`/api/songs/${id}`)
      .then( res => {
        let songs = this.state.songs.map( s => {
          if (s.id === id)
            return res.data;
          return s;
        });
        this.setState({ songs })
      });
  }


  deleteSong = (id) => {
    console.log('MOOOOVE')
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
              songs={this.state.songs}
              deleteSong={this.deleteSong}
              updateSong={this.updateSong}
              />
      </div>
    );
  }
}

export default App;
