import React, {useState, useEffect} from "react";
import axios from "axios";
//import { setState } from "expect/build/jestMatchersObject";

function AddMovieForm(props){

    const [newMovie, setNewMovie] = useState( {title: "", director: "", metascore: "", stars: ["val", "val", "val"] } );

    const changeHandler = (event) => {

            setNewMovie({
            ...newMovie,
            [event.target.name]: event.target.value

        });

    }

    /*const changeArrayHandler = (event) => {

        setNewMovie({
        ...newMovie,
        stars: newMovie.stars.map( star => event.target.value)

    });*/



    const changeArrayHandler = (indexIn, event) => {

        setNewMovie({
            ...newMovie,
            stars: newMovie.stars.map ( (star, index) => 
            {
                if(index === indexIn){
                    return event.target.value
                } else {

                    return star;

                }
                
            })

        });

    };
    

    const submitHandler = (event) => {

        event.preventDefault();
        axios
        .post("http://localhost:5000/api/movies/", newMovie)
        .then(res => {
            console.log(res.data);
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
                   value = {newMovie.title}
                   onChange = {changeHandler} 
                   placeholder = "title" />

            <input type = "text"
                   name = "director"
                   value = {newMovie.director}
                   onChange = {changeHandler} 
                   placeholder = "director" />

            <input type = "number"
                   name = "metascore"
                   value = {newMovie.metascore}
                   onChange = {changeHandler} 
                   placeholder = "metascore" />  

            <h2> Actors </h2>

            { newMovie.stars.map( (star, index) => {
                return <input  type = "text"                               
                value = {star}
                onChange = {(event)=> changeArrayHandler(index, event)} 
                placeholder = "actor" /> 
            }
            
            )}

            {/*<input type = "text"
                   name = "stars[0]"
                   value = {newMovie.stars[0]}
                   onChange = {changeHandler} 
                   placeholder = "actor" />

            <input type = "text"
                   name = "stars[1]"
                   value = {newMovie.stars[1]}
                   onChange = {changeHandler} 
                   placeholder = "actor" />

            <input type = "text"
                   name = "stars[2]"
                   value = {newMovie.stars[2]}
                   onChange = {changeHandler} 
                   placeholder = "actor" /> 

            <button> Add </button>  */}        
                   
        </form>

    );

}

export default AddMovieForm;

