import { status } from '../actions/actions';
import { getCountries, getItems } from '../API-logic/get';
import { addEventListeners } from '../dispatcher/dispatcher';
import { createList, createUrl } from '../helpers/helpers';
import { home } from '../views/components/home';
import { option } from '../views/components/option';
import { postAlbum } from '../views/components/posts/postAlbum';
import { postArtist } from '../views/components/posts/postArtist';
import { postSong } from '../views/components/posts/postSong';
import { postVideo } from '../views/components/posts/postVideo';
import { renderView } from '../views/renderviews';
import { turnClickedCard } from '../views/turnclickedcard';

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
          status.page = 'songs';
          renderView(
            createList(JSON.parse(data).results, postSong),
            '#content',
          );
          break;
        case 'album':
          renderView(
            createList(JSON.parse(data).results, postAlbum),
            '#content',
          );
          break;
        case 'musicArtist':
          renderView(
            createList(JSON.parse(data).results, postArtist),
            '#content',
          );
          break;
        case 'musicVideo':
          renderView(
            createList(JSON.parse(data).results, postVideo),
            '#content',
          );
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

export const showModal = e => {
  e.preventDefault();
  turnClickedCard(e);
};
