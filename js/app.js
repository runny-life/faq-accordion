const detailsElements = document.querySelectorAll(".faq__details");

function onToggleDetail() {
  const isOpen = this.open;
  this.querySelector("summary").setAttribute("aria-expanded", isOpen ? "true" : "false");

  if (isOpen) {
    detailsElements.forEach(other => {
      if (other !== this && other.open) {
        other.open = false;
        other.querySelector("summary").setAttribute("aria-expanded", "false");
      }
    });
  }

  this.classList.toggle("is-open", isOpen);
}

detailsElements.forEach(detail => {
  detail.addEventListener("toggle", onToggleDetail)
})