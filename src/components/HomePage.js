import { useState, useEffect } from 'react';
import { animeList } from '../utils/animeApi';
import AnimeList from './AnimeList';
import "../App.css";


const HomePage = () => {
    const [anime, setAnime] = useState([]);
    useEffect(() => {
        async function getList() {
            const lists = await animeList();
            setAnime(lists);
        };
        getList();
    }, [])
    return (
        <div className="animes">
            <div className="animeList">
                {anime ? anime.map((list) => {
                    return (
                        <AnimeList key={list.anime_id} id={list.anime_id} name={list.anime_name} image={list.anime_img} />
                    )
                }) : "Loading......"}
            </div>

        </div >

    );
}

export default HomePage;
