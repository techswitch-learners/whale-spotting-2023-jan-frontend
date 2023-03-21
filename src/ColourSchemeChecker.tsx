import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './ColourSchemeChecker.scss'


export function ColourSchemeChecker() {

    return (
        <div>
            <div id="colour-block-1" className='colours-test-block'>Hello World</div>
            <div id="colour-block-2" className='colours-test-block'></div>
            <div id="colour-block-3" className='colours-test-block'></div>
            <div id="colour-block-4" className='colours-test-block'>Hello World</div>

        </div>


    )
}