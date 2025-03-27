// let products = [
//     { img: "product1.jpg", name: "Product 1", price: "₦5,000" },
//     { img: "product2.jpg", name: "Product 2", price: "₦7,500" },
//     { img: "product3.jpg", name: "Product 3", price: "₦10,000" },
//     { img: "product4.jpg", name: "Product 4", price: "₦12,000" },
//     { img: "product5.jpg", name: "Product 5", price: "₦8,500" },
//     { img: "product6.jpg", name: "Product 6", price: "₦9,000" },
//     { img: "product7.jpg", name: "Product 7", price: "₦11,500" },
//     { img: "product8.jpg", name: "Product 8", price: "₦6,000" },
//     { img: "product9.jpg", name: "Product 9", price: "₦13,000" },
//     { img: "product10.jpg", name: "Product 10", price: "₦14,500" },
//     { img: "product11.jpg", name: "Product 11", price: "₦5,500" },
//     { img: "product12.jpg", name: "Product 12", price: "₦7,800" }
// // ];

let currentIndex = 0;
const productsPerSet = 6;
const productContainer = document.getElementById("product-container");

function loadMoreProducts() {
    for (let i = currentIndex; i < currentIndex + productsPerSet; i++) {
        if (i >= products.length) {
            document.getElementById("see-more").style.display = "none";
            break;
        }

        let product = products[i];
        let productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <button onclick="orderNow('${product.name}')">Buy Now</button>
        `;

        productContainer.appendChild(productElement);
    }

    currentIndex += productsPerSet;
}

function orderNow(productName) {
    let phoneNumber = "2349075225336"; // Your WhatsApp number
    let telegramUsername = "YourTelegramUsername"; // Your Telegram username

    let message = `Hello, I'm interested in purchasing: ${productName}`;
    let whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    let telegramLink = `https://t.me/${telegramUsername}`;

    let userChoice = confirm("Would you like to order via WhatsApp? Click 'Cancel' for Telegram.");

    if (userChoice) {
        window.location.href = whatsappLink;
    } else {
        window.location.href = telegramLink;
    }
}

// Load the first set of products on page load
window.onload = loadMoreProducts;


// Initialize Catalogue Page
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("product-container")) {
        loadPage(1);
    }
});
function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    let menuIcon = document.querySelector(".menu-toggle");

    navLinks.classList.toggle("nav-active");

    if (navLinks.classList.contains("nav-active")) {
        menuIcon.classList.add("hidden"); // Hide burger menu
    } else {
        menuIcon.classList.remove("hidden"); // Show burger menu when closed
    }
}

