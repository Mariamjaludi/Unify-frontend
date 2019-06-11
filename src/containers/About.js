import React from "react";
import { Grid, Segment, Header, Image } from "semantic-ui-react";
export default class About extends React.Component {
  render() {
    return (
      <Grid divided padded relaxed>
        <Grid.Row stretched columns={2}>
          <Grid.Column>
            <Image
              size="big"
              verticalAlign="middle"
              src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </Grid.Column>
          <Grid.Column>
            <Segment >
              <Header as="h2">About</Header>
              <p className="about">
                Which university should you apply to? There are over 150
                institutions in the UK offering different experiences, courses
                and extra-curricular opportunities. Your task is to find the
                university, or universities, to apply to via UCAS. This is
                achieved by establishing which universities meet your
                preferences in relating to factors such as course provision,
                teaching style, location, type of university and
                extra-curricular opportunities.
              </p>
              <p className="about">
                Unify can help you narrow down your options to create the
                optimal UCAS application and get you into the right university
                and course for you.
              </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched columns={1}>
          <Grid.Column>
            <Segment>
              <Header as="h3">Start Now!</Header>
              <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched columns={2}>
          <Grid.Column>
            <Segment>
              <Grid.Row>
                <Header as="h3">Find the Best Fit for You</Header>
              </Grid.Row>
              <Grid.Row>
                <Image
                  size="medium"
                  verticalAlign="middle"
                  src="https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </Grid.Row>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Grid.Row>
                <Header as="h3">Plan for Your Sucess</Header>
              </Grid.Row>
              <Grid.Row>
                <Image
                  size="medium"
                  verticalAlign="middle"
                  src="https://images.pexels.com/photos/1708988/pexels-photo-1708988.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </Grid.Row>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
