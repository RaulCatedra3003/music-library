export const getCountries = () => {
  var settings = {
    url: 'https://www.liferay.com/api/jsonws/country/get-countries/',
    method: 'GET',
  };

  return $.ajax(settings);
};
