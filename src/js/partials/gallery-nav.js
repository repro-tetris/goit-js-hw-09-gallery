import { refs } from './refs';
import vars from './variables';
import { onLigthboxOverlayClick, onPressKey } from './modal';

export function changeImage(alt, src) {
  refs.originalImg.src = src; //gallery.default[curImgIdx].original;
  refs.originalImg.alt = alt; // gallery.default[curImgIdx].description;
}

export function changeImageByIdx(idx) {
  const imgEl = refs.galleryEl.querySelector(`.gallery__image[data-idx="${idx}"]`);
  changeImage(imgEl.alt, imgEl.dataset.source);
}

//функція кліку на зображення
export function OnGalleryImgClick(e) {
  //якщо клікнули на щось інше, а не на зображення, то пропускаємо
  if (!e.target.classList.contains('gallery__image')) return;

  // заповнюємо параметри
  vars.curImgIdx = e.target.dataset.idx;
  changeImage(e.target.alt, e.target.dataset.source);

  refs.lightboxOverlay.addEventListener('click', onLigthboxOverlayClick);
  window.addEventListener('keydown', onPressKey);
  refs.modalWnd.classList.add('is-open');
}
