import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');

const createGalleryItem = ({preview, original, description}) => 
   `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      title="${description}"
    />
  </a>`;

const galleryMarkup = galleryItems.reduce((acc, item) => acc + createGalleryItem(item), "");

galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainerEl.addEventListener('click', onGalleryContainer);

function onGalleryContainer(event) {
    event.preventDefault();
}

new SimpleLightbox(".gallery a", {
    enableKeyboard: true,
    captionDelay: 250,
});