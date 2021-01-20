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
  $('.search-radio__select-page').on('click', changePage);
  switch (status.subpage) {
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
      switch (status.postType) {
        case 'songs':
          $('.post-item__img').on('click', showModal);
          $('.post-item__fav').on('click', addPostToFav);
          break;
        case 'albums':
          $('.post-item__img').on('click', showModal);
          $('.post-item__fav').on('click', addPostToFav);
          break;
        case 'artists':
          $('.post-item__fav').on('click', addPostToFav);
          break;
        case 'videos':
          $('.post-item__vid').on('click', showModal);
          $('.post-item__fav').on('click', addPostToFav);
          break;
        default:
          break;
      }
      break;
    case 'favourites':
      $('.search-radio__select-page').on('click', changePage);
      $('.favourite-radio__page').on('click', showFavPosts);
      switch (status.postType) {
        case 'favSongs':
          $('.post-item__img').on('click', showModal);
          $('.post-item__fav').on('click', addPostToFav);
          break;
        case 'favAlbums':
          $('.post-item__img').on('click', showModal);
          $('.post-item__fav').on('click', addPostToFav);
          break;
        case 'favArtists':
          $('.post-item__fav').on('click', addPostToFav);
          break;
        case 'favVideos':
          $('.post-item__vid').on('click', showModal);
          $('.post-item__fav').on('click', addPostToFav);
          break;
        default:
          break;
      }
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
