import React, { Component } from "react";
import DogCard from "./components/DogCard";
import Wrapper from "./components/Wrapper";
import CardDiv from "./components/CardDiv";
import Header from "./components/Header";

import Title from "./components/Title";
import dogs from "./dogs.json";
// import Counter from "./components/ScoreCounter";

class App extends Component {
  // Setting this.state.dogs to the dogs json array
  state = {
    dogs
  };

  removeFriend = id => {
    // Filter this.state.dogs for dogs with an id not equal to the id being removed
    const dogs = this.state.dogs.filter(friend => friend.id !== id);
    // Set this.state.dogs equal to the new dogs array
    this.setState({ dogs });
  };

  // Map over this.state.dogs and render a DogCard component for each friend object
  render() {
    return (
      <Wrapper>
        {/* <Counter /> */}
        <Header>
          <Title>Dog Clicky Game</Title>
        </Header>
        <CardDiv>
          {this.state.dogs.map(doggy => (
            <DogCard
              removeFriend={this.removeFriend}
              id={doggy.id}
              key={doggy.id}
              name={doggy.name}
              image={doggy.image}
            />
          ))}
        </CardDiv>
      </Wrapper>
    );
  }
}

export default App;

// function to shuffle dog cards
function shuffleDogs() {}

// function to increase score
function increaseScore() {}
