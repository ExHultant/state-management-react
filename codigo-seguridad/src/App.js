import { UseState } from "./components/use-state.js";
import { ClassState } from "./components/class-state.js";
import "./App.css";
import React from "react";
import { UseReducer } from "./components/use-reducer.js";

function App() {
  return (
    <div className="App">
      <UseState />
      <ClassState />
      <UseReducer />
    </div>
  );
}

export default App;
