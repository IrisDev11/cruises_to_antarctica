import {ScrollLock} from '../utils/scroll-lock';
import {FocusLock} from '../utils/focus-lock';

const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const headerOverlay = document.querySelector('.header__overlay');
const header = document.querySelector('.header__top-wrapper');
const navLink = document.querySelectorAll('.nav__link');

nav.classList.remove('nav--nojs');
const scrollLock = new ScrollLock();
const focusLock = new FocusLock();

const openedMobileMenu = () => {
  navToggle.addEventListener('click', () => {
    if (nav.classList.contains('nav--closed')) {
      scrollLock.disableScrolling();
      focusLock.lock('[data-header]');
      nav.classList.remove('nav--closed');
      nav.classList.add('nav--opened');
      headerOverlay.classList.add('header__overlay--menu-opened');
      header.classList.add('header__top-wrapper--menu-opened');
    } else {
      scrollLock.enableScrolling();
      focusLock.unlock('[data-header]');
      nav.classList.add('nav--closed');
      nav.classList.remove('nav--opened');
      headerOverlay.classList.remove('header__overlay--menu-opened');
      header.classList.remove('header__top-wrapper--menu-opened');
    }
  });

  navLink.forEach((link) => {
    link.addEventListener('click', () => {
      scrollLock.enableScrolling();
      focusLock.unlock('[data-header]');
      nav.classList.add('nav--closed');
      nav.classList.remove('nav--opened');
      headerOverlay.classList.remove('header__overlay--menu-opened');
      header.classList.remove('header__top-wrapper--menu-opened');
    });
  });
};

export {openedMobileMenu};
