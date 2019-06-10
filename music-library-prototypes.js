

// prototypes
// ===========================================

function Library (name, creator){
  this.name = name,
  this.creator = creator,
  this.playlists = []
}

function Playlist (name){
  this.playlistName = name,
  this.tracks = []
}

function Track (title, rating, length){
  this.title = title,
  this.rating = rating,
  this.length = length
}

//============================================

Library.prototype.addPlayList = function (newPlaylist){
  this.playlists.push(newPlaylist)
}

Playlist.prototype.addTrack = function(track){
  this.tracks.push(track);
}

Playlist.prototype.overallRating = function(){
  let totalRating = 0;
  this.tracks.forEach(track => {
    totalRating += track.rating;
  });
  return totalRating
}

Playlist.prototype.totalDuration = function(){
  let totalLength = 0;
  this.tracks.forEach(track => {
    totalLength += track.length
  });
  return totalLength
}

//=====================================================

const slowMusic = new Library('super slow', 'DJ Slow');
const fastMusic = new Library('super fast', 'DJ Fast');
// console.log(slowMusic, fastMusic)

const myPlaylist = new Playlist('hardfloor: best-songs');
const otherPlaylist = new Playlist('industrial: best-songs')
// console.log(myPlaylist, otherPlaylist)

const track1 = new Track ('you must be joking', 4, 80);
const track2 = new Track ('pet semetary', 3, 90);
const track3 = new Track ('just one hit', 5, 100);
// console.log(track1, track2, track3)

myPlaylist.addTrack(track1)
myPlaylist.addTrack(track2)
myPlaylist.addTrack(track3)
// console.log(myPlaylist)

console.log(myPlaylist.overallRating())
console.log(myPlaylist.totalDuration())






