import { option } from '../views/components/option';

export const addCountries = data => {
  const fragment = $(document.createDocumentFragment());
  data.forEach(element => {
    $(fragment).append(option(element));
  });
  return fragment;
};

export const createUrl = () => {
  console.log('creamos la url y la retornamos');
  let url = `?term=${$('#nameToSearchInput').val()}&entity=${$(
    '#searchBarSelect',
  ).val()}`;
  //TODO comprobar los checkbox y terminar la url dependiendo de si estan marcados o no.
  return url;
};
