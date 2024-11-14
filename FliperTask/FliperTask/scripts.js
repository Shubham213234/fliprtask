// Optional: Add animations or any interactivity here
document.addEventListener("DOMContentLoaded", function() {
    // Example animation for the main title
    const postTitle = document.querySelector('.post-title');
    postTitle.style.opacity = 0;
    setTimeout(() => {
        postTitle.style.transition = 'opacity 1.5s';
        postTitle.style.opacity = 1;
    }, 500);
});
