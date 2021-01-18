import { filterDataList } from '../store/store';

export const addEventListeners = status => {
  $(document).off().find('*').off();
  switch (status) {
    case 'home':
      $('#nameToSearchInput').on('input', filterDataList);
      $('#countryCheckbox').on('click', filterDataList);
      $('#explicitCheckbox').on('click', filterDataList);
      $('#limitCheckbox').on('click', filterDataList);
      break;
  }
};
