import React, { Component } from "react"
import placeHolder from "../assets/btfplaceholder.jpg"

import axios from "axios"

class Movie extends Component {
  state = {
    movies: []
  }

  callApi = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=02f778ceced92735175a972d795524b5"
    )
    console.log(response)
    this.setState({
      movies: response.data.results
    })
    console.log(this.state.movies)
  }
  async componentDidMount() {
    this.callApi()
  }

  render() {
    return (
      <main>
        <section className="movie-box">
          <h2 className="title">Movie Title</h2>
          <h3 className="year">Movie Year</h3>
          <img src={placeHolder} />
          <p className="plot">
            Sitcoms snapback hats dope jim carrey can’t touch this tae bo.
            Lunchables highlights scrolling text america online. Y2k keanu
            reeves fly once you pop you can’t stop carpenter pants, turtlenecks
            yo denim jackets tying your sweater around your waist hip hop puff
            daddy. Enrique iglesias deep blue vcr oasis. Britney spears business
            casual bike caps apollo 13 smells like teen spirit. Super soaker
            bucket hats girl power crew cut razor scooter.
          </p>
        </section>
      </main>
    )
  }
}

export default Movie
