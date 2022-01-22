import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. 
// Используй готовый код из первого задания.
// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. 
// Необходимо добавить ссылки на два файла: simple - lightbox.min.js и simple - lightbox.min.css.
// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. 
// Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. 
// Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.
function createGalleryCollection(arr) {
  
    return arr.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
           <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
        </li>`})
        .join('')
    
};
const container = document.querySelector('.gallery')
const img = createGalleryCollection(galleryItems);
container.insertAdjacentHTML('beforeend', img)
container.addEventListener('click', nameImages)

function nameImages(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    
  }
}
const lightbox = new SimpleLightbox(".gallery a", {
  scrollZoom: true,
  captionDelay: 250,
  captionsData: "alt",
  doubleTapZoom: 2,
});
