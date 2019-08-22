import React, { Component } from "react"
import awesome from "../assets/awesome80s.png"
import cube from "../assets/rubikscube.png"
class NavBar extends Component {
  render() {
    return (
      <nav>
        <section className="navbar">
          <img className="header-pic" src={cube} alt="rubiks cube" />
          <img className="header-pic" src={awesome} alt="awesome 80s text" />
          <h1 className="headline">Movies of 1989</h1>
          <img className="header-pic" src={cube} alt="rubiks cube" />
          <img className="header-pic" src={awesome} alt="awesome 80s text" />
        </section>
      </nav>
    )
  }
}
export default NavBar
