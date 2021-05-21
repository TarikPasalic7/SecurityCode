import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
const correctPinNumber="1234";
  const [pinNumber,setPinNumber] = useState("");
  const [code,setCode] = useState("");
  const [counter,setCounter] = useState(0);
  const [attempts,setAttempts] = useState(0);
  const [blocked,setBlocked] = useState(false);
  const add=(e)=>{
  let pin=pinNumber;
  let pincode=code;
  if(counter==4 || pincode==="OK" || pincode==="ERROR!" || pincode==="BLOCKED!")
  return;
  pin +=e.target.value;
  pincode +="*";
  setPinNumber(pin);
  setCode(pincode);
  setCounter(counter+1);
    

  }

  const clear =()=>{
   setCounter(0);
   setPinNumber("");
   setCode("");

  }
  const blockNumbers =()=>{
    
    setTimeout(()=>{
      
      setBlocked(false);
    },30000);

  }

  const enter =() =>{
   if(correctPinNumber===pinNumber && attempts !==3)
   {
    setCode("OK");
     return;
   }
   if(correctPinNumber!==pinNumber && attempts!==3)
   {
    setCode("ERROR!");
    setAttempts(attempts+1);
    return;
   }
   else{
    setCode("BLOCKED!");
     setBlocked(true);
    setAttempts(0);
     blockNumbers();
     return;
   }

     
   

  }
  return (
    <div className="App">
    <div className="container">
    <div className="screen"> <p className="par"> {code} </p> </div>
    <div className="container2">
    <div class="row">
    <button className="btn" onClick={add} disabled={blocked?true:false} value="1">1</button>
    <button className="btn" onClick={add} disabled={blocked?true:false}  value="2">2</button>
    <button className="btn" onClick={add} disabled={blocked?true:false}  value="3">3</button>

    </div>
    <div class="row">
   
    <button className="btn" onClick={add} disabled={blocked?true:false}   value="4">4</button>
    <button className="btn" onClick={add} disabled={blocked?true:false}  value="5">5</button>
    <button className="btn" onClick={add} disabled={blocked?true:false}  value="6">6</button>
    </div>
    <div class="row">
    <button className="btn" onClick={add} disabled={blocked?true:false}  value="7">7</button>
    <button className="btn" onClick={add} disabled={blocked?true:false}  value="8">8</button>
    <button className="btn" onClick={add} disabled={blocked?true:false}  value="9">9</button>

    </div>
   <div className="row">

   <button className="btn" onClick={clear}  value="clear">clear</button>
    <button className="btn"  onClick={add} disabled={blocked?true:false}  value="0">0</button>
    <button className="btn" onClick={enter} value="enter">enter</button>
   </div>
    </div>
  
    
   

    </div>
    </div>
  );
}

export default App;
