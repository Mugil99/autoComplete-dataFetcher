import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import DataFetcher from './Components/Datafetcher';
const data = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
function App() {
const[fruit,setFruit]=useState("");
const[arr,setArr]=useState(data);
const str="hi my name is mugil \n im 23 years old"
useEffect(()=>{
    var a=[...data];
    var newArr=a.filter((item)=>item.includes(fruit));
    setArr(newArr);
},[fruit])
  return (
    <div>
      <h1>Search item</h1>
       <input type="text" onChange={(e)=>setFruit(e.target.value)}></input>
        <ul>
          {
            arr.map((item,index)=>(
              <li>{item}</li>
            ))
        }
        </ul>
        <DataFetcher/>
        <pre>{str}</pre>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        {/* just to learn about pre tag */}
    </div>
  );
}

export default App;
