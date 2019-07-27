import React, { Component } from 'react';
import { Container, Box, Heading } from 'gestalt';
import './App.css';
import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class App extends Component {
  async componentDidMount() {
    try {
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query: `
            query {
              brands {
                _id
                name
                description
                image {
                  url
                }
              }
            } 
          `
        }
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <Container>
        {/* brands Section */}
        <Box
          display="flex"
          justifyContent="center"
          marginBottom={2}
        >
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
      </Container>
    );
  }
}

export default App;
