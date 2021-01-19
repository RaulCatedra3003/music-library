export const postArtist = ({ artistName, primaryGenreName, artistLinkUrl }) => {
  const template = `
  <section class="post-item">
    <p class="post-item__name">name: ${artistName}</p>
    <p class="post-item__genre">Genre: ${primaryGenreName}</p>
    <a class="post-item__link" href=${artistLinkUrl}></a>
    <button class="post-item__play"></button>
  </section>`;
  return template;
};
