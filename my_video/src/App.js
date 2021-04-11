import "./App.css";
import React, { Component } from 'react'
import Movie from "./Movie";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
     movieTitleList: [],
     isLoaded: false

    };
  };


  
  componentDidMount() {
    fetch("http://localhost:3030/movieTitles")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            movieTitleList: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    if(this.state.movieTitleList.title) {
      console.log(this.state.movieTitleList.title)
      return (
        <div className="App">
          <h1 className="bannerLogo">MyVideo</h1>
          <div className="movieGrid">
            <div className="gridWrapper">
              <Movie movieurl="Napolean_Dynamite.mp4"/>
              <Movie movieurl="Gretel_and_Hansel_2020.mkv" />
            
            </div>
          </div>
        </div>
      );
    } else return (
      <div className="App">
      <h1>Movies not loaded</h1>
    </div>
    )
    
  }
 
}

export default App;
