// This JavaScript snippet enables interactive dropdown behavior for a Bulma-based menu
document.addEventListener("DOMContentLoaded", () => {
  //finds all elements with class .dropdown
  const dropdowns = document.querySelectorAll(".dropdown");
  //
  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector(".dropdown-trigger");
//condition statement
    if (trigger) {
      trigger.addEventListener("click", (event) => {
        event.stopPropagation();
        dropdown.classList.toggle("is-active");
      });
    }

    // Close dropdowns when clicking outside
    document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-active");
      }
    });
  });
});
