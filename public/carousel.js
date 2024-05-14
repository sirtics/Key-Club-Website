document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");
    let slideInterval;

    // Function to move to the next slide
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Function to show a particular slide
    function currentSlide(n) {
        showSlides(slideIndex = n - 1);
    }

    function showSlides(n) {
        // Reset timer
        clearInterval(slideInterval);

        if (n >= slides.length) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = slides.length - 1;
        }

        // Hide all slides and remove active class from dots
        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.classList.remove("active"));

        // Show the current slide and add active class to the corresponding dot
        slides[slideIndex].style.display = "block";
        dots[slideIndex].classList.add("active");

        // Move to the next slide every 5 seconds
        slideInterval = setInterval(function() {
            plusSlides(1);
        }, 5000);
    }

    // Event listener for previous/next controls
    document.querySelector('.prev').addEventListener('click', () => {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        plusSlides(1);
    });

    // Event listener for dot controls
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide(index + 1);
        });
    });

    // Call showSlides to initialize the slideshow
    showSlides(slideIndex);
});