const drawDownMenuPopulate = (genres)=>{
    const select = document.getElementById('genres');
    var i, L = select.options.length - 1;
    for(i = L; i > 0; i--) {
      select.remove(i);
    }
    
    for (const genre of genres){
        let option =document.createElement("option");
        option.value= genre.id;
        option.text = genre.name;
        select.appendChild(option)

    }


}

const getCurrentGenre = () =>{
    const selectedGenre = document.getElementById('genres').value;
    return selectedGenre;
}

const showLikeDislikeButtons = () =>{
    const divBtn = document.getElementsByClassName('likeordislike')[0];
    divBtn.style.visibility= 'visible';
    
}
const hideLikeDislikeButtons = () =>{
    const divBtn = document.getElementsByClassName('likeordislike')[0];
    if(divBtn.style.visibility === 'visible'){
        divBtn.style.visibility= 'hidden';
    }
    
}
const getRandomMovie = (moviesArray) =>{
    let ranNum = Math.floor(Math.random() * moviesArray.length);
    const randomMovie = moviesArray[ranNum];
    return randomMovie;

}

const clearMovie = () =>{
    const movieTitleDiv = document.getElementById('text');
    const moviePosterDiv= document.getElementById('poster');
    moviePosterDiv.innerHTML = '';
    movieTitleDiv.innerHTML = '';
    
}

const likeMovie = () =>{
    clearMovie();
    if(selection==="Movie"){
        showRandomMovie();
    }
    if(selection ==="Tv"){
        showRandomTvShow();
    }

    
}

const dislikeMovie = () =>{
    clearMovie();
    if(selection==="Movie"){
        showRandomMovie();
    }
    if(selection ==="Tv"){
        showRandomTvShow();
    }
}

const showMoviePoster = (posterPath) =>{
    const pathURL  = `https://image.tmdb.org/t/p/original/${posterPath}`;
    
    const moviePosterDiv = document.createElement('img');
    moviePosterDiv.setAttribute('id', 'moviePoster');
    moviePosterDiv.setAttribute('src', pathURL);
    
    return moviePosterDiv;
}

const showMovieTitle = (title) =>{
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('id', 'movieTitle');
    titleHeader.innerHTML = title;
    return titleHeader;

}
const showMovieOverView = (overview) =>{
    const overViewText= document.createElement('p');
    overViewText.setAttribute('id', 'overviewText');
    overViewText.innerHTML = overview;
    return overViewText;

    
}




const displayAllMovieInfo= (movieInfo) =>{
    const movieTextElement = document.getElementById('text');
    const moviePosterElement = document.getElementById('poster');
    const likeBtn = document.getElementById('like');
    const dislikeBtn = document.getElementById('dislike');

    const getPoster = showMoviePoster(movieInfo.poster_path);
    let getTitle;
    const getOverview = showMovieOverView(movieInfo.overview);

    
    if(selection==="Movie"){
        getTitle = showMovieTitle(movieInfo.title);
    }
    if(selection === 'Tv'){
        getTitle = showMovieTitle(movieInfo.name);
    }
    movieTextElement.appendChild(getTitle);
    moviePosterElement.appendChild(getPoster);
    movieTextElement.appendChild(getOverview);


    likeBtn.onclick = likeMovie;
    dislikeBtn.onclick = dislikeMovie;
    
}

