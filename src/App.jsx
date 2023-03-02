import { useState, createContext } from "react";
import "./App.css";
import Widget from "./components/Widget";

export const Context = createContext();

function App() {
  const [user, SetUser] = useState("User");

  return (
    <div className="App">
      <Context.Provider value={{ user, SetUser }}>
        <Widget />
      </Context.Provider>
    </div>
  );
}

export default App;
