
import React, { useState } from "react";
import './../styles/App.css';
import { count } from "console";
import { react } from "babel-types";

const App = () => {
 [cont,setCont]=useState("0");
  return (
    
    <div>
    <button onClick={{setCont}}></button>
        {/* Do not remove the main div */}
        <p>Button clicked {cont} times</p>
    </div>
  )
}

export default App
