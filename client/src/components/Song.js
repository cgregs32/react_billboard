import React from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'
import {Segment, Grid } from 'semantic-ui-react'



const Song = ({id, title, duration, rank,  updateSong, deleteSong }) => (
// class Song extends React.Component{
//
//
//
// }
  <Grid.Column width={4}>
    <Segment>
      <Card>
        <Card.Content header={title} />
        <Card.Meta>
          <Icon floated='right' name='clock' />
          {duration}
        </Card.Meta>
        <Card.Content>
          Rank
          <Icon floated='right' name='star' />
          {rank}
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Approve</Button>
            <Button onClick={() => deleteSong(id)} basic color='red'>Decline</Button>
          </div>
        </Card.Content>
      </Card>
    </Segment>
</Grid.Column>

)


export default Song
