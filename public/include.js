// adds on the header and footer html so i dont gotta do it on every page
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    fetch("header.html")
        .then(response => response.text())
        .then(html => {
            header.innerHTML = html;
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(html => {
            footer.innerHTML = html;
        });
});
