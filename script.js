// Search and filter the destination cards on the Home page.
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resetButton = document.getElementById("resetButton");
const searchMessage = document.getElementById("searchMessage");
const recommendationGrid = document.getElementById("recommendationGrid");
const noResults = document.getElementById("noResults");

if (searchForm && searchInput && recommendationGrid) {
  const cards = Array.from(recommendationGrid.querySelectorAll(".destination-card"));

  function searchDestinations(event) {
    if (event) event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const searchableText = `${card.dataset.category} ${card.innerText}`.toLowerCase();
      const matches = query === "" || searchableText.includes(query);
      card.hidden = !matches;
      if (matches) visibleCount++;
    });

    noResults.hidden = visibleCount > 0;
    searchMessage.textContent = query
      ? `Found ${visibleCount} destination${visibleCount === 1 ? "" : "s"} for “${query}”.`
      : "Showing all featured destinations.";
  }

  searchForm.addEventListener("submit", searchDestinations);
  searchInput.addEventListener("input", searchDestinations);
  resetButton.addEventListener("click", () => {
    searchInput.value = "";
    searchDestinations();
    searchInput.focus();
  });
}

// Demo contact form: validate required fields and show an on-page confirmation.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const formMessage = document.getElementById("formMessage");
    formMessage.textContent = `Thanks, ${name}! Your message has been prepared. This demo does not send email to a server.`;
    contactForm.reset();
  });
}
