export const postArtist = ({ artistName, primaryGenreName, artistLinkUrl }) => {
  const template = `
  <section class="post-item">
    <p class="post-item__name">name: ${artistName}</p>
    <p class="post-item__genre">Genre: ${primaryGenreName}</p>
    <a class="post-item__link" href=${artistLinkUrl}>Itunes link</a>
    <button class="post-item__fav"></button>
  </section>`;
  return template;
};
