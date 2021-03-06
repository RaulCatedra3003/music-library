import { searchItem, favPosts } from '../store/store';

export const createList = (data, component) => {
  const fragment = $(document.createDocumentFragment());
  data.forEach(element => {
    $(fragment).append(component(element));
  });
  return fragment;
};

export const createUrl = () => {
  let url = `search?term=${$('#nameToSearchInput').val()}&entity=${$(
    '#searchBarSelect',
  ).val()}`;
  if ($('#countryCheckbox').prop('checked')) {
    url = url + `&country=${$('#countriesSelect').val()}`;
  }
  if (!$('#explicitCheckbox').prop('checked')) {
    url = url + `&explicit=no`;
  }
  if ($('#limitCheckbox').prop('checked')) {
    url = url + `&limit=${$('#limitNumber').val()}`;
  }
  return url;
};

export const goSearch = () => {
  searchItem();
};

export const stopAudio = () => {
  $('audio').each(function () {
    this.pause();
  });
  $('video').each(function () {
    this.pause();
  });
};

export const getFav = () => {
  if (localStorage.getItem('fav') === null) {
    localStorage.setItem('fav', JSON.stringify(favPosts));
  } else {
    favPosts = JSON.parse(localStorage.getItem('fav'));
  }
};
