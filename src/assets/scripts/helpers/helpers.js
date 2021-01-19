import { status } from '../actions/actions';
import { searchItem } from '../store/store';

export const createList = (data, component) => {
  const fragment = $(document.createDocumentFragment());
  data.forEach(element => {
    $(fragment).append(component(element));
  });
  return fragment;
};

export const createUrl = () => {
  let url = `?term=${$('#nameToSearchInput').val()}&entity=${$(
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

export const showModal = e => {
  e.preventDefault();
  //TODO ver la forma de que se de la vuelta el que este bien y podamos cambiar el estado del data-position
  $('.post-item').each((index, element) => {
    if ($(element).data('position') === 'back') {
      $(element).css({ transform: '' });
      $(element).children('.post-item__img').css('transform', '');
      $(element).children('.post-item__front').fadeIn();
      $(element).children('.post-item__back').fadeOut();
    }
  });
  switch ($(e.target).parent().data('position')) {
    case 'front':
      $(e.target).parent().data('position', 'back');
      $(e.target).parent().css({
        transform: 'rotateY(180deg)',
        transition: 'transform 0.5s linear',
      });
      $(e.target).css('transform', 'rotateY(180deg)');
      $(e.target).parent().children('.post-item__front').fadeOut();
      $(e.target).parent().children('.post-item__back').fadeIn();
      break;
    case 'back':
      $(e.target).parent().data('position', 'front');
      $(e.target).parent().css('transform', '');
      $(e.target).css('transform', '');
      $(e.target).parent().children('.post-item__front').fadeIn();
      $(e.target).parent().children('.post-item__back').fadeOut();
      break;
  }
};
