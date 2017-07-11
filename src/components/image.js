export default function button (img) {
  const image = document.createElement('img');
  image.src = img;
  image.classList.add('minion');
  return image;
}
