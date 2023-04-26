import {FocusLock} from '../utils/focus-lock';
import {ScrollLock} from '../utils/scroll-lock';
import {makesSmothScroll} from './makes-smoth-scroll';

const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const headerOverlay = document.querySelector('.header__overlay');
const header = document.querySelector('.header__top-wrapper');
const linkList = document.querySelectorAll('[data-mobile-scroll-link]');

nav.classList.remove('nav--nojs');
const focusLock = new FocusLock();
const scrollLock = new ScrollLock();

const closeMenu = () => {
  scrollLock.enableScrolling();
  focusLock.unlock('[data-header]');
  nav.classList.add('nav--closed');
  nav.classList.remove('nav--opened');
  headerOverlay.classList.remove('header__overlay--menu-opened');
  header.classList.remove('header__top-wrapper--menu-opened');
};

const openMenu = () => {
  scrollLock.disableScrolling();
  focusLock.lock('[data-header]');
  nav.classList.remove('nav--closed');
  nav.classList.add('nav--opened');
  headerOverlay.classList.add('header__overlay--menu-opened');
  header.classList.add('header__top-wrapper--menu-opened');
};

const openedMobileMenu = () => {
  navToggle.addEventListener('click', () => {
    if (nav.classList.contains('nav--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  linkList.forEach((link) => {
    link.addEventListener('click', () => {
      let activeLink = link;
      closeMenu();
      makesSmothScroll(activeLink);
    });
  });
};

export {openedMobileMenu};
