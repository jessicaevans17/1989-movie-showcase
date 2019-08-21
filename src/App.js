import React, { Component } from "react"
import Movie from "./components/Movie"
import NavBar from "./components/NavBar"

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Movie />
      </div>
    )
  }
}

export default App
