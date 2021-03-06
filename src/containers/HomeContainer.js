import React from "react";
import { Button, Form, Grid, Segment, Divider, Message } from "semantic-ui-react";
export default class HomeContainer extends React.Component {
  state = {
    loginClicked: false,
    name: "",
    password: ""
  };

  handleLogInClick = () => {
    this.setState({ loginClicked: !this.state.loginClicked });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.findStudent(this.state.name, this.state.password);
    // debugger
  };

  renderLogInForm = () => {
    const { handleChange, handleSubmit } = this;
    return (
      <Grid.Row columns={1}>
        <Grid.Column>
          <Form size="large" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
              />
              <Button
                color="blue"
                fluid
                size="large"
                type="submit"
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='http://localhost:3001/signup'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid.Row>
    );
  };

  render() {
    const { loginClicked } = this.state;
    return (
      <div>
        <Grid className="home-page" relaxed>
          <Grid.Row columns={1}>
            <Grid.Column className="unify-logo">Unify</Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2} >
            <Grid.Column>
              <Button color="blue" size="big">
                Sign Up
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button color="blue" size="big" onClick={this.handleLogInClick}>
                Log In
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Segment />
          </Grid.Row>
        </Grid>
        {this.props.logInClicked ? this.setState({loginClicked: true }) : null}
        {loginClicked ? this.renderLogInForm() : null}
        <Divider />
        <Grid relaxed className="desc">
          <Grid.Row columns={1} padded="horizontally">
            <Grid.Column>
              <Segment>
                Which university should you apply to? There are over 150
                institutions in the UK offering different experiences, courses
                and extra-curricular opportunities. Your task is to find the
                university, or universities, to apply to via UCAS. This is
                achieved by establishing which universities meet your
                preferences in relating to factors such as course provision,
                teaching style, location, type of university and
                extra-curricular opportunities.
              </Segment>
              <Segment className="home-bottom">
                Unify can help you narrow down your options to create the
                optimal UCAS application and get you into the right university
                and course for you.
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

// <Image src='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
