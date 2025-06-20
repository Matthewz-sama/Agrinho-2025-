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


const cartButton = document.querySelector('.cart-button');
const buttonText = cartButton.querySelector('.button-text');

cartButton.addEventListener('click', () => {
  if (cartButton.classList.contains('adding')) return;

  cartButton.classList.add('adding');
  buttonText.textContent = 'Adicionando...';

  setTimeout(() => {
    cartButton.classList.remove('adding');
    cartButton.classList.add('added');
    buttonText.textContent = 'Adicionado!';
  }, 1000);

  setTimeout(() => {
    cartButton.classList.remove('added');
    buttonText.textContent = 'Adicionar ao carrinho';
  }, 3000);
});