import { getCountries, getItems } from '../API-logic/get';
import { createList, createUrl } from '../helpers/helpers';
import { home } from '../views/components/home';
import { option } from '../views/components/option';
import { postSong } from '../views/components/posts/postSong';
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
      switch ($('#searchBarSelect').val()) {
        case 'song':
          renderView(
            createList(JSON.parse(data).results, postSong),
            '#content',
          );
          break;
        case 'album':
          console.log('albums');
          break;
        case 'musicArtist':
          console.log('artists');
          break;
        case 'musicVideo':
          console.log('videos');
          break;
      }
    })
    .fail(() => {
      alert('Pais selectionado no tiene itunes');
      //TODO incluir mensaje de error en lugar del alert
    });
};

export const deletePosts = () => {
  renderView('', '#content');
};
