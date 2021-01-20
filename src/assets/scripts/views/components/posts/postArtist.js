export const postArtist = ({
  artistName,
  primaryGenreName,
  artistLinkUrl,
  artistId,
}) => {
  const template = `
  <section class="post-item">
  <section class="post-item__img" style="background-image: url('/src/assets/img/artist.jpg')"></section>
    <section class="post-item__front" >
      <section class="post-item__principal-data">
        <p class="post-item__name">${artistName}</p>
        <p class="post-item__genre"><span>Genre:</span> ${primaryGenreName}</p>
      </section>
      <section class="post-item__icons">
        <a class="post-item__link" href=${artistLinkUrl} target="_blank"><i class="bx bxs-music"></i></a>
        <button class="post-item__fav bx bx-star" data-type="artist" data-id="${artistId}"></button>
      </section>
    </section>
  </section>`;
  return template;
};
