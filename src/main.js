import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import * as pixabay from './js/pixabay-api';
import * as render from './js/render-functions';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', e => {
  e.preventDefault();
  searchHeandler(e.currentTarget.elements['search-text'].value.trim());
});

const searchHeandler = searchText => {
  render.clearGallery();

  if (!validate(searchText)) {
    showErrorMessage('Please enter a valid query.');
    return;
  }

  render.showLoader();

  pixabay
    .getImagesByQuery(searchText)
    .then(res => {
      render.hideLoader();
      const images = res.data.hits;

      if (images.length === 0) {
        showErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      } else {
        render.createGallery(images);
      }
    })
    .catch(error => {
      render.hideLoader();
      showErrorMessage('Error while executing request');
    });
};

function validate(searchText) {
  return searchText;
}

function showErrorMessage(message) {
  iziToast.error({
    message: message,
    position: 'topRight',
    theme: 'dark',
    backgroundColor: '#ef4040',
    messageColor: '#fff',
    animateInside: false,
  });
}
