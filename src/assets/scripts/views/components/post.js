export const post = ({artworkUrl100, trackName, artistName, collectionName}) =>{
  const template =`
    <section class="post-item">
      <section class="post-item__img" style="background-image: url(${artworkUrl100})"></section>
      <p class="post-item__name">name: ${trackName}</p>
      <p class="post-item__artist">artist: ${artistName}</p>
      <p class="post-item__album">album: ${collectionName}</p>
      <button class="post-item__play"></button>
    </section>
  `;
  return template;
}