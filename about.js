const flipBook = (elBook) => {
  elBook.style.setProperty("--c", 0); // Set current page
  const pages = elBook.querySelectorAll(".page");

  pages.forEach((page, idx) => {
    page.style.setProperty("--i", idx);
    page.addEventListener("click", (evt) => {
      if (evt.target.closest("a")) return;
      const curr = evt.target.closest(".back") ? idx : idx + 1;
      elBook.style.setProperty("--c", curr);
    });
  });

  // Handle Table of Contents links
  elBook.querySelectorAll("a[data-page]").forEach((link) => {
    link.addEventListener("click", (evt) => {
      evt.preventDefault();
      const targetPage = parseInt(link.getAttribute("data-page"), 10);
      elBook.style.setProperty("--c", targetPage);
    });
  });
};

document.querySelectorAll(".book").forEach(flipBook);
