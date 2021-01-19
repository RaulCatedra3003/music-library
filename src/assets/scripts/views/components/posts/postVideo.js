export const postVideo = ({
  artworkUrl100,
  trackName,
  artistName,
  trackPrice,
  currency,
  releaseDate,
  trackTimeMillis,
  primaryGenreName,
  previewUrl,
  trackViewUrl,
}) => {
  const template = `
    <section class="post-item">
      <section class="post-item__img" style="background-image: url(${artworkUrl100})"></section>
      <p class="post-item__name">name: ${trackName}</p>
      <p class="post-item__artist">artist: ${artistName}</p>
      <p class="post-item__price">price: ${trackPrice} ${currency}</p>
      <p class="post-item__release">Release date: ${releaseDate}</p>
      <p class="post-item__length">Song length: ${trackTimeMillis}</p>
      <p class="post-item__genre">Genre: ${primaryGenreName}</p>
      <a class="post-item__link" href=${trackViewUrl}>Itunes link</a>
      <button class="post-item__play" data-preview=${previewUrl}></button>
      <button class="post-item__fav"></button>
    </section>`;
  return template;
};
