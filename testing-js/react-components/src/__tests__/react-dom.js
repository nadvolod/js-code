import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'

// anfn tab
test('renders a number input witha label', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<FavoriteNumber />, div)
    console.log(div.innerHTML);
})