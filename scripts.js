var words = ['Python.', 'la programación.', 'OpenGL.', 'Sympy.', 'PyQt5.', 'aprender.', 'las matemáticas.', 'el código abierto.', 'los grandes proyectos.', 'nuevas tecnologías.'];
var wordWrapper = document.getElementById('word');
wordWrapperContent = wordWrapper.innerHTML;
addingWord = false;
counter = 0;
esperar = false;

function loop() {
  // Esta función hace el efecto de borrar el texto
  setTimeout(async () => {
    if (esperar) {
      esperar = false;
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
          esperar = true;
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


// Función para activar el modo oscuro
var modo_oscuro = true;
function cambiar() {
  const img1 = './Bombilla.png';
  const img2 = './Luna.png';
  const banner_claro = './Banner.png';
  const banner_oscuro = './Banner oscuro.png';
  const element = document.body;

  const imgElement = document.getElementById('imagen');
  const banner = document.getElementById('Banner');

  if (modo_oscuro) {
    imgElement.src = img2;
    banner.src = banner_claro;
    modo_oscuro = false;
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    imgElement.src = img1;
    banner.src = banner_oscuro;
    modo_oscuro = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

document.querySelector('#imagen').addEventListener('click', () => {
  cambiar();
});
