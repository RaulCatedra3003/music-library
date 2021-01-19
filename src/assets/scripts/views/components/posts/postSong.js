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
  const date = releaseDate.split('T')[0];
  const durationMin = (trackTimeMillis / 60000).toFixed(0);
  const durationSec = ((trackTimeMillis % 60000) / 1000).toFixed(0);
  //TODO usar get date para los min segundos
  const template = `
    <section class="post-item" data-position="front">
    <section class="post-item__img" style="background-image: url(${artworkUrl100})"></section>
    <section class="post-item__front" >
        <section class="post-item__principal-data">
          <p class="post-item__name">${trackName}</p>
          <p class="post-item__artist">${artistName}</p>
          <section class="post-item__overflow-data">
            <p class="post-item__album">${collectionName}</p>
            <p class="post-item__price">${trackPrice} ${currency}</p>
          </section>
          <section class="post-item__icons">
            <a class="post-item__link" href=${trackViewUrl}><i class="bx bxs-music"></i></a>
            <button class="post-item__fav bx bx-star"></button>
          </section>
        </section>
      </section>
      <section class="post-item__back">
        <p class="post-item__genre">Genre: ${primaryGenreName}</p>
        <p class="post-item__length">Duration: ${durationMin}:${
    durationSec < 10 ? '0' + durationSec : durationSec
  }</p>
        <p class="post-item__release">Release: ${date}</p>
        <button class="post-item__play bx bx-play" data-preview=${previewUrl}></button>
      </section>
    </section>`;
  return template;
};
