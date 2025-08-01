var gallery = document.getElementById("gallery");

image_dir = "../pictures";

function loadImages() {
  fetch("images.json")
    .then((response) => response.json())
    .then((filenames) => {
      const gallery = document.getElementById("gallery");
      filenames.forEach((filename) => {
        const img = document.createElement("img");
        img.src = "../../pictures/" + filename;
        gallery.appendChild(img);
      });
    })
    .catch((error) => console.error("ERROR LOADING JSON:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  loadImages();
});
