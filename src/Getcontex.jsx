import {createContext, React, useContext} from 'react'
import { Acontext } from './Contexx';
// export const Acontext = createContext()
export default function Getcontex() {

    const abc = useContext(Acontext);
  return (
    <div>
        <h1>Get Context {abc.status}</h1>
    </div>
  )
}
