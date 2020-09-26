import React, { useState } from 'react';
import './App.css';
import CClock from './CClock';
import Clock from "./Clock"

function App() {
  const JsxElement = "I am a JSX element!";
  const [bakery,setbakery] =useState({
    cake :10,
    icecream:20

  })
 
const giveNumber =(bakery)=>{
   return bakery.cake + bakery.icecream
}
   const JsxWithChild = <div>
    <h1>child-1</h1>
    <h2>child-2</h2>
   </div>
   const name ="TejasriMamidi";
  return (
    <div className="App">
                  <CClock />
               <Clock/>
          <div>{JsxElement}{JsxWithChild}</div>
    <div className="Hi">I am a div tag with class name as Hi.</div>
  <div>I am {name}</div>
  <div>Total number of cakes and icecreams in this bakery:{giveNumber(bakery)}</div>
    </div>
  )}

export default App;
