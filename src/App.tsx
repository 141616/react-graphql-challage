import React from "react";
import LaunchList from "./components/LaunchList";
import NextLaunch from "./components/NextLaunch";

import "./App.css";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <NextLaunch />
      <LaunchList />
    </div>
  );
}

export default App;
