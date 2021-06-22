import './sass/main.scss';

import * as gallery from './js/gallery-items';

import vars from './js/partials/variables';

import { refs } from './js/partials/refs';
import { OnGalleryImgClick } from './js/partials/gallery-nav';
import { onCloseModalWnd } from './js/partials/modal';
// кількість зображень в галереї

// створення розмітки
refs.galleryEl.insertAdjacentHTML(
  'afterbegin',
  gallery.default
    .map(({ preview, description, original }, idx) => {
      // створити li, додати клас gallery__item
      const liEl = document.createElement('li');
      liEl.classList.add('gallery__item');
      // створити img,додати gallery__image
      const imgEl = document.createElement('img');
      imgEl.src = preview;
      imgEl.alt = description;
      imgEl.dataset.source = original;
      imgEl.dataset.idx = idx;
      imgEl.classList.add('gallery__image');
      liEl.appendChild(imgEl);

      return liEl.outerHTML;
    })
    .join(''),
);

// подія на клік по зображенню
refs.galleryEl.addEventListener('click', OnGalleryImgClick);
// подія на клік по кнопці "close"
refs.closeModalBtn.addEventListener('click', onCloseModalWnd);
