import {FocusLock} from '../utils/focus-lock';

const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const headerOverlay = document.querySelector('.header__overlay');
const header = document.querySelector('.header__top-wrapper');

nav.classList.remove('nav--nojs');
const focusLock = new FocusLock();

const openedMobileMenu = () => {
  navToggle.addEventListener('click', () => {
    if (nav.classList.contains('nav--closed')) {
      focusLock.lock('[data-header]');
      nav.classList.remove('nav--closed');
      nav.classList.add('nav--opened');
      headerOverlay.classList.add('header__overlay--menu-opened');
      header.classList.add('header__top-wrapper--menu-opened');
    } else {
      focusLock.unlock('[data-header]');
      nav.classList.add('nav--closed');
      nav.classList.remove('nav--opened');
      headerOverlay.classList.remove('header__overlay--menu-opened');
      header.classList.remove('header__top-wrapper--menu-opened');
    }
  });
};

export {openedMobileMenu};
