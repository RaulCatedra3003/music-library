export const home = () => {
  const template = `
  <header class="header">
    <h1 class="header__title">MUSIC LIBRARY</h1>
  </header>
  <section class="searchBar">
    <select name="searchBar__select" id="searchBarSelect">
      <option value="song" selected>Song</option>
      <option value="album">Album</option>
      <option value="artist">Artist</option>
      <option value="video">Music Video</option>
    </select>
    <input type="text" id="nameToSearchInput">
    <section class="country">
      <input type="checkbox" id="countryCheckbox">
      <label for="countriesSelect">Country</label>
      <select name="country__select" id="countriesSelect"></select>
    </section>
    <section class="explicit">
      <label for="explicitCheckbox">Explicit Content</label>
      <input type="checkbox" id="explicitCheckbox" checked>
    </section>
    <section class="limit">
      <input type="checkbox" id="limitCheckbox">
      <label for="limitNumber">Limit</label>
      <input type="number" id="limitNumber" value="50">
    </section>
  </section>
  <section class="main-content">
    <section class="content"></section>
    <section class="fav"></section>
  </section>`;

  return template;
};
