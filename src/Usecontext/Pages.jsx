import React, { useState } from 'react'
import {UserContext} from './Contextt'
export default function Pages() {
    const [user, setuser] = useState('React context')
    return (
        <div>
            <h1>this is context</h1>
            <UserContext.Provider value={user}>
            <h1> from  {user}</h1>
            </UserContext.Provider>
        </div>
    )
}
