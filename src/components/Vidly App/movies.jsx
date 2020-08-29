import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { Paginate } from "./utils/paginate";
import { getMovies } from "./services/FakeMovieService";
import { getGenres } from "./services/FakeGenreService";
import _ from "lodash";
import "./movies.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    const m = { ...movies[index] };
    movies[index].liked = !m.liked;
    this.setState({ movies: movies });
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 }); //ye kyun kiye currentPage: 1
  };
  handleSort = (path) => {
    this.setState({ sortColumn: { path, order: "asc" } });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
      sortColumn,
    } = this.state;

    if (count === 0)
      return (
        <React.Fragment>
          <nav className="headMenu main_head sticky-top show navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="main_head navbar-brand lm-auto rm-auto" href="#">
              Movies Database
            </a>
          </nav>
          <center>
            <p>There are no movie in database...</p>
          </center>
        </React.Fragment>
      );

    const filtered =
      selectedGenre && selectedGenre._id //&& ke aage ki condition kya kr rhi hai
        ? allMovies.filter((m) => m.genre.name === selectedGenre.name)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies1 = Paginate(sorted, currentPage, pageSize);

    return (
      <div className="container-fluid">
        <nav className="headMenu main_head sticky-top show navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="main_head navbar-brand lm-auto rm-auto" href="#">
            Movies Database
          </a>
        </nav>

        <p>
          <br />

          <br />
        </p>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            Showing {filtered.length} movies in the database.
            <br />
            <MoviesTable
              movies={movies1}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
            />
            <Pagination
              itemsCount={filtered.length}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
