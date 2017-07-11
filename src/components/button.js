export default function button (name, callback) {
  const button = document.createElement('button');
  button.innerText = name;
  button.onclick = callback;
  return button;
}
