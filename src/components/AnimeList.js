import React from 'react';
import "./animeList.css";
import { Link } from 'react-router-dom';

const AnimeList = ({ name, image }) => {

    return (
        <Link to={`/facts/${name}`} className="anime_links">
            <div className="anime">
                <img className="images" src={image} alt={name} />
                <h2 className="animeTitle" name={name}>{name}</h2>
            </div>
        </Link>
    )
}

export default AnimeList
