/*
  Here is a guide for the steps you could take:
*/
SC.initialize({
    client_id: '8538a1744a7fdaa59981232897501e04',
});

// 1. First select and store the elements you'll be working with

const musicPlayer = document.querySelector('.player');
const search = document.querySelector('.search');
const searchBar = document.querySelector('.search-form');
const results = document.querySelector('.results');

// Widget

var track_url = 'http://soundcloud.com/forss/flickermood';
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
    console.log('oEmbed response: ', oEmbed);
});

SC.stream('/tracks/293').then(function(player) {
    player.play();
});

// 2. Create your `onSubmit` event for getting the user's search term



// 3. Create your `fetch` request that is called after a submission



// 4. Create a way to append the fetch results to your page

SC.get('/tracks', {
    q: 'buskers',
    license: 'cc-by-sa'
}).then(function(tracks) {
    console.log(tracks);
});

// 5. Create a way to listen for a click that will play the song in the audio play