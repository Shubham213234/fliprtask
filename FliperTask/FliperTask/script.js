// script.js

document.querySelector('.subscribe-btn').addEventListener('click', () => {
    alert('Thank you for subscribing!');
});


// JavaScript to handle scroll animations
document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".about-text, .mission-text, .text-container, .image-container");

    function checkVisibility() {
        animatedElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check on load
});


// Optional: JavaScript for switching testimonials if needed
const testimonials = document.querySelectorAll(".testimonial-quote");
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, idx) => {
        testimonial.style.display = idx === index ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    showTestimonial(currentTestimonial);

    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000); // Change testimonial every 5 seconds
});


document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            author: "Jonathan Vallem",
            location: "New York, USA",
            image: "Client-First - IMAGES/Image.svg"
        },
        // Add more testimonials here as needed
    ];

    let currentTestimonial = 0;
    
    const testimonialText = document.querySelector('.testimonial-content p');
    const authorName = document.querySelector('.author-info h4');
    const authorLocation = document.querySelector('.author-info p');
    const authorImage = document.querySelector('.author img');
    
    document.querySelector('.navigation .nav-button:first-child').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial > 0) ? currentTestimonial - 1 : testimonials.length - 1;
        updateTestimonial();
    });

    document.querySelector('.navigation .nav-button:last-child').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial < testimonials.length - 1) ? currentTestimonial + 1 : 0;
        updateTestimonial();
    });

    function updateTestimonial() {
        testimonialText.textContent = testimonials[currentTestimonial].text;
        authorName.textContent = testimonials[currentTestimonial].author;
        authorLocation.textContent = testimonials[currentTestimonial].location;
        authorImage.src = testimonials[currentTestimonial].image;
    }

    updateTestimonial();
});


// Smooth scrolling for footer links
document.querySelectorAll('.footer-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Animate the featured content and image
    const featuredContent = document.querySelector(".featured-content");
    const featuredImage = document.querySelector(".featured-image img");
    featuredContent.style.opacity = 1;
    featuredContent.style.transform = "translateX(0)";
    featuredImage.style.opacity = 1;
    featuredImage.style.transform = "scale(1)";

    // Animate the posts with a delay
    const posts = document.querySelectorAll(".post");
    posts.forEach((post, index) => {
        setTimeout(() => {
            post.style.opacity = 1;
            post.style.transform = "translateY(0)";
        }, 500 + index * 200);
    });
});


document.querySelector(".read-more").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".featured-post").scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelectorAll('.post h2').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('highlight');
    });
});

document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', () => {
        category.classList.toggle('selected');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Add any interactive JavaScript functionality if needed
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form from submitting

        // Display a simple success message
        alert("Thank you for reaching out! We'll get back to you shortly.");

        // Optionally, reset the form
        form.reset();
    });
});

