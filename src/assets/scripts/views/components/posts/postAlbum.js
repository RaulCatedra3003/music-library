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
  const date = releaseDate.split('T')[0];
  const template = `
    <section class="post-item" data-position="front">
      <section class="post-item__img" style="background-image: url(${artworkUrl100})"></section>
      <section class="post-item__front" >
        <section class="post-item__principal-data">
          <p class="post-item__name">${collectionName}</p>
          <p class="post-item__artist">${artistName}</p>
          <p class="post-item__price">${collectionPrice} ${currency}</p>
        </section>
        <section class="post-item__icons">
          <button class="post-item__fav bx bx-star"></button>
        </section>
      </section>
      <section class="post-item__back">
        <p class="post-item__songs-number"><span>Songs number:</span> ${trackCount}</p>
        <p class="post-item__release"><span>Release:</span> ${date}</p>
        <p class="post-item__genre"><span>Genre:</span> ${primaryGenreName}</p>
      </section>
    </section>`;
  return template;
};
