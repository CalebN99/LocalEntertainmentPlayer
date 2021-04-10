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
     movieTitle: this.props.movieurl.replace("_", " "),
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


handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })
}



  render() {
    console.log("YO")
    console.log(this.state.movieTitleList)
    return (
      <div className="Movie">
        <div className="movieBox">
        {/* {this.state.movieTitleList.title.map((title, index) => (
             <ReactPlayer
              
             url={this.state.apiUrl + title}
             width='100%'
             height='100%'
             controls = {true}
 
             />
        ))} */}
     
        </div>
        <h2 className="movieTitle">{this.state.movieTitle}</h2>
        
      </div>
    );
  }
}

export default Movie;
