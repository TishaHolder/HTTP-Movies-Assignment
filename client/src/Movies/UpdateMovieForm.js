import React from "react";
import axios from "axios";
//import { setState } from "expect/build/jestMatchersObject";

function UpdateMovieForm(props){

    const [updatedMovie, setUpdatedMovie] = ([{title: "", director: "", metascore: "", stars: [] }]);

    const changeHandler = (event) => {

        setUpdatedMovie({
            ...updatedMovie,
            [event.target.name]: event.target.value

        });

    }
    

    const submitHandler = (event) => {

        event.preventDefault();
        updateMovie(props.match.params.id, updatedMovie);

    }

    const updateMovie = (id, movie) => {
        axios
        .put(`http://localhost:5000/api/movies/${id}`, updatedMovie)
        .then(res => {
            setUpdatedMovie(res.data);
            props.history.push("/");

        })
        .catch(err => {
            console.log(err.response);
        })

    }

    return (

        <form onSubmit = {submitHandler}>

            <input type = "text"
                   name = "title"
                   value = {updatedMovie.title}
                   onChange = {changeHandler} 
                   placeholder = "title" />

            <input type = "text"
                   name = "director"
                   value = {updatedMovie.director}
                   onChange = {changeHandler} 
                   placeholder = "director" />

            <input type = "number"
                   name = "metascore"
                   value = {updatedMovie.metascore}
                   onChange = {changeHandler} 
                   placeholder = "metascore" />  

            <h2> Actors </h2>

            <input type = "text"
                   name = "stars"
                   value = {updatedMovie.stars[0]}
                   onChange = {changeHandler} 
                   placeholder = "title" />

            <input type = "text"
                   name = "stars"
                   value = {updatedMovie.stars[1]}
                   onChange = {changeHandler} 
                   placeholder = "title" />

            <input type = "text"
                   name = "stars"
                   value = {updatedMovie.stars[2]}
                   onChange = {changeHandler} 
                   placeholder = "title" />

            <button> Update </button>          
                   
        </form>

    );

}

export default UpdateMovieForm;

