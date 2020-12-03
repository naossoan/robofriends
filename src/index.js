import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App' //grab the main app file
import { robots } from './robots' //grab all the robots from the robots file
import 'tachyons'
import reportWebVitals from './reportWebVitals'

//Render the CardList
ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
