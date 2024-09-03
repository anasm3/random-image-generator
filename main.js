let gridImages = document.getElementById("grid");
let gen_btn  = document.getElementById("image-btn");
let numImagesInput = document.getElementById("num-images");

function fetchImages(numImages) {
  fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${numImages}`)
  .then((response) => response.json())
  .then((result) => {
    gridImages.innerHTML = "";
    result.map((value) => {
      let key = value.url;
      let imgTag = document.createElement("img");
      imgTag.src = ` https://picsum.photos/160/?random=${key}`;
      gridImages.appendChild(imgTag);
    });
  });
}

fetchImages(3);

gen_btn.addEventListener("click", () => {
  let numImages = parseInt(numImagesInput.value);
  if(numImages < 1) {
    alert("Enter a valid integer that must be greater than 0.");
    return;
  }
  fetchImages(numImages);
});
