let gridImages = document.getElementById("grid");
let gen_btn = document.getElementById("image-btn");
let numImagesInput = document.getElementById("num-images");
let loadImages = document.getElementById("loader");

let fetchImages = (numImages) => {
  loadImages.style.display = "block";
  fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${numImages}`)
    .then((response) => response.json())
    .then((result) => {
      gridImages.innerHTML = "";
      result.forEach((value) => {
        let key = value.url;
        let container = document.createElement("div");
        container.className = "image-container";
        let imgTag = document.createElement("img");
        imgTag.src = `https://picsum.photos/240/?random=${key}`;
        let overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.textContent = key;
        container.appendChild(imgTag);
        container.appendChild(overlay);
        gridImages.appendChild(container);
      });
    })
    .finally(() => {
      loadImages.style.display = "none";
    });
};

fetchImages(3);

gen_btn.addEventListener("click", () => {
  let numImages = parseInt(numImagesInput.value);
  if (numImages < 1) {
    alert("Enter a valid integer that must be greater than 0.");
    return;
  }
  fetchImages(numImages);
});
