import React, { useState } from "react";
import { Route } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom';
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovieForm from "./Movies/UpdateMovieForm.js";
import AddMovieForm from "./Movies/AddMovieForm.js";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const updateMovieList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>

      <div className = "home-button">

        <p className = "home-para">
          <Link to="/">Home</Link>
        </p>

        <p>
          <Link to="/add-movie">Add Movie</Link>
        </p>

     </div>

      

      <SavedList list={savedList} />

      <Route exact path="/" component={MovieList} />
      
      {/*:id means id will be passed down in props as props.match.params.id */}
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList = {addToSavedList} />
        }}
      />

      <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateMovieForm {...props} />
        }}
      />

      <Route
        path="/add-movie"
        render={props => {
          return <AddMovieForm {...props} />
        }}
      />

    </>
  );
};

export default App;
