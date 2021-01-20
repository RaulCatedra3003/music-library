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
  trackId,
}) => {
  const date = releaseDate.split('T')[0];
  const durationMin = (trackTimeMillis / 60000).toFixed(0);
  const durationSec = ((trackTimeMillis % 60000) / 1000).toFixed(0);
  const template = `
    <section class="post-item" data-position="front">
      <section class="post-item__vid" style="background-image: url(${artworkUrl100})"></section>
      <section class="post-item__front" >
        <section class="post-item__principal-data">
          <p class="post-item__name">${trackName}</p>
          <p class="post-item__artist">${artistName}</p>
          <p class="post-item__price">${trackPrice} ${currency}</p>
          <section class="post-item__icons">
            <a class="post-item__link" href=${trackViewUrl} target="_blank"><i class="bx bxs-music"></i></a>
            <button class="post-item__fav bx bx-star" data-type="video" data-id="${trackId}"></button>
          </section>
        </section>
      </section>
      <section class="post-item__back">
        <p class="post-item__genre"><span>Genre:</span> ${primaryGenreName}</p>
        <p class="post-item__length"><span>Duration:</span> ${durationMin}:${
    durationSec < 10 ? '0' + durationSec : durationSec
  }</p>
        <p class="post-item__release"><span>Release:</span> ${date}</p>
        <video src=${previewUrl} controls></video>
      </section>
    </section>`;
  return template;
};
