document.addEventListener("DOMContentLoaded", function () {
    const homeBtn = document.getElementById("home-us-btn");
    
    if (homeBtn) {
        homeBtn.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("contact-us-btn");
    
    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            window.location.href = "contact.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutBtn = document.getElementById("about-us-btn");
    
    if (aboutBtn) {
        aboutBtn.addEventListener("click", function () {
            window.location.href = "about.html";
        });
    }
});

function togglePost(postElement) {
    postElement.classList.toggle("expanded");
  }