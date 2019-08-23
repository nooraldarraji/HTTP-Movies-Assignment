import React, { useState } from "react";
import axios from "axios";

const initialMovie = {
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
};

const UpdateMovie = props => {
    const [movie, setMovie] = useState(initialMovie);

    const handleChange = event => {

        if (event.target.name === "id") {
            event.target.value = parseInt(event.target.value, 10);
        } else if (event.target.name === "metascore") {
            event.target.value = parseInt(event.target.value, 10);
        }
        setMovie({
            ...movie,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        setMovie((movie.stars = movie.stars.split(" ")));
        setMovie(initialMovie);
        // console.log(movie);
        axios
            .put(`http://localhost:5000/api/movies/${props.match.params.id}`, movie)
            .then(res => {
                console.log(res);
                setMovie(initialMovie);
                props.history.push("/");
            });
    };


    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="id"
                    placeholder="ID"
                    value={movie.id}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={movie.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="director"
                    placeholder=" Director"
                    value={movie.director}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="metascore"
                    placeholder="Enter the Metascore"
                    value={movie.metascore}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="stars"
                    placeholder="Stars"
                    value={movie.stars}
                    onChange={handleChange}
                />
                <button>Edit</button>
            </form>
        </div>
    );
};

export default UpdateMovie;