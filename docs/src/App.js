import React from "react";
import footballer from "./footballer.json";
import FootballerCard from "./components/FootballerCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
   
  function shuffleFootballers(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  class App extends React.Component {
    // Set this.state
    state = {
      footballer,
      currentScore: 0,
      topScore: 0,
      rightWrong: "",
      clicked: [],
    };
  
    handleClick = id => {
      if (this.state.clicked.indexOf(id) === -1) {
        this.handleIncrement();
        this.setState({ clicked: this.state.clicked.concat(id) });
      } else {
        this.handleReset();
      }
    };
  
    handleIncrement = () => {
      const newScore = this.state.currentScore + 1;
      this.setState({
        currentScore: newScore,
        rightWrong: ""
      });
      if (newScore >= this.state.topScore) {
        this.setState({ topScore: newScore });
      }
      else if (newScore === 12) {
        this.setState({ rightWrong: "You win!" });
      }
      this.handleShuffle();
    };
  
    handleReset = () => {
      this.setState({
        currentScore: 0,
        topScore: this.state.topScore,
        rightWrong: "Glaven!",
        clicked: []
      });
      this.handleShuffle();
    };
  
    handleShuffle = () => {
      let shuffledFootbalers = shuffleFootballers(footballer);
      this.setState({ footballer: shuffledFootbalers });
    };
    render() {
        return (
            <div>
                
            <NavBar
             score={this.state.currentScore}
             topScore={this.state.topScore}
            />
             
            <Header

            />
            
        <Container>
          <Wrapper>
          <Row>
              {this.state.footballer.map(friend => (
                <Column size="md-3 sm-6">
                  <FootballerCard
                    key={friend.id}
                    handleClick={this.handleClick}
                    handleIncrement={this.handleIncrement}
                    handleReset={this.handleReset}
                    handleShuffle={this.handleShuffle}
                    id={friend.id}
                    image={friend.image}
                  />
                </Column>
              ))}
            </Row>
            
          </Wrapper>
          </Container>
          </div>
          
        );
        
      }
    }
    
    export default App;