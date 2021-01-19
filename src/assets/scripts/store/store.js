import { getCountries, getItems } from '../API-logic/get';
import { addCountries, createUrl } from '../helpers/helpers';
import { home } from '../views/components/home';
import { renderView } from '../views/renderviews';

export const homeApp = () => {
  renderView(home);
  getCountries().done(data => {
    renderView(addCountries(data), '#countriesSelect');
  });
};

export const searchItem = () => {
  getItems(createUrl()).done(data => {
    console.log(data);
    //TODO llamar a renderviews() si la respuesta del server es 200OK, en otra respuesta mensaje de error.
  });
};
