function getCharacters(callback) {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => callback(data))
}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
            <article>
                <div class="imagen-container">
                    <img src="${personaje.image}" alt="${personaje.name}">
                </div>
                <div class="info-container">
                    <h2>${personaje.name}</h2>      
                    <span>${personaje.species}</span>
                </div>
            </article>
        `);

            const main = document.querySelector('main');
            main.append(article);
    });
});


    
