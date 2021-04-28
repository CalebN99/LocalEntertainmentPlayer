import "./App.css";
import React, { Component } from "react";
import Movie from "./Movie";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitleList: [],
      isLoaded: false,
      pageName: "Home",
    };
  }

  handleChange = (e) => {
    this.setState({
      pageName: e,
    });

    console.log(this.state.pageName);
  };

  componentDidMount() {
    fetch("http://localhost:3030/movieTitles")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            movieTitleList: result.title,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    console.log(this.state.movieTitleList);
    if (this.state.pageName === "Home") {
      return (
        <div className="App">
          <h1 className="bannerLogo">MyVideo</h1>
          <h1
            onClick={() => {
              this.setState({ pageName: "Theater" });
              console.log("Arrived at Theater");
            }}
          >
            Enter Theater
          </h1>
        </div>
      );
    } else if (this.state.pageName === "Theater") {
      return (
        <div className="App">
          <h1 className="bannerLogo">MyVideo</h1>
          <div className="movieGrid">
            <div className="gridWrapper">
              {this.state.movieTitleList.map((title) => {
                return <Movie movieurl={title} />;
              })}
            </div>
          </div>
        </div>
      );
    }

    // if (this.state.movieTitleList.title) {
    //   console.log(this.state.movieTitleList.title);
    //   return (
    //     <div className="App">
    //       <h1 className="bannerLogo">MyVideo</h1>
    //       <div className="movieGrid">
    //         <div className="gridWrapper">
    //           {this.state.movieTitleList.map((title) => {
    //             return <Movie movieurl={title} />;
    //           })}
    //         </div>
    //       </div>
    //     </div>
    //   );
    // } else
    //   return (
    //     <div className="App">
    //       <h1 className="bannerLogo">MyVideo</h1>
    //       <h1>Movies not loaded</h1>
    //     </div>
    //   );
  }
}

export default App;
