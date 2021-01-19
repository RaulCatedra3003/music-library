import { option } from '../views/components/option';
import { post } from '../views/components/post';

export const createList = (data, component) => {
  const fragment = $(document.createDocumentFragment());
  data.forEach(element => {
    $(fragment).append(component(element));
  });
  return fragment;
};

export const createUrl = () => {
  let url = `?term=${$('#nameToSearchInput').val()}&entity=${$(
    '#searchBarSelect',
  ).val()}`;
  if ($('#countryCheckbox').prop('checked')) {
    url = url + `&country=${$('#countriesSelect').val()}`;
  } else if (!$('#explicitCheckbox').prop('checked')) {
    url = url + `&explicit=no`;
  } else if ($('#limitCheckbox').prop('checked')) {
    url = url + `&limit=${$('#limitNumber').val()}`;
  }
  return url;
};
