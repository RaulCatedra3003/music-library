export const filterToggole = function (){
  $("input[name='filterCheckbox']").on("click",function(){
    console.log("checked");
    if (this.checked)
      $('.filter__content').fadeIn('slow');
    else
      $('.filter__content').fadeOut('slow');
  });
}

$('#countryCheckbox').on("click",function(){
  if (this.checked)
    $('#countriesSelect').show();
  else
    $('#countriesSelect').hide();
});