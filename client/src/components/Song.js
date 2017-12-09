import React from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'
import {Segment, Grid } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'
import axios from 'axios'



class Song extends React.Component{
  // const { title, duration, rank} = this.props
  state={editing: false, title: this.props.title, duration: this.props.duration, rank: this.props.rank, id: this.props.id}

  handleSumbit = (e) => {
    e.preventDefault();
    const {title, rank, duration, id} = this.state
    const song = {title, rank, duration, id}
    this.props.updateSong(song);
    this.toggleEdit();
  }

  toggleEdit = () => {
    const {editing} = this.state;
    this.setState({editing: !editing})
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })

  }

  editCard = () => {
    const {title, duration, rank, id} = this.props
    return (
      <Form onSubmit={this.handleSumbit}>
        <Card.Content>
          <Form.Input name="title"  label="Edit Song Title" placeholder={title} onChange={this.handleChange} />
        </Card.Content>
        <Card.Content>
          <Form.Input name="duration" label="Edit Duration" placeholder={duration} onChange={this.handleChange} />
        </Card.Content>
        <Card.Content>
          <Form.Input name="rank" label="Edit Rank" placeholder={rank} onChange={this.handleChange} />
        </Card.Content>

        <div className='ui two buttons'>
          <Button color='orange' onClick={this.toggleEdit}>Cancel</Button>
          <Button color='green' type='submit'>Save</Button>
        </div>
      </Form>
    )
  }

  showCard = () => {
    const {title, duration, rank, id} = this.props;
    return (
      <div>
        <Card.Content header={title} />
        <Card.Meta>
          <Icon name='clock' />
          {duration}
        </Card.Meta>
        <Card.Content>
          Rank
          <Icon name='star' />
          {rank}
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button onClick={this.toggleEdit} color='green'>Edit</Button>
            <Button onClick={() => this.props.deleteSong(id)} basic color='red'>Delete</Button>
          </div>
        </Card.Content>
      </div>
    )
  }

  render(){
    return (
      <Grid.Column width={4}>
        <Segment>
          <Card>
            {this.state.editing ? this.editCard() : this.showCard()}
          </Card>
        </Segment>
      </Grid.Column>
    )
  }
}


export default Song
