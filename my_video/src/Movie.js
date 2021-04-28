import React, { Component } from "react";
import "./Movie.css";
import ReactPlayer from "react-player";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl: "http://localhost:3030/video/",
      isLoaded: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    let movietitle = this.props.movieurl.replace("_", " ");
    movietitle = movietitle.substring(0, movietitle.length - 4);
    return (
      <div className="Movie">
        <div className="movieBox">
          <ReactPlayer
            url={this.state.apiUrl + this.props.movieurl}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <h2 className="movieTitle">{movietitle}</h2>
      </div>
    );
  }
}

export default Movie;
