const apitmdbKey = '4a92ef08e36ee8ac95c1c60b8007c532';
const tmbdUrl = 'https://api.themoviedb.org/3';


const generateButton=document.getElementById('generateBtn');

const getTvShowsGenres = async () =>{
    const genreRequestEndpoint= '/genre/tv/list';
    const requestParams = `?api_key=${apitmdbKey}`;
    const urltoFetch = tmbdUrl +genreRequestEndpoint+requestParams;
    try{
        const response = await fetch(urltoFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            const tvShowsGenres = jsonResponse.genres;
            return tvShowsGenres;
        }
    }
    catch(error){
        console.log(error)
    }
}
const getTvShow = async () =>{
    const userSelectedGenre = getCurrentGenre();
    const movieEndpoint = '/discover/tv';
    const requestParams= `?api_key=${apitmdbKey}&with_genres=${userSelectedGenre}`;
    const urltoFetch = tmbdUrl + movieEndpoint + requestParams;
    try{
        const response = await fetch(urltoFetch);
        if(response.ok){
            const jsonResponse= await response.json();
            const movies = jsonResponse.results;
            return movies;
        }

    }catch(error){
        console.log(error)
    }
}
const getTvShowInfo = async (tvShow) =>{
    const tvShowID = tvShow.id;
    const movieEndpoint = `/tv/${tvShowID}`;
    const requestParams = `?api_key=${apitmdbKey}`
    const urltoFetch = tmbdUrl + movieEndpoint + requestParams;
    try{
        const response = await fetch(urltoFetch);
        if(response.ok){
            
            const tvShowInfo = await response.json();
            
            return tvShowInfo;
        }
    }
    catch(error){
        console.log(error)
    }


}

const getGenres = async () =>{
    const genreRequestEndpoint ='/genre/movie/list';
    const requestParams= `?api_key=${apitmdbKey}`
    const urltoFetch = tmbdUrl + genreRequestEndpoint + requestParams;
    try{
        const response = await fetch(urltoFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            
            const genres= jsonResponse.genres;
            return genres;

        }
    }
    catch(error){
        console.log(error);
    }
}

const getMovies = async () =>{
    const userSelectedGenre = getCurrentGenre();
    const movieEndpoint = '/discover/movie';
    const requestParams= `?api_key=${apitmdbKey}&with_genres=${userSelectedGenre}`;
    const urltoFetch = tmbdUrl + movieEndpoint + requestParams;
    try{
        const response = await fetch(urltoFetch);
        if(response.ok){
            const jsonResponse= await response.json();
            const movies = jsonResponse.results;
            return movies;
        }

    }catch(error){
        console.log(error)
    }

}

const getMovieInfo = async (movie) =>{
    const movieID = movie.id;
    const movieEndpoint = `/movie/${movieID}`;
    const requestParams = `?api_key=${apitmdbKey}`
    const urltoFetch = tmbdUrl + movieEndpoint + requestParams;
    try{
        const response = await fetch(urltoFetch);
        if(response.ok){
            
            const movieInfo = await response.json();
            return movieInfo;
        }
    }
    catch(error){
        console.log(error)
    }


}

const showRandomTvShow =async () =>{
    const movieInfoFill = document.getElementById('movieInfo')
    if(movieInfoFill.childNodes.length >0){
        clearMovie();
    }
    const listTvShow = await getTvShow();
    const randTvShow = getRandomMovie(listTvShow);
    const tvShowInfo = await getTvShowInfo(randTvShow);
    displayAllMovieInfo(tvShowInfo);
}

const showRandomMovie= async () =>{
    const movieInfoFill = document.getElementById('movieInfo')
    if(movieInfoFill.childNodes.length >0){
        clearMovie();
    }
    const listMovies = await getMovies();
    const randMovie = getRandomMovie(listMovies);
    const movieInfo = await getMovieInfo(randMovie);
    displayAllMovieInfo(movieInfo);
    

    
}

var selection;
const submitBtn = document.getElementById('radioSelect');
submitBtn.onclick = () =>{
    
    var radios = document.getElementsByName('selectType');
    hideLikeDislikeButtons();
    clearMovie();
    for(var radio of radios){
        if(radio.checked){
            selection = radio.value;
        }
    }
    
    if(selection==="Movie"){
        getGenres().then(drawDownMenuPopulate);
    }
    if(selection ==="Tv"){
        getTvShowsGenres().then(drawDownMenuPopulate);
    }
}






generateButton.onclick = () =>{
    var select = document.getElementById('genres');
    
    if(select.value != 'empty' && selection === "Movie"){
        
        showRandomMovie();
        showLikeDislikeButtons();
    }
    if(select.value != 'empty' && selection === "Tv"){
        showRandomTvShow();
        showLikeDislikeButtons();
    }


}





