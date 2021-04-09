import React, { Component } from 'react';
import "./Movie.css";
import ReactPlayer from "react-player";

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
     videoFileURL: '',
     videoFileObject: null
    };
  };

handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })
}
handleVideoLoad = (e) => {
  console.log(e.target.files);
  let files = e.target.files;
  if (files.length === 1) {
    let file = files[0];
    this.setState({
      videoFileURL: URL.createObjectURL(file),
      videoFileObject: file
    });
  }
  console.log(this.state.videoFileObject);
}
  render() {
    console.log("YO")
    return (
      <div className="Movie">
        <div className="movieBox">
        <ReactPlayer
              
              url={this.state.videoFileURL}
              width='100%'
              height='100%'
              controls = {true}
  
              />
        </div>
        <h2 className="movieTitle">Us</h2>
        <input type="file" id="file" onChange={this.handleVideoLoad} accept="video/mp4,video/x-m4v,video/*"/>
      </div>
    );
  }
 

}

export default Movie;
