export const postSong = ({
  artworkUrl100,
  trackName,
  artistName,
  collectionName,
  trackPrice,
  currency,
  releaseDate,
  trackTimeMillis,
  primaryGenreName,
  trackViewUrl,
  previewUrl,
}) => {
  const template = `
    <section class="post-item">
      <section class="post-item__img" style="background-image: url(${artworkUrl100})"></section>
      <p class="post-item__name">name: ${trackName}</p>
      <p class="post-item__artist">artist: ${artistName}</p>
      <p class="post-item__album">album: ${collectionName}</p>
      <p class="post-item__price">price: ${trackPrice} ${currency}</p>
      <p class="post-item__release">Release date: ${releaseDate}</p>
      <p class="post-item__length">Song length: ${trackTimeMillis}</p>
      <p class="post-item__genre">Genre: ${primaryGenreName}</p>
      <a class="post-item__link" href=${trackViewUrl}></a>
      <button class="post-item__play" data-preview=${previewUrl}></button>
    </section>`;
  return template;
};
