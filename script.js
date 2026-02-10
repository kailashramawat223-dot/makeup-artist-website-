function addReview() {
  const name = document.getElementById("name").value;
  const review = document.getElementById("review").value;

  if (name === "" || review === "") {
    alert("Please fill all fields");
    return;
  }

  const message =
    "New Review Received:%0A" +
    "Name: " + name + "%0A" +
    "Review: " + review;

  window.open(
    "https://wa.me/918852866098?text=" + message,
    "_blank"
  );

  document.getElementById("name").value = "";
  document.getElementById("review").value = "";
}
function toggleGallery(id) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
}
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("active");
}