export const favourite = () =>{
  const template = `
  <section class="favourite-radio">
    <input type="radio" id="favSong" name="searchOrfav" value="song" class="favourite-radio__page">
    <label for="favSong">Songs</label>
    <input type="radio" id="favAlbum" name="searchOrfav" value="album" class="favourite-radio__page">
    <label for="favAlbum">Albums</label>
    <input type="radio" id="favArtist" name="searchOrfav" value="artist" class="favourite-radio__page">
    <label for="favArtist">Artists</label>
    <input type="radio" id="favVideo" name="searchOrfav" value="video" class="favourite-radio__page">
    <label for="favVideo">Videos</label>
  </section>
  `;
  return template;
}