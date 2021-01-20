export const favourite = () => {
  const template = `
  <section class="favourite-radio">
    <input type="radio" id="favSong" name="searchOrfavPage" data-type="song" class="favourite-radio__page">
    <label for="favSong">Songs</label>
    <input type="radio" id="favAlbum" name="searchOrfavPage" data-type="album" class="favourite-radio__page">
    <label for="favAlbum">Albums</label>
    <input type="radio" id="favArtist" name="searchOrfavPage" data-type="artist" class="favourite-radio__page">
    <label for="favArtist">Artists</label>
    <input type="radio" id="favVideo" name="searchOrfavPage" data-type="video" class="favourite-radio__page">
    <label for="favVideo">Videos</label>
  </section>
  <section id="favRoot" class="fav-root"></section>
  `;
  return template;
};
