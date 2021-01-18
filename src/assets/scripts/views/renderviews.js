import { status } from '../dispatcher/dispatcher';
import { addEventListeners } from '../helpers/helpers';

export const renderView = (fragment, element = '#root') => {
  $(element).html(fragment);
  addEventListeners(status.page);
};
