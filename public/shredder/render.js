var canvas, context;
var parts = [];
var level = 1;
var img;
var runTime = 1;

var cropCount = 1;
const MARGIN = 0;

class Part {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

function crop(img) {
  parts = [];
  const { width, height } = img;
  const cropWidth = width / cropCount;
  const cropHeight = height / cropCount;

  for (var i = 0; i < cropCount; i++) {
    for (var j = 0; j < cropCount; j++) {
      parts.push(
        new Part(i * cropWidth, j * cropHeight, cropWidth, cropHeight)
      );
    }
  }
}

function draw(img) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();

  crop(img);

  parts.forEach((part, index) => {
    var i = Math.floor(index / cropCount);
    var j = index % cropCount;
    const { x, y, w, h } = part;
    const canvasCropWidth = 540 / cropCount;
    const canvasCropHeight = 540 / cropCount;
    context.drawImage(
      img,
      x,
      y,
      w,
      h,
      y + j * MARGIN,
      x + i * MARGIN,
      canvasCropWidth,
      canvasCropHeight
    );
  });

  var time = level === 1 ? 2000 : 100;
  if(level > 11) {
    restart();
  } else {
    levelUp(img, time);
  }
}

function init() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  img = new Image();
  img.addEventListener(
    "load",
    function () {
      draw(img);
    },
    false
  );

  img.src = `./assets/images/portrait.jpg`;
}

function levelUp(img, time = 200) {
  level = level + 1;
  setTimeout(() => {
    cropCount = Math.pow(level, 2);
    draw(img);
  }, time);
}

function restart() {
  level = 1;

  img = new Image();
  img.addEventListener(
    "load",
    function () {
      cropCount = 1;
      setTimeout(() => {
        draw(img);
      }, 1000)
    },
    false
  );
  
  img.src = `https://picsum.photos/540?random=${runTime++}`
}