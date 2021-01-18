import { option } from '../views/components/option';

export const addCountrys = data => {
  console.log('añadir paises al select');
  const fragment = $(document.createDocumentFragment());
  data.forEach(element => {
    $(fragment).append(option(element));
  });
  return fragment;
};
