import React, { Component } from 'react'
import { render } from 'react-dom'
import CardList from '../components/CardList'
// import { robots } from './robots'
import SearchBox from '../components/SearchBox'
import AppCSS from './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
//

// STATE it's simply an object that describes the entire application. In this case it will be the value of the search box, and the robots.
// STATE >> props
// We need to change from using functions (const = blah blah) to using CLASSES

class App extends Component {
  constructor() {
    super()
    // these are the things that describe the app. They can change and can be dynamic.
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //grab the users from this link, convert to json, and make the STATE 'robots' = these users.
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value })
    //This gives us the value of what is actually being typed in the search box.
    //event is the event, target is the search box element, value is the value of the search box!
  }

  render() {
    const { robots, searchfield } = this.state

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className='tc'>
        <img
          src='https://fontmeme.com/permalink/201202/2b05458e27d8a5df9a4b631e27c77ef9.png'
          width='400px'
        />
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default App
