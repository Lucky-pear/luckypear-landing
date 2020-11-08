var canvas, context;
var parts = [];
var level = 1;
var img;
var runTime = 1;

var cropCount = 36;
var nextCropCount = cropCount;

class Part {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

function crop1(img) {
  const { width, height } = img;
  const cropWidth = width / cropCount;

  for (var i = 0; i < cropCount; i++) {
    parts.push(
      new Part(i * cropWidth, 0, cropWidth, height)
    );
  }
}
function crop2(img) {
  const { height } = img;
  const cropHeight = height / cropCount;

  for (var i = 0; i < cropCount; i++) {
    const temp = parts[i];
    parts[i] = [];
    for(var j = 0; j < cropCount; j++) {
      parts[i].push(
        new Part(temp.x, j * cropHeight, temp.w, cropHeight)
      );
    }
  }
}

function shuffle1() {
  var splitPart1 = [];
  for(var i = 0; i < cropCount; i+=2) {
    splitPart1.push(parts[i])
  }
  var splitPart2 = [];
  for(var i = 1; i < cropCount; i+=2) {
    splitPart2.push(parts[i])
  }
  parts = splitPart1.concat(splitPart2);
}
function shuffle2() {
  for(var i = 0; i < cropCount; i++) {
    var splitPart1 = [];
    for(var j = 0; j < cropCount; j+=2) {
      splitPart1.push(parts[i][j])
    }
    var splitPart2 = [];
    for(var j = 1; j < cropCount; j+=2) {
      splitPart2.push(parts[i][j])
    }
    parts[i] = splitPart1.concat(splitPart2);
  }
}

function draw1(img) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  parts.forEach((part, i) => {
    const { x, y, w, h } = part;
    const canvasCropWidth = 540 / cropCount;
    context.drawImage(
      img,
      x,
      y,
      w,
      h,
      x,
      y,
      canvasCropWidth,
      h
    );
  });

  setTimeout(() => {
    shuffle1();
    draw2(img)
  }, 1000)
}
function draw2(img) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for(var i = 0; i < parts.length; i++) {
    const { x, y, w, h } = parts[i];
    context.drawImage(
      img,
      x,
      y,
      w,
      h,
      i*w,
      y,
      w,
      h
    );
  }

  setTimeout(() => {
    crop2(img);
    shuffle2();
    draw3(img)
    // start(img);
  }, 1000)
}
function draw3(img) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for(var i = 0; i < cropCount; i++) {
    for(var j = 0; j < cropCount; j++) {
      const { x, y, w, h } = parts[i][j];
      context.drawImage(
        img,
        x,
        y,
        w,
        h,
        i*w,
        j*h,
        w,
        h
      );
    }
  }

  setTimeout(() => {
    start(img);
  }, 1000)
}

function init() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  img = new Image();
  img.addEventListener(
    "load",
    function () {
      start(img, false);

      document.getElementById("slider").oninput = () => {
        nextCropCount = Math.pow(document.getElementById("slider").value, 2);
      };
    },
    false
  );

  img.src = `./assets/images/portrait.jpg`;
}

function start(img, restart = true) {
  if(restart) {
    img = new Image();
    img.addEventListener(
      "load",
      function () {
        cropCount = nextCropCount;
        start(img, false);
      },
      false
    );
    
    img.src = `https://picsum.photos/540?random=${runTime++}`
  } else {
    parts = [];
    crop1(img);
    draw1(img);
  }
}