import IMask from 'imask';

const iMask = IMask;

const createsMaskPhone = (phone) => {
  iMask(phone, {
    mask: '+7(000)000-00-00',
  });
};

export {createsMaskPhone};
