export const option = ({ a2, nameCurrentValue }) => {
  if (a2 === 'US') {
    const template = `
    <option value=${a2} selected>${nameCurrentValue}</option>
    `;
    return template;
  } else {
    const template = `
    <option value=${a2}>${nameCurrentValue}</option>
    `;
    return template;
  }
};
