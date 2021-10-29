export const animeList = async () => {
    const data = await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/")
        .then((res) => res.json());
    return data.data;
}

export const animeFacts = async (anime_name) => {
    const data = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${anime_name}`)
        .then((res) => res.json());
    return data.data;
}