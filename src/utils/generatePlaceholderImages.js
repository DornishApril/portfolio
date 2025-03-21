export const generatePlaceholderImage = (width, height, text) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#1a1f2e");
  gradient.addColorStop(1, "#0a0f1c");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add some random stars
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * 2;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  // Add text
  ctx.fillStyle = "#00bfff";
  ctx.font = "bold 48px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2);

  return canvas.toDataURL("image/png");
};
