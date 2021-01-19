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
  const date = releaseDate.split("T")[0];
  const durationMin = (trackTimeMillis/60000).toFixed(0);
  const durationSec = ((trackTimeMillis%60000)/1000).toFixed(0);
  const template = `
    <section class="post-item">
      <section class="post-item__img col-3" style="background-image: url(${artworkUrl100})"></section>
      <section class="col-6">
        <p class="post-item__name">Name: ${trackName}</p>
        <p class="post-item__artist">Artist: ${artistName}</p>
        <p class="post-item__album">Album: ${collectionName}</p>
        <p class="post-item__genre">Genre: ${primaryGenreName}</p>
        <p class="post-item__length">Duration: ${durationMin}:${(durationSec<10)? "0"+durationSec : durationSec}</p>
        <p class="post-item__release">Release: ${date}</p>
      </section>
      <section class="col-3">
        <p class="post-item__price">${trackPrice} ${currency}</p>
        <section class="post-item__icons">
          <a class="post-item__link col-6" href=${trackViewUrl}><i class="bx bxs-music"></i></a>
          <button class="post-item__play bx bx-play col-6" data-preview=${previewUrl}></button>
        </section>
      </section>
      <!--<button class="post-item__fav"></button>-->
    </section>`;
  return template;
};
