import React, { Component } from "react";
import DogCard from "./components/DogCard";
import Wrapper from "./components/Wrapper";
import CardDiv from "./components/CardDiv";
import Header from "./components/Header";
import Title from "./components/Title";
import dogs from "./dogs.json";

class App extends Component {
  // Setting this.state.dogs to the dogs json array
  state = {
    dogs,
    dogsClicked: [],
    score: 0
  };

  // function to increase score
  increaseScore = dog => {
    // check each index of dogsClicked array to see if it exists
    if (this.state.dogsClicked.indexOf(dog.id) > -1) {
      alert(`you lose`);
      this.setState({
        dogs,
        dogsClicked: [],
        score: 0
      });
    } else {
      // if it doesn't exist, increase score by 1 and add the dog id to dogsClicked array
      this.setState({
        score: this.state.score + 1,
        dogsClicked: [...this.state.dogsClicked, dog.id]
      });
      console.log(this.state.dogsClicked);
      this.shuffleArray(this.state.dogs);
    }

    if (this.state.score >= 8) {
      alert(`you win`);
    }
  };

  // function to shuffle dogArray
  shuffleArray = array => {
    var arraySort = array.sort(() => Math.random() - 0.5);
    this.setState({ dogs: arraySort });
  };

  render() {
    return (
      <Wrapper>
        <Header>
          <Title>
            <h3 className="game">Clicky Game!</h3>
            <h4 className="title">
              Click the dogs to score points, but don't click more than once!
            </h4>
            Score: {this.state.score}
          </Title>
        </Header>
        <CardDiv>
          {this.state.dogs.map(doggy => (
            <DogCard
              id={doggy.id}
              key={doggy.id}
              image={doggy.image}
              clicked={doggy.clicked}
              increaseScore={() => this.increaseScore(doggy)}
            />
          ))}
        </CardDiv>
      </Wrapper>
    );
  }
}

export default App;
