import React from 'react'
import Song from './Song'
import { Grid} from 'semantic-ui-react'

//map over this.props.songs
//mapped over item will be our Song component

const SongList = ({ songs, updateSong, deleteSong }) => (
  <Grid columns='equal'>


    {songs.map(song =>
      <Song
        key={song.id}
        {...song}
        deleteSong={deleteSong}
        updateSong={updateSong}
      />
    )
  }
</Grid>
)

export default SongList
