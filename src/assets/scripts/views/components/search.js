export const search = () => {
  const template = `
  <section class="searchBar">
    <select name="searchBar__select" id="searchBarSelect">
      <option value="song" selected>Song</option>
      <option value="album">Album</option>
      <option value="musicArtist">Artist</option>
      <option value="musicVideo">Music Video</option>
    </select>
    <input type="text" id="nameToSearchInput">
    <section class="filter">
      <section class="filter__toggle">
        <p>Filter Search</p>
        <label class="switch">
          <input type="checkbox" name="filterCheckbox" id="filterCheckbox">
          <span class="slider round"></span>
        </label>
      </section>
      <section class="filter__content">
        <section class="country">
          <div>
            <input type="checkbox" id="countryCheckbox">
            <label for="countriesSelect">Country</label>
          </div>
          <select name="country__select" id="countriesSelect"></select>
        </section>
        <section class="explicit">
          <div>
            <input type="checkbox" id="explicitCheckbox" checked>
            <label for="explicitCheckbox">Explicit Content</label>
          </div>
        </section>
        <section class="limit">
          <input type="checkbox" id="limitCheckbox">
          <label for="limitNumber">Limit</label>
          <input type="number" id="limitNumber" value="50" min="1" max="200">
        </section>
      </section>
    </section>
  </section>
  <section class="main-content">
    <section class="content" id="content"></section>
  </section>`;

  return template;
};
