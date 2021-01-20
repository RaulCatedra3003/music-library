export const home =() =>{
  const template = `
  <header class="header">
    <h1 class="header__title">MUSIC LIBRARY</h1>
  </header>
  <section class="searchRadio">
    <input type="radio" id="search" name="searchOrfav" value="search" class="selectPage">
    <label for="search">Search</label>
    <input type="radio" id="favourite" name="searchOrfav" value="favourite" class="selectPage">
    <label for="favourite">Favourites</label>
  </section>
  <section id="contentRoot"></section>
  `;
  return template;
}
/* <section class="fav"></section> */
