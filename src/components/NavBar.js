import React, { Component } from "react"
import windows from "../assets/windowstshirt.jpg"
import lisaFrank from "../assets/lisafrank.jpg"
class NavBar extends Component {
  render() {
    return (
      <nav>
        <section className="navbar">
          <img className="header-pic" src={windows} />
          <img className="header-pic" src={lisaFrank} />
          <img className="header-pic" src={windows} />
          <h1 className="headline">Movies</h1>
          <img className="header-pic" src={lisaFrank} />
          <img className="header-pic" src={windows} />
          <img className="header-pic" src={lisaFrank} />
        </section>
      </nav>
    )
  }
}
export default NavBar
