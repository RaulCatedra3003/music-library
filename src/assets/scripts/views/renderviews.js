import { status } from '../actions/actions';
import { addEventListeners } from '../dispacher/dispacher';

export const renderView = (fragment, element = '#root') => {
  $(element).html(fragment);
  addEventListeners(status.page);
};
