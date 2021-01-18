import { getCountrys } from '../API-logic/get';
import { addCountrys } from '../helpers/helpers';
import { home } from '../views/components/home';
import { renderView } from '../views/renderviews';

export const status = {
  page: 'home',
};

export const homeApp = () => {
  renderView(home);
  getCountrys().done(data => {
    renderView(addCountrys(data), '#countrySelect');
  });
};
