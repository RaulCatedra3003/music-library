export const postAlbum = ({
  artworkUrl100,
  collectionName,
  artistName,
  collectionPrice,
  currency,
  trackCount,
  releaseDate,
  primaryGenreName,
}) => {
  const template = `
    <section class="post-item">
      <section class="post-item__img" style="background-image: url(${artworkUrl100})"></section>
      <p class="post-item__name">name: ${collectionName}</p>
      <p class="post-item__artist">artist: ${artistName}</p>
      <p class="post-item__price">price: ${collectionPrice} ${currency}</p>
      <p class="post-item__songs-number">Number of songs: ${trackCount}</p>
      <p class="post-item__release">Release date: ${releaseDate}</p>
      <p class="post-item__genre">Genre: ${primaryGenreName}</p>
    </section>`;
  return template;
};
