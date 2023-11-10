const API_TOKEN = "3dbf6092f3702cd4a123e2f436458af0";

export function getFilmsFromTMdbWidthText(text, page) {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN +
        "&language=fr&query=" + text + '&page=' + page;

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));
}
