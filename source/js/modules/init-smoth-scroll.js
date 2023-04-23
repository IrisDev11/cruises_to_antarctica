import {makesSmothScroll} from './makes-smoth-scroll';

const linkList = document.querySelectorAll('[data-smoth-scroll-link]');

const initSmothScroll = () => {
  linkList.forEach((link) => {
    makesSmothScroll(link);
  });
};

export {initSmothScroll};
