// Prototype
String.prototype.yell = function () {
  console.log(this.toUpperCase());
};

// Factory Function
// const navColor = new Color('carrot', [230, 126, 34]);
// const logoColor = new Color('emerald', [46, 204, 113]);

function hex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

function makeColor(r, g, b) {
  const color = {};

  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };

  color.hex = function () {
    const { r, g, b } = this;

    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return color;
}
