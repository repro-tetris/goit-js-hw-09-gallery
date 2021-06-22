import { refs } from './refs';
import vars from './variables';
import { changeImage, changeImageByIdx } from './gallery-nav';

export function onCloseModalWnd() {
  refs.lightboxOverlay.removeEventListener('click', onLigthboxOverlayClick);
  window.removeEventListener('keydown', onPressKey);
  refs.modalWnd.classList.remove('is-open');
  changeImage(null, null);
}

// extra functional
export function onLigthboxOverlayClick(e) {
  if (e.target !== e.currentTarget) return;

  onCloseModalWnd();
}
export function onPressKey(e) {
  if (e.key === 'Escape') {
    onCloseModalWnd();
  } else if (e.key === 'ArrowLeft') {
    // індекс попереднього зображення
    vars.curImgIdx = (vars.curImgIdx + vars.cntImages - 1) % vars.cntImages;
    changeImageByIdx(vars.curImgIdx);
  } else if (e.key === 'ArrowRight') {
    // індекс наступного зображення
    vars.curImgIdx = (vars.curImgIdx + 1) % vars.cntImages;
    changeImageByIdx(vars.curImgIdx);
  }
}
