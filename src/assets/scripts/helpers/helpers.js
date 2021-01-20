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

$("input[name='filterCheckbox']").on("click",function(){
  console.log("checked");
    if (this.checked)
      $('.filter__content').fadeIn('slow');
  else
      $('.filter__content').fadeOut('slow');
});