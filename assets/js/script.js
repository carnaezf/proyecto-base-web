// alert("¡Bienvenidos a Mi Sitio!");

console.log(
  "%c Bienvenidos %c al mundo del %c Front-End!",
  "color: white; background: green; font-size: 16px; padding: 2px;",
  "color: yellow; background: black; font-size: 16px; padding: 2px;",
  "color: red; font-weight: bold; font-size: 18px;"
);

console.log("¿De dónde viene este mensaje?");

function saludo() {
  console.log("¡Hola! Presionaste el botón de saludo");
}

// Mensaje con estilo en consola
function mensajeColor() {
  console.log("%c Bienvenidos al mundo del Front-End!",
              "color: white; background: purple; font-size: 20px; padding: 5px;");
}

// Contador en consola
function contador() {
  let count = 0;
  let intervalo = setInterval(() => {
    console.log("Contador:", count);
    count++;
    if (count > 5) {
      console.log("¡Listo, contador terminado!");
      clearInterval(intervalo);
    }
  }, 1000);
}

// Lluvia de emojis
function lluviaEmojis() {
  const emojis = ["✨", "🚀", "🎉", "🔥", "💻"];
  for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * emojis.length);
    console.log(emojis[random]);
  }
}
