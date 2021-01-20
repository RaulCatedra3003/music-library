export const showFilterOptions = function () {
  if (this.checked) $('.filter__content').fadeIn('slow');
  else $('.filter__content').fadeOut('slow');
};
