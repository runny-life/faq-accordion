const detailsElements = document.querySelectorAll(".faq__details");

detailsElements.forEach(detail => {
  detail.addEventListener("toggle", function () {
    if (this.open) {
      this.classList.add("is-open");

      detailsElements.forEach(other => {
        if (other !== this && other.open) {
          other.open = false;
          other.classList.remove("is-open");
        }
      });
    } else {
      this.classList.remove("is-open");
    }
  })
})