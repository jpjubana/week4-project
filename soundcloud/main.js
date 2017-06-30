const searchtext = document.querySelector("#searchtext");
const search = document.querySelector("#search");
const results = document.querySelector("#results");
const player = document.querySelector("#player");

search.addEventListener('click', function(e) {
    e.preventDefault();
    SC.get('/tracks', { q: searchtext.value, limit: 13 })
        .then(function(json) {
            for (let i in json) {
                let container = document.createElement('div');
                container.setAttribute('class', 'song');
                container.addEventListener('click', function(e) {
                    SC.oEmbed(json[i].uri, {
                        element: document.getElementById('player'),
                        auto_play: true
                    });
                })
                results.appendChild(container);

                let art = document.createElement('img');
                art.setAttribute('class', 'albumArt');
                art.setAttribute('src', json[i].artwork_url);
                container.appendChild(art);

                let title = document.createElement('p');
                title.setAttribute('class', 'songtitle');
                title.textContent = json[i].title;
                container.appendChild(title);

                let artist = document.createElement('p');
                artist.setAttribute('class', 'artist');
                artist.textContent = json[i].user.username;
                container.appendChild(artist);
            }
        });
})