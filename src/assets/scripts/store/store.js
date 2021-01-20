import { status } from '../actions/actions';
import { getCountries, getItems } from '../API-logic/get';
import { createList, createUrl, getFav } from '../helpers/helpers';
import { home } from '../views/components/home';
import { search } from '../views/components/search';
import { option } from '../views/components/option';
import { postAlbum } from '../views/components/posts/postAlbum';
import { postArtist } from '../views/components/posts/postArtist';
import { postSong } from '../views/components/posts/postSong';
import { postVideo } from '../views/components/posts/postVideo';
import { renderView } from '../views/renderviews';
import { turnClickedCard } from '../views/turnclickedcard';
import { favourite } from '../views/components/favourite';

export const favPosts = {
  song: [],
  album: [],
  artist: [],
  video: [],
};

export const homeApp = () => {
  renderView(home);
  getFav();
};

export const changePage = e => {
  switch ($(e.target).val()) {
    case 'search':
      status.page = 'search';
      renderView(search, '#contentRoot');
      getCountries().done(data => {
        renderView(createList(data, option), '#countriesSelect');
      });
      break;
    case 'favourite':
      status.page = 'favourites';
      renderView(favourite, '#contentRoot');
      break;
  }
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
          status.page = 'albums';
          renderView(
            createList(JSON.parse(data).results, postAlbum),
            '#content',
          );
          break;
        case 'musicArtist':
          status.page = 'artists';
          renderView(
            createList(JSON.parse(data).results, postArtist),
            '#content',
          );
          break;
        case 'musicVideo':
          status.page = 'videos';
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

export const addPostToFav = e => {
  e.preventDefault();
  getItems(`lookup?id=${$(e.target).data('id')}`).done(data => {
    let exist = false;
    const object = JSON.parse(data).results[0];
    for (let i = 0; i < favPosts[$(e.target).data('type')].length; i++) {
      if (
        JSON.stringify(favPosts[$(e.target).data('type')][i]) ===
        JSON.stringify(object)
      ) {
        exist = true;
        favPosts[$(e.target).data('type')].splice(i, 1);
      }
    }
    if (!exist) {
      favPosts[$(e.target).data('type')].push(object);
    }
    localStorage.setItem('fav', JSON.stringify(favPosts));
  });
};
