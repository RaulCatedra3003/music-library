import { goSearch } from '../helpers/helpers';
import { deletePosts } from '../store/store';

export const addEventListeners = status => {
  $(document).off().find('*').off();
  switch (status) {
    case 'home':
      $('#searchBarSelect').on('change', checkFilter);
      $('#nameToSearchInput').on('keyup', checkFilter);
      $('#countryCheckbox').on('click', checkFilter);
      $('#countriesSelect').on('change', checkFilter);
      $('#explicitCheckbox').on('click', checkFilter);
      $('#limitCheckbox').on('click', checkFilter);
      $('#limitNumber').on('input', checkFilter);
      break;
  }
};

export const checkFilter = () => {
  window.clearTimeout(goSearch);
  if ($(nameToSearchInput).val() !== '') {
    setTimeout(goSearch, 300);
  } else {
    deletePosts();
  }
};
