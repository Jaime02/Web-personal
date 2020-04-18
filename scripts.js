var words = ['Python.', 'la programación.', 'OpenGL.', 'Sympy.', 'PyQt5.', 'aprender.','las matemáticas.', 'el código abierto', 'los grandes proyectos.', 'nuevas tecnologías.'],
wordWrapper = document.getElementById('word');
wordWrapperContent = wordWrapper.innerHTML;
addingWord = false;
counter = 1;

// Esta función hace el efecto de borrar el texto
setInterval(function(){
  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if(addingWord){
    if(wordWrapperContent.length < words[counter].length) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if (counter < words.length) {
        counter++;
      }
      addingWord = false;
    }
  }
  if (counter == words.length) {
    counter = 0;
  }
}, 250);

// Función para activar el modo oscuro
var modo_oscuro = true;
function cambiar() {
  var img1 = "./Bombilla.png";
  var img2 = "./Luna.png";
  var element = document.body;

  var imgElement = document.getElementById('imagen'); 

  if (modo_oscuro) {
    imgElement.src = img2;
    modo_oscuro = false;
    document.documentElement.setAttribute('data-theme', 'light');
  }
  else {
    imgElement.src = img1;
    modo_oscuro = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

document.querySelector("#imagen").addEventListener('click',()=>{cambiar();});

// Cuando la página se carga, se ejecuta una lambda que establece el data-theme en dark
// window.addEventListener("DOMContentLoaded", ()=>{document.documentElement.setAttribute('data-theme', 'dark')})