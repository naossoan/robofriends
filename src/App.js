import React, { Component } from 'react'
import { render } from 'react-dom'
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'
import AppCSS from './App.css'

// STATE it's simply an object that describes the entire application. In this case it will be the value of the search box, and the robots.
// STATE >> props
// We need to change from using functions (const = blah blah) to using CLASSES

class App extends Component {
  constructor() {
    super()
    // these are the things that describe the app. They can change and be dynamic.
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value })
    //This gives us the value of what is actually being typed in the search box.
    //event is the event, target is the search box element, value is the value of the search box!
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase())
    })
    // console.log(filteredRobots)
    return (
      <div className='tc'>
        <img
          src='https://fontmeme.com/permalink/201202/2b05458e27d8a5df9a4b631e27c77ef9.png'
          width='400px'
        />
        <SearchBox searchChange={this.onSearchChange} />

        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App
