import { searchItem } from '../store/store';

export const addEventListeners = status => {
  $(document).off().find('*').off();
  switch (status) {
    case 'home':
      $('#searchBarSelect').on('change', checkFilter);
      $('#nameToSearchInput').on('input', checkFilter);
      $('#countryCheckbox').on('click', checkFilter);
      $('#countriesSelect').on('change', checkFilter);
      $('#explicitCheckbox').on('click', checkFilter);
      $('#limitCheckbox').on('click', checkFilter);
      $('#limitNumber').on('input', checkFilter);
      break;
  }
};

export const checkFilter = () => {
  if ($(nameToSearchInput).val() !== '') {
    searchItem();
  } else {
    //TODO incluir mensaje de error
  }
};
