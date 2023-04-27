import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import StarshipList from "./components/Starships/StarhipList";

function App() {
  return (
    <div className="App">
      <Header />
      <StarshipList />
    </div>
  );
}

export default App;
