import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
export default class SignUp extends React.Component {
  state = {
    name: "",
    password: "",
    ucas_id: "",
    school_name: "",
    location: "",
    enrollment_year: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      password,
      ucas_id,
      school_name,
      location,
      enrollment_year
    } = this.state;
    let student = {
      name: name,
      ucas_id: ucas_id,
      school_name: school_name,
      location: location,
      enrollment_year: enrollment_year,
      password: password
    };
    this.props.createStudent(student);
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            Sign Up
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                onChange={this.handleChange}
                 name='name'
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Name"
              />
              <Form.Input
                onChange={this.handleChange}
                 name='password'
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
            <Form.Input onChange={this.handleChange} name='ucas_id' fluid placeholder="UCAS ID" />
              <Form.Input onChange={this.handleChange} name='school_name' fluid placeholder="School Name" />
              <Form.Input onChange={this.handleChange} name='location' fluid placeholder="Location" />
              <Form.Input onChange={this.handleChange} name='enrollment_year' fluid placeholder="Enrollment Year" />
              <Form.Checkbox label="I agree to the Terms and Conditions" />
              <Button basic color="blue" type="submit" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
