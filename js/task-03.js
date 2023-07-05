const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesUl = document.querySelector(".gallery");

images.forEach((image, index) => {
  const newImageLi = document.createElement("li");

  imagesUl.append(newImageLi);
  const newImage = document.createElement("img");

  newImageLi.append(newImage);
  newImageLi.classList.add("gallery-item");
  newImageLi.style.display = "inline";
  newImageLi.style.marginRight = "10px";
  newImage.src = image.url;
  newImage.alt = image.alt;
  newImage.width = 640;
  newImage.height = 400;
});
const createGallItem = ({ url, alt }) =>
  `<li><a href="#"> <img src="${url}" alt="${alt}"> </a> </li>`;
const galleryMarkUp = images.map(createGallItem).join("");

console.log(galleryMarkUp);

imagesUl.insertAdjacentElement("afterbegin", galleryMarkUp);
