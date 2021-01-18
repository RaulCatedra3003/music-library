import { getCountries } from '../API-logic/get';
import { addCountries } from '../helpers/helpers';
import { home } from '../views/components/home';
import { renderView } from '../views/renderviews';

export const homeApp = () => {
  renderView(home);
  getCountries().done(data => {
    renderView(addCountries(data), '#countriesSelect');
  });
};

export const searchItem = () => {
  //TODO llamar a get con createURL como parametro para la url y en el .done llamar a renderviews().
};
