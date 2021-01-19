export const getCountries = () => {
  var settings = {
    url: 'https://www.liferay.com/api/jsonws/country/get-countries/',
    method: 'GET',
  };

  return $.ajax(settings);
};

export const getItems = url => {
  var settings = {
    url: `https://itunes.apple.com/search${url}`,
    method: 'GET',
  };

  return $.ajax(settings);
};
