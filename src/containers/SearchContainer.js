import React from 'react'
import api from '../api';
import { Form, Grid, Header, Segment } from 'semantic-ui-react'

import UniList from './UniList'

export default class SearchContainer extends React.Component {

  state = {
    universities: [],
    filteredUnis: [],
    subject1: null,
    subject2: null,
    subject3: null,
    grade1: null,
    grade2: null,
    grade3: null,
    courseId: null
  }

  componentDidMount () {
    api.getUniversities()
      .then(universities => this.setState({ universities, filteredUnis: universities }))
    }

    handleChange = (e, { id, value }) => {
      // debugger
      this.setState({ [id]: value });
    };

    handleSubmit = event => {
      const {universities, courseId, subject1, grade1 } = this.state
      event.preventDefault();
      //filter universities based on course
      let filteredUnis = [];
      universities.forEach( uni => {
        let foundCourse = uni.courses.find(course => course.course_id === courseId )
        if (foundCourse) {
          let matchSubject = foundCourse.subjects.find(
            subject => subject.subject_name === subject1 && subject.grade_val <= grade1 )
          if (matchSubject) {
            filteredUnis = [...filteredUnis, uni]
          }
        }
      })
      this.setState({ filteredUnis })
    };

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
      {text: 'A*' , value: '6'},
      {text: 'A' , value: '5' },
      {text: 'B' , value: '4' },
      {text: 'C' , value: '3' },
      {text: 'D' , value: '2' },
      {text: 'F' , value: '1' },
      {text: 'U' , value: '0' }
    ]

    const courses = [
      { text: 'Medicine A100', value: 1 },
      { text: 'Business Management N100', value: 2 },
      { text: 'Computer Science G400', value: 3 },
      { text: 'Pharmacology B230', value: 4 },
      { text: 'English Q300', value: 5 },
      { text: 'Architecture K100', value: 6 },
      { text: 'Economics L100', value: 7 },
      { text: 'Mathematics G100', value: 8 },
      { text: 'History V100', value: 9 }
    ]

    return (
      <Form className="search-form" onSubmit={this.handleSubmit}>
        <Header as="h3">Enter your A-level subjects</Header>
        <Form.Group inline widths='equal'>
          <Form.Select onChange={ this.handleChange } id="subject1" fluid options={subjects} label='Subject 1' placeholder='Subject 1' />
        <Form.Select onChange={ this.handleChange } id="grade1" fluid options={grades} label='Grade 1' placeholder='Grade 1' />
        </Form.Group>
        <Form.Group inline widths='equal'>
          <Form.Select onChange={ this.handleChange } id="subject2" fluid options={subjects} label='Subject 2' placeholder='Subject 2' />
          <Form.Select onChange={ this.handleChange } id="grade2" fluid options={grades} label='Grade 2' placeholder='Grade 2' />
        </Form.Group>
        <Form.Group inline widths='equal'>
          <Form.Select onChange={ this.handleChange } id="subject3" fluid options={subjects} label='Subject 3' placeholder='Subject 3' />
          <Form.Select onChange={ this.handleChange } id="grade3" fluid options={grades} label='Grade 3' placeholder='Grade 3' />
        </Form.Group>
        <Header as="h3">Choose your Course of Study</Header>
        <Form.Select onChange={ this.handleChange } id="courseId" fluid options={courses} label='courses' placeholder='Courses' />
        <Form.Button basic color='blue'>Search</Form.Button>
      </Form>
    )
  }

  render () {
    const {filteredUnis} = this.state
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
                  <UniList universities={filteredUnis} />
                </Segment>
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </div>
      </div>
    )
  }
}
