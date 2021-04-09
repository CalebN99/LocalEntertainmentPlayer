import React, { Component } from 'react';
import "./Movie.css";
import ReactPlayer from "react-player";

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
     videoFileURL: '',
     videoFileObject: null,
     apiUrl: "http://localhost:3030/video/",
     movieTitle: this.props.movieurl.replace("_", " ")
    };
  };

handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })
}



  render() {
    console.log("YO")
    return (
      <div className="Movie">
        <div className="movieBox">
        <ReactPlayer
              
              url={this.state.apiUrl + this.props.movieurl}
              width='100%'
              height='100%'
              controls = {true}
  
              />
        </div>
        <h2 className="movieTitle">{this.state.movieTitle}</h2>
      </div>
    );
  }
}

export default Movie;
