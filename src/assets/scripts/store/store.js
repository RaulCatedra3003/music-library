import { getCountries, getItems } from '../API-logic/get';
import { createList, createUrl } from '../helpers/helpers';
import { home } from '../views/components/home';
import { option } from '../views/components/option';
import { post } from '../views/components/post';
import { renderView } from '../views/renderviews';

export const homeApp = () => {
  renderView(home);
  getCountries().done(data => {
    renderView(createList(data, option), '#countriesSelect');
  });
};

export const searchItem = () => {
  getItems(createUrl())
    .done(data => {
      renderView(createList(JSON.parse(data).results, post), '#content');
    })
    .fail(() => {
      alert('Pais selectionado no tiene itunes');
      //TODO incluir mensaje de error en lugar del alert
    });
};

export const deletePosts = () => {
  renderView('', '#content');
};
