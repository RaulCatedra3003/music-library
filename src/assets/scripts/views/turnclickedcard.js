import { turnBackedCards } from './turnbackedcards';

export const turnClickedCard = e => {
  switch ($(e.target).parent().data('position')) {
    case 'front':
      turnBackedCards();
      $(e.target).parent().data('position', 'back');
      $(e.target).parent().css({
        transform: 'rotateY(180deg)',
        transition: 'transform 0.5s linear',
      });
      $(e.target).css('transform', 'rotateY(180deg)');
      $(e.target).parent().children('.post-item__front').fadeOut();
      $(e.target).parent().children('.post-item__back').fadeIn();
      break;
    case 'back':
      $(e.target).parent().data('position', 'front');
      $(e.target).parent().css('transform', '');
      $(e.target).css('transform', '');
      $(e.target).parent().children('.post-item__front').fadeIn();
      $(e.target).parent().children('.post-item__back').fadeOut();
      break;
  }
};
