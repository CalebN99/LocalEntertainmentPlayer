import "./App.css";
import Movie from "./Movie";
function App() {
  return (
    <div className="App">
      <h1 className="bannerLogo">MyVideo</h1>
      <div className="movieGrid">
        <div className="gridWrapper">
          <Movie movieurl="Napolean_Dynamite"/>
        
        </div>
      </div>
    </div>
  );
}

export default App;
