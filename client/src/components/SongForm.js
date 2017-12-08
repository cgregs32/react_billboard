import React from 'react'
import { Button, Form } from 'semantic-ui-react'


class SongForm extends React.Component{
  state={title: '', rank: "", duration: "", id: 1}

  handleChange = (e) => {
    let {name, value } = e.target
    this.setState({ [name]:value })
  }

  handleSumbit = (e) => {
    e.preventDefault();
    console.log('Whaaatt?')
    const {title, rank, duration, id} = this.state
    const song = {title, rank, duration, id}
    this.setState({title: '', rank: "", duration: "", id: this.id + 1})
    this.props.createSong(song)
  }

  render(){
    const { title, rank, duration } = this.state

    return (

      <Form onSubmit={this.handleSumbit}>
        <Form.Group >
          <Form.Input label="Song Title" name="title" value={title} onChange={this.handleChange} placeholder='Title' />

          <Form.Input label="Duration" name="duration" value={duration} onChange={this.handleChange} placeholder='Duration' />

          <Form.Input label="Rank" name="rank" value={rank} onChange={this.handleChange} placeholder='Duration' />
        </Form.Group >

        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}


export default SongForm
