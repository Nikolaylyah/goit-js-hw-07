import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainerEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({preview, original, description}) => {
   return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
})
.join('');

galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainerEl.addEventListener('click', onImageContainerClick);

function onImageContainerClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }

    let instance = '';
    const getUrlbyDataSet = e.target.dataset.source;

    const options = {
        once: true,
        onShow: (instance) => {
            window.addEventListener('keydown', eventHandler);
        },
    
        onClose: (instance) => {
            window.removeEventListener('keydown', eventHandler);
        },
    };
    function eventHandler(e) {
        if (e.key === 'Escape') {
            instance.close();
            return;
        }
    }
    instance = basicLightbox.create(
        `<img src="${getUrlbyDataSet}" width="800" height="600">`,
        options
    );
    instance.show();
}