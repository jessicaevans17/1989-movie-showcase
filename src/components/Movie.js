import React, { Component } from "react"

import axios from "axios"

class Movie extends Component {
  state = {
    movies: [],
    gifData: [],
    currentIndex: 0
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
        <section>
          {this.state.movies.map((result, currentIndex) => {
            return (
              <section className="movie-box" key={result.id}>
                <h2 className="title"> {result.title}</h2>
                <h3 className="date">{result["release_date"]}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                    result["poster_path"]
                  }`}
                  alt={result.title}
                />

                <p className="plot">{result.overview}</p>
              </section>
            )
          })}
        </section>
      </main>
    )
  }
}

export default Movie
