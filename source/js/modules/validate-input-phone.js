import {createsMaskPhone} from './creates-mask-phone';

const feedbackPhone = document.querySelector('#feedback-tel');

const validateInputPhone = () => {
  createsMaskPhone(feedbackPhone);

  const validateInputValue = (input) => {
    input.addEventListener('input', () => {
      let phoneValue = input.value.length;
      if (phoneValue < 16) {
        input.setCustomValidity('Введите номер телефона полностью.');
      } else {
        input.setCustomValidity('');
      }
      input.reportValidity();
    });
  };

  validateInputValue(feedbackPhone);
};

export {validateInputPhone};
