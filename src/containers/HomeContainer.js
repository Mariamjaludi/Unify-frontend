import React from "react";
import { Button, Form, Grid, Segment, Divider } from "semantic-ui-react";
export default class HomeContainer extends React.Component {
  state = {
    loginClicked: false
  };

  handleLogInClick = () => {
    this.setState({ loginClicked: !this.state.loginClicked });
  };

  renderLogInForm = () => {
    return (
      <Grid.Row columns={1}>
        <Grid.Column>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="blue" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
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
          <Grid.Row columns={2} stackable doubling>
            <Grid.Column>
              <Button
                color="blue"
                size="big"
                >
                Sign Up
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button
                color="blue"
                size="big"
                onClick={this.handleLogInClick}
              >
                Log In
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          <Segment>
          </Segment>
        </Grid.Row>
        </Grid>
        {loginClicked ? this.renderLogInForm() : null}
        <Divider />
        <Grid relaxed>
          <Grid.Row columns={1} padded="horizontally">
            <Grid.Column>
              <Segment>
              Which university should you apply to? There are over 150
              institutions in the UK offering different experiences, courses and
              extra-curricular opportunities. Your task is to find the
              university, or universities, to apply to via UCAS. This is
              achieved by establishing which universities meet your preferences
              in relating to factors such as course provision, teaching style,
              location, type of university and extra-curricular opportunities.
            </Segment>
            <Segment>
              Unify can help you narrow down your options to create the optimal
              UCAS application and get you into the right university and course
              for you.
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

// <Image src='https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
