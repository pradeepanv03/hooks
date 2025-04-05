import { React, useContext } from 'react'

import {nameCox} from './CreateContex'
export default function New() {
    const abc = useContext(nameCox)
    return (
        <div>
            <h1>New</h1>
            {abc.data}
        </div>
    )
}
