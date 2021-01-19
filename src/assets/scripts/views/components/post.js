export const post = ({artworkUrl100, trackName, artistName, collectionName}) =>{
  const template =`
    <section class="post-item">
      <section class="post-item__img col-5" style="background-image: url(${artworkUrl100})"></section>
      <p class="post-item__name col-5">name: ${trackName}</p>
      <p class="post-item__artist col-5">artist: ${artistName}</p>
      <p class="post-item__album col-5">album: ${collectionName}</p>
      <button class="post-item__play col-5"></button>
    </section>
  `;
  return template;
}