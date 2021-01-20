import { goSearch } from '../helpers/helpers';
import { deletePosts, showModal } from '../store/store';

let timeoutIds = [];

export const addEventListeners = status => {
  /* $(document).off().find('*').off(); */
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
    case 'songs':
      /* $('#searchBarSelect').on('change', checkFilter);
      $('#nameToSearchInput').on('keyup', checkFilter);
      $('#countryCheckbox').on('click', checkFilter);
      $('#countriesSelect').on('change', checkFilter);
      $('#explicitCheckbox').on('click', checkFilter);
      $('#limitCheckbox').on('click', checkFilter);
      $('#limitNumber').on('input', checkFilter); */
      $('.post-item__img').on('click', showModal);
      break;
    case 'albums':
      $('.post-item__img').on('click', showModal);
    case 'videos':
      $('.post-item__img').on('click', showModal);
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
    deletePosts();
  }
};
