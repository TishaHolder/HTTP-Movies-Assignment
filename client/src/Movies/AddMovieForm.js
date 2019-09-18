import React, { Component } from "react";
import axios from "axios";
//import { setState } from "expect/build/jestMatchersObject";

class AddMovieForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            newMovie: {
              title: '',
              director: '',
              metascore: '',
              stars: ["", "", ""]
            }
          };      
    }

    

    changeHandler = (event) => {

        this.setState({

            newMovie: {
                ...this.state.newMovie,
                [event.target.name]: event.target.value
            }

        });

    }

   
    

    addMovie = (movie) => {
        axios
        .post("http://localhost:5000/api/movies", movie)
        .then(res => {
            this.setState({movies: res.data});
            

        })
        .catch(err => {
            console.log(err.response);
        })

    }

        
    

    submitHandler = (event) => {

        event.preventDefault();
        this.addMovie(this.state.newMovie);
        this.props.params.history.push("/");


    }

    

    render(){

        return (

            <form onSubmit = {this.submitHandler}>

                <input type = "text"
                    name = "title"
                    value = {this.state.newMovie.title}
                    onChange = {this.changeHandler} 
                    placeholder = "title" />

                <input type = "text"
                    name = "director"
                    value = {this.state.newMovie.director}
                    onChange = {this.changeHandler} 
                    placeholder = "director" />

                <input type = "number"
                    name = "metascore"
                    value = {this.state.newMovie.metascore}
                    onChange = {this.changeHandler} 
                    placeholder = "metascore" />  

                <h2> Actors </h2>

                {/*{this.state.newMovie.stars.map( (star, index) => { <input type = "text"
                                                                 name = {this.state.newMovie.stars[index]}
                                                                 value = {star}
                                                                 onChange = {this.changeHandler} 
                                                                placeholder = "actor" /> } )}*/}
                input type = "text"
                    name = "stars[0]"
                    value = {this.state.newMovie.stars[0]}
                    onChange = {this.changeHandler} 
                    placeholder = "actor" />

                <input type = "text"
                    name = "stars[1]"
                    value = {this.state.newMovie.stars[1]}
                    onChange = {this.changeHandler} 
                    placeholder = "actor" />

                <input type = "text"
                    name = "stars[2]"
                    value = {this.state.newMovie.stars[2]}
                    onChange = {this.changeHandler} 
                    placeholder = "actor" /> */}

                <button> Update </button>          
                    
            </form>


        );

    }


}

export default AddMovieForm;