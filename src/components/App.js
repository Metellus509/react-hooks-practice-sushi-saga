import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import {useState } from "react";
import SushiContext from "../__tests__/Context/SushiContext";

const API = "http://localhost:3001/sushis";

function App() {
  const [balance,setBalance]=useState(100)

  return (
    <SushiContext.Provider value={{balance,setBalance}}>
    <div className="app">
      <SushiContainer />
      <Table />
    </div>
    </SushiContext.Provider>
  );
}

export default App;

