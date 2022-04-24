import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const htmlGalleryItems = galleryItems.map((picture, index) => {
  const container = document.createElement("div");
  const htmlImage = document.createElement("img");
  const link = document.createElement("a");

  link.className = "gallery__link";
  link.href = picture.original;

  container.className = "gallery__item";

  htmlImage.src = picture.preview;
  htmlImage.alt = picture.description;
  htmlImage.className = "gallery__image";
  htmlImage.dataset.source = picture.original;

  link.appendChild(htmlImage);
  container.appendChild(link);

  return container;
});
const onContainerClick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery")) return;
    const source = e.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`, {
        onShow: () => {
            window.addEventListener("keydown", closeByEscButton)
        },
        onClose: () => {
            window.removeEventListener("keydown", closeByEscButton)
        },
    });
   
function closeByEscButton(e) {
        if (e.code === 'Escape') {
            instance.close();
        };
    };
    instance.show();


};

gallery.addEventListener("click", onContainerClick);


const galleryDiv = document.querySelector(".gallery");
galleryDiv.append(...htmlGalleryItems);





