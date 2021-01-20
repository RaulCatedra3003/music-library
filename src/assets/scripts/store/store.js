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

export let favPosts = {
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
      status.subpage = 'search';
      renderView(search, '#contentRoot');
      getCountries().done(data => {
        renderView(createList(data, option), '#countriesSelect');
      });
      break;
    case 'favourite':
      status.subpage = 'favourites';
      renderView(favourite, '#contentRoot');
      break;
  }
};
export const searchItem = () => {
  getItems(createUrl())
    .done(data => {
      switch ($('#searchBarSelect').val()) {
        case 'song':
          status.postType = 'songs';
          renderView(
            createList(JSON.parse(data).results, postSong),
            '#content',
          );
          break;
        case 'album':
          status.postType = 'albums';
          renderView(
            createList(JSON.parse(data).results, postAlbum),
            '#content',
          );
          break;
        case 'musicArtist':
          status.postType = 'artists';
          renderView(
            createList(JSON.parse(data).results, postArtist),
            '#content',
          );
          break;
        case 'musicVideo':
          status.postType = 'videos';
          renderView(
            createList(JSON.parse(data).results, postVideo),
            '#content',
          );
          break;
      }
    })
    .fail(() => {
      alert('Pais selectionado no tiene itunes');
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
    if (status.page.includes('fav')) {
      showFavPosts(e);
    }
  });
};

export const showFavPosts = e => {
  const data = favPosts[$(e.target).data('type')];
  switch ($(e.target).data('type')) {
    case 'song':
      status.postType = 'favSongs';
      renderView(createList(data, postSong), '#favRoot');
      break;
    case 'album':
      status.postType = 'favAlbums';
      renderView(createList(data, postAlbum), '#favRoot');
      break;
    case 'artist':
      status.postType = 'favArtists';
      renderView(createList(data, postArtist), '#favRoot');
      break;
    case 'video':
      status.postType = 'favVideos';
      renderView(createList(data, postVideo), '#favRoot');
      break;
  }
};
