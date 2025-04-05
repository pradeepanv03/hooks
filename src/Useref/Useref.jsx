import React, { useRef, useState } from 'react'

export default function Useref() {
    const [count, setcount] = useState(0);
    const contref = useRef(0)
const  usereff = () => {
    console.log('Button clicked! useref');
    contref.current = contref.current+1;
  };
  const usestatee = () =>{
    setcount(count + 1);
    console.log("button clicked usestate");
  }
  return (
    <div>
        <button onClick={usereff}>useref</button>
        <button onClick={usestatee}> usestate</button>
        <p>this is UseState Variable {count}</p>
        <p>This is Useref {contref.current}</p>
    </div>
  )
}
