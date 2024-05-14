document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
  
    // Include the header.html file
    fetch("header.html")
      .then(response => response.text())
      .then(html => {
        header.innerHTML = html;
      });
  
    // Include the footer.html file
    fetch("footer.html")
      .then(response => response.text())
      .then(html => {
        footer.innerHTML = html;
      });
  });
