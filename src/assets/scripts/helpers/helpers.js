import { option } from '../views/components/option';

export const addCountries = data => {
  const fragment = $(document.createDocumentFragment());
  data.forEach(element => {
    $(fragment).append(option(element));
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
    console.log('no esta checked');
    url = url + `&explicit=No`;
  } else if ($('#limitCheckbox').prop('checked')) {
    url = url + `&limit=${$('#limitNumber').val()}`;
  }
  return url;
};
