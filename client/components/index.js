import React from 'react'
import CharacterPanelContainer from '../containers/characterPanel'
import { Grid } from 'semantic-ui-react'

export default class App extends React.Component {
  render () {
    return <Grid style={{height: '100%'}} verticalAlign='middle' columns={12} centered>
      <Grid.Row>
        <Grid.Column computer={4}>
          <CharacterPanelContainer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  }
}
