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
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Name"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Form.Input fluid placeholder="UCAS ID" />
              <Form.Input fluid placeholder="School Name" />
              <Form.Input fluid placeholder="Location" />
              <Form.Input fluid placeholder="Enrollment Year" />
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
