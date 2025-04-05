import {React, createContext, useState} from 'react'

import GetcreateContex from './GetcreateContex';
import New from './New';
export const nameCox = createContext();

export default function CreateContex() {
    const [name, setname] = useState('Hello React');
  return (
    <div>
        <h1>Create Contex</h1>
        <nameCox.Provider value={{data :name}}>
            <GetcreateContex/>
            <New/>
        </nameCox.Provider>
    </div>
  )
}