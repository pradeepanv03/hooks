import { React, useContext } from 'react'

import {nameCox} from './CreateContex'
export default function GetcreateContex() {
    const abc = useContext(nameCox)
    return (
        <div>
            <h1>Get create Contex</h1>
            {abc.data}
        </div>
    )
}
