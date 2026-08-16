const cards = document.querySelectorAll(".video-card");
const navItems = document.querySelectorAll(".nav-item");
const searchButton = document.querySelector(".search-btn");
const menuButton = document.querySelector(".menu-btn");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const title = card.querySelector("h2").textContent;
        alert("Opening:\n\n" + title);
    });
});

navItems.forEach(item => {
    item.addEventListener("click", () => {

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        item.classList.add("active");

        alert(item.dataset.page);
    });
});

searchButton.addEventListener("click", () => {

    const searchText = prompt("Search video:");

    if (searchText === null) {
        return;
    }

    const text = searchText.toLowerCase().trim();

    cards.forEach(card => {

        const title = card
            .querySelector("h2")
            .textContent
            .toLowerCase();

        if (title.includes(text)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

menuButton.addEventListener("click", () => {
    alert("Menu opened");
});