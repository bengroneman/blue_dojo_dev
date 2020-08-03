let p5;
let delegate;

export function main(_p5, color) {
  p5 = _p5

  p5.setup = _ => {
    var canvas = p5.createCanvas(65, 65);
    canvas.parent("cantor");

    p5.background(255);

    const cantor_config = {
      x: 0,
      y: 0,
      len: 45,
      fill: 0
    };
    cantor(cantor_config);
  }

  p5.draw = _ => {
    p5.noLoop();
  }
}

function cantor(config) {
  let h = 50;

  if (config.len >= 1) {
    p5.noStroke();
    // TODO: pass in hex color string from Vue
    p5.fill(config.fill);
    p5.rect(config.x, config.y, config.len, h/3);
    config.y += h;
    cantor(config.x, config.y, config.len/3);
    cantor(config.x+config.len*2/3, config.y, config.len/3);
  }
}

function notifyCurrentTime() {
  if (delegate !== undefined) {
    const message = p5.hour() + ":" + p5.minute() + ":" + p5.second();

    delegate(message);
  }
}

export function setDelegate(_delegate) {
  delegate = _delegate;
}