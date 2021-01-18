import { getCountrys } from '../API-logic/get';
import { addCountrys } from '../helpers/helpers';
import { home } from '../views/components/home';
import { renderView } from '../views/renderviews';

export const homeApp = () => {
  renderView(home);
  /* renderView(addCountrys(getCountrys), '#countrySelect'); */
  getCountrys().done(data => {
    renderView(addCountrys(data), '#countrySelect');
  });
};
