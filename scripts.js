var words = ['Python.', 'coding.', 'Qt.', 'learning.', 'open source.', 'big projects.', 'PySide.', 'new technologies.', 'music.'];
var wordWrapper = document.getElementById('word');
wordWrapperContent = wordWrapper.innerHTML;
addingWord = false;
counter = 0;
wait = false;

function loop() {
  // This function deletes and adds the text
  setTimeout(async () => {
    if (wait) {
      wait = false;
      await new Promise((r) => setTimeout(r, 2000));
    }

    if (wordWrapperContent.length > 0 && !addingWord) {
      wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      addingWord = true;
    }

    if (addingWord) {
      if (wordWrapperContent.length < words[counter].length) {
        wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
        wordWrapperContent = wordWrapper.innerHTML;
      } else {
        if (counter < words.length) {
          wait = true;
          counter++;
        }
        addingWord = false;
      }
    }

    if (counter == words.length) {
      counter = 0;
    }

    loop();
  }, Math.floor(Math.random() * 250 + 50));
} loop();


// Toggle dark mode
var dark_mode = true;
function cambiar() {
  const img1 = './Bombilla.png';
  const img2 = './Luna.png';
  const imgElement = document.getElementById('imagen');

  if (dark_mode) {
    imgElement.src = img2;
    dark_mode = false;
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    imgElement.src = img1;
    dark_mode = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

document.querySelector('#imagen').addEventListener('click', () => {
  cambiar();
});
