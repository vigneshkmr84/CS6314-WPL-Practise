console.log("Starting Application")

var xmlData
async function getMoviesData() {
    let out
    /* await fetch(url = 'http://localhost:8000/movies.xml', {
        method: 'GET'
        , cache: 'no-cache'
        , mode: 'cors'
    }
    ).then(
        response => response.text()
    ).then((data) => { xmlData = data })
    // console.log(xmlData)
    console.log('processed movies data : ' + Date.now()) */

    await fetch('./movies.xml', {
        method: 'GET'
        , cache: 'no-cache'
        , mode: 'cors'
    }
    ).then(
        response => response.text()
    ).then((data) => { xmlData = data })
    // console.log(xmlData)
    console.log('processed movies data : ' + Date.now())
}

var moviesList;

function parseMoviesXML(xmlData) {
    console.log('inside parser : ' + Date.now())
    const parser = new DOMParser();
    const xmlDOM = parser.parseFromString(xmlData, 'application/xml');
    const errorNode = xmlDOM.querySelector("parsererror");
    if (errorNode) {
        console.log("error while parsing");
    } else {
        /* console.log(xmlDOM.documentElement.nodeName);
        // console.log(doc.getElementsByTagName('movies')[0].childNodes)
        let moviesData = xmlDOM.getElementsByTagName('movies')[0].childNodes
        for ( let movie in moviesData){
            console.log(movie)
        }
        // console.log(doc.getElementsByTagName('movies')[0].textContent) */
        let movies = xmlDOM.querySelectorAll('movie')
        console.log(movies)

        movies.forEach((xmlMovieNode) => {
            // console.log(xmlMovieNode.children[1].innerHTML);
            // console.log(xmlMovieNode.getAttribute('country'))

            // WORKING VERSION
            /* obj = {
                title : xmlMovieNode.children[0].innerHTML,
                year: xmlMovieNode.children[1].innerHTML,
                genre: xmlMovieNode.children[3].innerHTML,
                description: xmlMovieNode.children[4].innerHTML
            } */
            let actorList = [];
            let actorListNode = xmlMovieNode.querySelectorAll('actor')
            actorListNode.forEach((actor) => {
                actorList.push(actor.querySelector('first_name').innerHTML
                    + " " + actor.querySelector('last_name').innerHTML)
            })
            obj = {
                title: xmlMovieNode.querySelector('title').innerHTML
                , year: xmlMovieNode.querySelector('year').innerHTML
                , description: xmlMovieNode.querySelector('summary')?.innerHTML
                , genre: xmlMovieNode.querySelector('genre').innerHTML
                , actors: actorList.join(', ')
            }
            console.log(obj)

            let tableBody = document.getElementById('tableBody')
            let trElement = document.createElement('tr')
            let titleElement = document.createElement('td')
            titleElement.innerText = obj.title;

            let yearElement = document.createElement('td')
            yearElement.innerText = obj.year;

            let descriptionElement = document.createElement('td')
            descriptionElement.innerText = obj.description;

            let genreElement = document.createElement('td')
            genreElement.innerText = obj.genre;

            let actorsElement = document.createElement('td')
            actorsElement.innerText = obj.actors;

            trElement.appendChild(titleElement)
            trElement.appendChild(yearElement)
            trElement.appendChild(descriptionElement)
            trElement.appendChild(genreElement)
            trElement.appendChild(actorsElement)

            tableBody.appendChild(trElement)
        })
    }
}

// getMoviesData() //.then(out => xmlData)
getMoviesData().then(() => {
    // console.log(xmlData)
    console.log('after movies data : ' + Date.now())
    parseMoviesXML(xmlData);
})

/* console.log('after movies data : ' + Date.now())
parseMoviesXML(xmlData); */
