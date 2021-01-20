export const showFilterOptions = function (){
  if (this.checked)
    $('.filter__content').fadeIn('slow');
  else
    $('.filter__content').fadeOut('slow');
}

/* $('#countryCheckbox').on("click",function(){
  if (this.checked)
    $('#countriesSelect').show();
  else
    $('#countriesSelect').hide();
}); */