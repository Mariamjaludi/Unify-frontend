import React from 'react'
import UniList from './UniList'
import { Form, Grid, Header, Segment } from 'semantic-ui-react'
export default class SearchContainer extends React.Component {

  state = {
    universities: []
  }

  componentDidMount () {
    const API_BASE_URL = `http://localhost:3000`;
    fetch(`${API_BASE_URL}/universities`)
      .then(resp => resp.json())
      .then(universities => this.setState({universities}))
    }

  renderForm = () => {
    const subjects = [
      { text: 'Mathematics', value: 'Mathematics' },
      { text: 'Further Mathematics', value: 'Further Mathematics' },
      { text: 'English Literature', value: 'English Literature' },
      { text: 'Chemistry', value: 'Chemistry' },
      { text: 'Physics', value: 'Physics' },
      { text: 'Biology', value: 'Biology' },
      { text: 'Human Biology', value: 'Human Biology' },
      { text: 'History', value: 'History' },
      { text: 'Geography', value: 'Geography' },
      { text: 'Computer Science', value: 'Computer Science' },
      { text: 'Computing', value: 'Computing' },
      { text: 'Politics', value: 'Politics' },
      { text: 'Design Technology', value: 'Design Technology' },
      { text: 'Art', value: 'Art' }
    ]

    const grades = [
      {text: 'A*' , value: 'A*'},
      {text: 'A' , value: 'A' },
      {text: 'B' , value: 'B' },
      {text: 'C' , value: 'C' },
      {text: 'D' , value: 'D' },
      {text: 'F' , value: 'F' },
      {text: 'U' , value: 'U' }
    ]

    const courses = [
      { text: 'Medicine A100', value: 'Medicine' },
      { text: 'Business Management N100', value: 'Business Management' },
      { text: 'Computer Science G400', value: 'Computer Science' },
      { text: 'Pharmacology B230', value: 'Pharmacology' },
      { text: 'English Q300', value: 'English' },
      { text: 'Architecture K100', value: 'Architecture' },
      { text: 'Economics L100', value: 'Economics' },
      { text: 'Mathematics G100', value: 'Mathematics' },
      { text: 'History V100', value: 'History' }
    ]

    return (
      <Form className="search-form">
        <Header as="h3">Enter your A-level subjects</Header>
        <Form.Group inline widths='equal'>
          <Form.Select fluid options={subjects} label='Subject 1' placeholder='Subject 1' />
          <Form.Select fluid options={grades} label='Grade 1' placeholder='Grade 1' />
        </Form.Group>
        <Form.Group inline widths='equal'>
          <Form.Select fluid options={subjects} label='Subject 2' placeholder='Subject 2' />
          <Form.Select fluid options={grades} label='Grade 2' placeholder='Grade 2' />
        </Form.Group>
        <Form.Group inline widths='equal'>
          <Form.Select fluid options={subjects} label='Subject 3' placeholder='Subject 3' />
          <Form.Select fluid options={grades} label='Grade 3' placeholder='Grade 3' />
        </Form.Group>
        <Header as="h3">Choose your Course of Study</Header>
        <Form.Select fluid options={courses} label='courses' placeholder='Courses' />
        <Form.Button basic color='blue'>Search</Form.Button>
      </Form>
    )
  }

  render () {
    const {universities} = this.state
    return (
      <div>
        Search
        <div className='search-div'>
          <Grid className="search">
            <Grid.Row columns={1}>
              <Grid.Column>
                <Header>Your Universities</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5}>
              <Grid.Column>1</Grid.Column>
              <Grid.Column>2</Grid.Column>
              <Grid.Column>3</Grid.Column>
              <Grid.Column>4</Grid.Column>
              <Grid.Column>5</Grid.Column>
            </Grid.Row>
            
            <Grid.Row columns={2}>
              <Grid.Column >
                <Segment>
                  {this.renderForm()}
                </Segment>
              </Grid.Column >
              <Grid.Column >
                <Segment>
                  <UniList universities={universities} />
                </Segment>
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </div>
      </div>
    )
  }
}
