import './App.css';
import React from'react';
import {useState} from 'react';
function App() {
  const [tempValue , setTempValue]=useState(10);
  const [backgroundColor , setBakgroundColor] = useState("neutral")

  const increamentTemp = () =>{
    const temp = tempValue+1;
    setcolor(temp);
    setTempValue(temp);
  }
  const decreamentTemp = () =>{
    const temp = tempValue-1;
    setcolor(temp);
    setTempValue(temp);
  }
  const setcolor = (temp) =>{
    if(temp>15){
      setBakgroundColor("hot");
    }
    else if(temp<10){
      setBakgroundColor("cold");
    }
    else{
      setBakgroundColor("neutral");
    }
  }
  return (
    <div className="container">
      <div className="big">
        <div className={`temperature-display ${backgroundColor}`}>{tempValue}</div>
      </div>
      <div className="button">
        <button onClick={decreamentTemp} >-</button>
        <button onClick={increamentTemp}>+</button>
      </div>
    </div>
  );
}

export default App;
