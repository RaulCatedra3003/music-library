import { status } from '../actions/actions';
import { goSearch } from '../helpers/helpers';
import {
  addPostToFav,
  changePage,
  deletePosts,
  showFavPosts,
  showModal,
} from '../store/store';
import { showFilterOptions } from '../views/showfilteroptions';

let timeoutIds = [];

export const addEventListeners = status => {
  $(document).off().find('*').off();
  switch (status) {
    case 'home':
      $('.search-radio__select-page').on('click', changePage);
      break;
    case 'search':
      $('.search-radio__select-page').on('click', changePage);
      $('#filterCheckbox').on('click', showFilterOptions);
      $('#searchBarSelect').on('change', checkFilter);
      $('#nameToSearchInput').on('keyup', checkFilter);
      $('#countryCheckbox').on('click', checkFilter);
      $('#countriesSelect').on('change', checkFilter);
      $('#explicitCheckbox').on('click', checkFilter);
      $('#limitCheckbox').on('click', checkFilter);
      $('#limitNumber').on('input', checkFilter);
    case 'songs':
      $('.search-radio__select-page').on('click', changePage);
      $('#filterCheckbox').on('click', showFilterOptions);
      $('#searchBarSelect').on('change', checkFilter);
      $('#nameToSearchInput').on('keyup', checkFilter);
      $('#countryCheckbox').on('click', checkFilter);
      $('#countriesSelect').on('change', checkFilter);
      $('#explicitCheckbox').on('click', checkFilter);
      $('#limitCheckbox').on('click', checkFilter);
      $('#limitNumber').on('input', checkFilter);
      $('.post-item__img').on('click', showModal);
      $('.post-item__fav').on('click', addPostToFav);
      break;
    case 'albums':
      $('.search-radio__select-page').on('click', changePage);
      $('#filterCheckbox').on('click', showFilterOptions);
      $('#searchBarSelect').on('change', checkFilter);
      $('#nameToSearchInput').on('keyup', checkFilter);
      $('#countryCheckbox').on('click', checkFilter);
      $('#countriesSelect').on('change', checkFilter);
      $('#explicitCheckbox').on('click', checkFilter);
      $('#limitCheckbox').on('click', checkFilter);
      $('#limitNumber').on('input', checkFilter);
      $('.post-item__img').on('click', showModal);
      $('.post-item__fav').on('click', addPostToFav);
      break;
    case 'artists':
      $('.search-radio__select-page').on('click', changePage);
      $('#filterCheckbox').on('click', showFilterOptions);
      $('#searchBarSelect').on('change', checkFilter);
      $('#nameToSearchInput').on('keyup', checkFilter);
      $('#countryCheckbox').on('click', checkFilter);
      $('#countriesSelect').on('change', checkFilter);
      $('#explicitCheckbox').on('click', checkFilter);
      $('#limitCheckbox').on('click', checkFilter);
      $('#limitNumber').on('input', checkFilter);
      $('.post-item__fav').on('click', addPostToFav);
      break;
    case 'videos':
      $('.search-radio__select-page').on('click', changePage);
      $('#filterCheckbox').on('click', showFilterOptions);
      $('#searchBarSelect').on('change', checkFilter);
      $('#nameToSearchInput').on('keyup', checkFilter);
      $('#countryCheckbox').on('click', checkFilter);
      $('#countriesSelect').on('change', checkFilter);
      $('#explicitCheckbox').on('click', checkFilter);
      $('#limitCheckbox').on('click', checkFilter);
      $('#limitNumber').on('input', checkFilter);
      $('.post-item__vid').on('click', showModal);
      $('.post-item__fav').on('click', addPostToFav);
      break;
    case 'favourites':
      $('.search-radio__select-page').on('click', changePage);
      $('.favourite-radio__page').on('click', showFavPosts);
      break;
    case 'favSongs':
      $('.search-radio__select-page').on('click', changePage);
      $('.favourite-radio__page').on('click', showFavPosts);
      $('.post-item__img').on('click', showModal);
      $('.post-item__fav').on('click', addPostToFav);
      break;
    case 'favAlbums':
      $('.search-radio__select-page').on('click', changePage);
      $('.favourite-radio__page').on('click', showFavPosts);
      $('.post-item__img').on('click', showModal);
      $('.post-item__fav').on('click', addPostToFav);
      break;
    case 'favArtists':
      $('.search-radio__select-page').on('click', changePage);
      $('.favourite-radio__page').on('click', showFavPosts);
      $('.post-item__fav').on('click', addPostToFav);
      break;
    case 'favVideos':
      $('.search-radio__select-page').on('click', changePage);
      $('.favourite-radio__page').on('click', showFavPosts);
      $('.post-item__vid').on('click', showModal);
      $('.post-item__fav').on('click', addPostToFav);
      break;
  }
};

export const checkFilter = () => {
  timeoutIds.forEach(e => {
    window.clearTimeout(e);
  });
  if ($(nameToSearchInput).val() !== '') {
    const timeoutID = setTimeout(goSearch, 300);
    timeoutIds.push(timeoutID);
  } else {
    status.page = 'search';
    deletePosts();
  }
};
