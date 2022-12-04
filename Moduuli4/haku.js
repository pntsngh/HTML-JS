'use strict';
const lomake = document.querySelector('form');
const apiUrl = 'https://api.tvmaze.com/search/shows?q=';

async function fetchJson(url, options = {}){
    const vastaus = await fetch(url, options);
    if (!vastaus.ok){
        throw new Error(vastaus.statusText);
    }
    return await vastaus.json();
}

lomake.addEventListener('submit', async function (evt){
    try {
        document.querySelector('#series').replaceChildren()
        evt.preventDefault();
        const hakusana = document.querySelector('#query').value;
        const sarjat = await fetchJson(apiUrl + hakusana);
        console.log(sarjat);
        for (let sarja of sarjat){
            const article = document.createElement('article');
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const figcaption = document.createElement('figcaption');
            const summary = document.createElement('p');
            const dialog = document.querySelector('#dialog');
            const iframe = document.querySelector('#frame');
            const a = document.createElement('a')
            a.addEventListener('click', () => {
                iframe.src = sarja['show']['url']
                dialog.showModal()
            })
            const span = document.querySelector('#span')
            span.addEventListener('click', () => {
            dialog.close();
            })
            article.innerText = sarja['show']['name'];
            article.appendChild(figure);
            figure.appendChild(img);
            if (sarja['show']['image'] === null){
                img.src = 'https://via.placeholder.com/100x140?text=No+image'
                img.alt = 'noimage'
            } else {
                img.src = sarja['show']['image']['medium'];
                img.alt = 'image'
            }
            figure.appendChild(figcaption);
            figcaption.innerText = sarja['show']['genres'].join('|');
            article.appendChild(summary);
            summary.innerHTML = sarja['show']['summary'];
            article.appendChild(a)
            a.href = sarja['show']['url']
            a.text = 'Link to details'
            a.target = '_blank'
            document.querySelector('#series').appendChild(article);
        }
    } catch (e){
        console.error(e.message);
    }
});