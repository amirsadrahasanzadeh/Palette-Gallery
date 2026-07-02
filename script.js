function copy(hex) {
  navigator.clipboard.writeText(hex);
  alert("Copied: " + hex);
}

function like(el) {
  el.classList.toggle("active");
}

document.getElementById("search").addEventListener("input", (e) => {
  let val = e.target.value.toLowerCase();

  document.querySelectorAll(".card").forEach((c) => {
    c.style.display = c.innerText.toLowerCase().includes(val)
      ? "block"
      : "none";
  });
});
