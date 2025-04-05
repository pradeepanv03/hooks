

import { React, useContext, createContext, useState } from 'react'
import Getcontex from './Getcontex';

export const Acontext = createContext();

export default function Contexx() {
    const [user, setuser] = useState('hello Contex')
    return (
        <>
            <h1>Contex Example</h1>
            <Acontext.Provider value={{status:user}}>
                <h2>{user}</h2>
                <Getcontex/>
            </Acontext.Provider>
        </>
    )
}
