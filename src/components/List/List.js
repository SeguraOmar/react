import { useParams } from "react-router-dom";
import './List.css';
import { useEffect, useState } from 'react';
import { getFilmsFromTMdbWidthText } from '../../TMDBApi.js';

function List() {
    const { data } = useParams();

    const [films, setFilms] = useState([]);

    useEffect(() => {
        getFilmsFromTMdbWidthText(data, 1)
            .then(response => {
                console.log(response.results);
                setFilms(response.results);
            })
            .catch(error => {
                console.error("Error fetching films:", error);
            });
    }, [data]);

    return (
        <div className="film">
            <h2>Liste des films</h2>
            <p>{data}</p>
            {films.map((film, index) => (
                <div key={index}>
                    <img src={film.poster_path} alt="{`Poster du film ${index + 1}`}" />
                    <p>{film.overview}</p>
                </div>
            ))}
        </div>
    );
}

export default List;

