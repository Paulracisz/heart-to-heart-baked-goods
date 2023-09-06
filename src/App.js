import "./App.css";
import TopBar from "./components/TopBar.jsx";
import "./stylesheets/TopBar.css";
import Macarons from "./assets/macarons.png";

function App() {
  return (
    <div className="App">
      <>
        <TopBar />

        <img className="macaron-img" src={Macarons} alt="macarons" />
      </>
    </div>
  );
}

export default App;
