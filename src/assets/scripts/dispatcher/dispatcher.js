import { status } from '../actions/actions';
import { goSearch } from '../helpers/helpers';
import { changePage, deletePosts, showModal } from '../store/store';
import { showFilterOptions } from '../views/showfilteroptions';

let timeoutIds = [];

export const addEventListeners = status => {
  $(document).off().find('*').off();
  switch (status) {
    case 'home':
      $('.selectPage').on('click', changePage);
      break;
    case 'search':
      $('.selectPage').on('click', changePage);
      $('#filterCheckbox').on('click', showFilterOptions);
      $('#searchBarSelect').on('change', checkFilter);
      $('#nameToSearchInput').on('keyup', checkFilter);
      $('#countryCheckbox').on('click', checkFilter);
      $('#countriesSelect').on('change', checkFilter);
      $('#explicitCheckbox').on('click', checkFilter);
      $('#limitCheckbox').on('click', checkFilter);
      $('#limitNumber').on('input', checkFilter);
    case 'songs':
      $('.selectPage').on('click', changePage);
      $('#filterCheckbox').on('click', showFilterOptions);
      $('#searchBarSelect').on('change', checkFilter);
      $('#nameToSearchInput').on('keyup', checkFilter);
      $('#countryCheckbox').on('click', checkFilter);
      $('#countriesSelect').on('change', checkFilter);
      $('#explicitCheckbox').on('click', checkFilter);
      $('#limitCheckbox').on('click', checkFilter);
      $('#limitNumber').on('input', checkFilter);
      $('.post-item__img').on('click', showModal);
      break;
    case 'albums':
      $('.selectPage').on('click', changePage);
      $('#filterCheckbox').on('click', showFilterOptions);
      $('#searchBarSelect').on('change', checkFilter);
      $('#nameToSearchInput').on('keyup', checkFilter);
      $('#countryCheckbox').on('click', checkFilter);
      $('#countriesSelect').on('change', checkFilter);
      $('#explicitCheckbox').on('click', checkFilter);
      $('#limitCheckbox').on('click', checkFilter);
      $('#limitNumber').on('input', checkFilter);
      $('.post-item__img').on('click', showModal);
      break;
    case 'videos':
      $('.selectPage').on('click', changePage);
      $('#filterCheckbox').on('click', showFilterOptions);
      $('#searchBarSelect').on('change', checkFilter);
      $('#nameToSearchInput').on('keyup', checkFilter);
      $('#countryCheckbox').on('click', checkFilter);
      $('#countriesSelect').on('change', checkFilter);
      $('#explicitCheckbox').on('click', checkFilter);
      $('#limitCheckbox').on('click', checkFilter);
      $('#limitNumber').on('input', checkFilter);
      $('.post-item__vid').on('click', showModal);
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
