
import './App.css';
import {ChatWindowWrapper} from "./chatWindow/ChatWindowWrapper";
import * as React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <ChatWindowWrapper></ChatWindowWrapper>
      </header>
    </div>
  );
}

export default App;
