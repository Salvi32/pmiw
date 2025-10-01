// TP#Final Parte 1 - Comisión 3, David Bedoian
// Oberti Fermin 119102/7 - Medina Salvador 119087/8
// Tematica: mitologias y what if, caja de pandora
let apuntador = 0;
let pantalla = 0;
let textos = [];
let imagenes = [];
let textosEC, parrafos, titulos = [];
let botonSI = "SI";
let botonNO = "NO";
let botonEMP = "COMENZAR";
let botonRESET = "REINICIAR";
let botonSOUND= "SONIDO";
let sonido;

function preload() {
  textosEC = loadStrings("data/textos.txt");
  for (let i = 0; i < 15; i++) {
    imagenes[i] = loadImage("data/imagenes/imagen" + nf(i+1, 2) + ".jpg");
    parrafos = loadFont("data/LibertinusSerifDisplay-Regular.ttf");
    titulos = loadFont("data/GODOFWAR.ttf");
  }
  soundFormats('mp3');
    sonido = loadSound('data/gordosmusica');
}
function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < textosEC.length; i++) {
    let linea = textosEC[i];
    let lineaArray = split(linea, "#");
    textos[lineaArray[0]] = lineaArray[1];
  }
  sonido.loop();
}

function draw() {
  background(0);
  image(imagenes[pantalla], 0, 0, 640, 480);

  //Mostrar textos
  fill(255);
  stroke(0);
  textSize(30);
  textAlign(CENTER);
  textFont(parrafos);
  text(textos[pantalla], 30, 50, 580, 250);
   //Mostrar botón RESET en las pantallas 7, 13 y 14
  if (pantalla === 7) {
    dibujobotonRESET();
  } else if (pantalla === 13) {
    dibujobotonRESET();
  } else if (pantalla === 14) {
    dibujobotonRESET();
   //Mostrar boton EMP en la pantalla 0
  } else if (pantalla ===0) {
    dibujobotonEMP ();
    //Mostrar titulo 
    fill(213, 214, 0);
    textSize(40);
    textAlign(CENTER);
    textFont (titulos);
    text("Pandora what if", 30, 50, 580, 250);
    //Mostrar creditos
    fill(255);
    stroke(0);
    textSize(25);
    textAlign(CENTER);
    textFont(parrafos);
    text("Oberti Fermin 119102/7 - Medina Salvador 119087/8", 5, 100, 250, 300);
  } else {
    dibujoboton();
  }
}

function dibujoboton() {
  fill(255);
  textSize(20);
  textAlign(CENTER);

  //Botón "SI"
  fill(255);
  rect(150, height - 80, 100, 50); // Botón en la parte inferior
  fill(0);
  text(botonSI, 150 + 50, height - 80 + 35); // Centrar texto en el botón

  //Botón "NO"
  fill(255);
  rect(400, height - 80, 100, 50); // Botón en la parte inferior
  fill(0);
  text(botonNO, 400 + 50, height - 80 + 35); // Centrar texto en el botón
}
function dibujobotonRESET() {
  fill(255);
  textSize(20);
  textAlign(CENTER);

  //Botón "REINICIAR"
  fill(255);
  rect(150, height - 80, 100, 50); // Botón en la parte inferior
  fill(0);
  text(botonRESET, 150 + 50, height - 80 + 35); // Centrar texto en el botón
}
function dibujobotonEMP() {
  fill(255);
  textSize(20);
  textAlign(CENTER);

  //Botón "COMENZAR"
  fill(255);
  rect(150, height - 80, 100, 50); // Botón en la parte inferior
  fill(0);
  text(botonEMP, 150 + 50, height - 80 + 35); // Centrar texto en el botón
}

function mousePressed() {
  if (pantalla === 0) {
    sonido.play();
    //Botón "COMENZAR"
    if (colisionBoton(150, height - 80, 100, 50)) {
      pantalla = 1; 
    }
  }
}

function colisionBoton(x, y, w, h) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    return true;
  } else {
    return false;
  }
}
