import { stopAudio } from '../helpers/helpers';
import { turnBackedCards } from './turnbackedcards';

export const turnClickedCard = e => {
  const parent = $(e.target).parent();
  const target = $(e.target);
  switch (parent.data('position')) {
    case 'front':
      turnBackedCards();
      parent.data('position', 'back');
      parent.css({
        transform: 'rotateY(180deg)',
        transition: 'transform 0.5s linear',
      });
      target.css('transform', 'rotateY(180deg)');
      parent.children('.post-item__front').fadeOut();
      parent.children('.post-item__back').fadeIn();
      break;
    case 'back':
      stopAudio();
      parent.data('position', 'front');
      parent.css('transform', '');
      target.css('transform', '');
      parent.children('.post-item__front').fadeIn();
      parent.children('.post-item__back').fadeOut();
      break;
  }
};
