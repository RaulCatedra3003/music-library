import { stopAudio } from '../helpers/helpers';

export const turnBackedCards = () => {
  stopAudio();
  $('.post-item').each((index, element) => {
    if ($(element).data('position') === 'back') {
      $(element).data('position', 'front');
      $(element).css({ transform: '' });
      $(element).children('.post-item__img').css('transform', '');
      $(element).children('.post-item__front').fadeIn();
      $(element).children('.post-item__back').fadeOut();
    }
  });
};
