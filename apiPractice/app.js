const ul = document.querySelector('#jokes');

const appendToUL = function(joke) {
    console.log(joke)
    const jokeContainer = document.createElement('li')
    jokeContainer.append(joke)
    ul.append(jokeContainer);
}



// xhr pattern

const xhrButton = document.querySelector('#xhr')

const xhr = function() {
    const request = new XMLHttpRequest();
    request.onload = function() {
        const joke = JSON.parse(this.responseText).joke;
        appendToUL(joke)
    }
    request.onerror = function(e) {
        console.log('damn bro...', e);
    }
    request.open('GET', 'https://icanhazdadjoke.com/')
    request.setRequestHeader('accept', 'application/json')
    request.send();
}

xhrButton.addEventListener('click', xhr);


// fetch pattern

fetchButton = document.querySelector('#fetch');

const fetchy = function() {
    fetch('https://icanhazdadjoke.com/', {headers: {accept : 'application/json'}})
        .then(res => res.json())
        .then(data => appendToUL(data.joke))
        .catch(e => console.log('error', e))
}

fetchButton.addEventListener('click', fetchy)


// axios pattern

axiosButton = document.querySelector('#axios');

const axiosis = function() {
    axios.get('https://icanhazdadjoke.com/', {headers: {accept : 'application/json'}})
        .then(res => appendToUL(res.data.joke))
        .catch(e => console.log('error', e))
}

axiosButton.addEventListener('click', axiosis);