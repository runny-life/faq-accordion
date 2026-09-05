const detailsElements = document.querySelectorAll(".faq__details");

detailsElements.forEach(detail => {
  detail.addEventListener("toggle", function () {
    if(this.open) {
      detailsElements.forEach(other => {
        if(other !== this && other.open) {
          other.open = false;
        }
      })
    }
  })
})