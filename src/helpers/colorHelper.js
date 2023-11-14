export const darkenColor = (hex) => {
  const factor = 0.2;

  hex = hex.replace(/^#/, "");
  let rgb = parseInt(hex, 16);

  let r = (rgb >> 16) & 0xff;
  let g = (rgb >> 8) & 0xff;
  let b = (rgb >> 0) & 0xff;

  r = Math.floor(r * (1 - factor));
  g = Math.floor(g * (1 - factor));
  b = Math.floor(b * (1 - factor));

  let darkerHex = ((r << 16) | (g << 8) | (b << 0))
    .toString(16)
    .padStart(6, "0");

  return `#${darkerHex}`;
};
