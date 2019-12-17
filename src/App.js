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
    dogs,
    dogsArray: [],
    score: 0
  };

  // function to increase score
  increaseScore = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  // Map over this.state.dogs and render a DogCard component for each friend object
  render() {
    return (
      <Wrapper>
        {/* <Counter /> */}
        <Header>
          <Title>Score: {this.state.score}</Title>
        </Header>
        <CardDiv>
          {this.state.dogs.map(doggy => (
            <DogCard
              id={doggy.id}
              key={doggy.id}
              name={doggy.name}
              image={doggy.image}
              increaseScore={this.increaseScore}
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
