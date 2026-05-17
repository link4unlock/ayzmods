document.addEventListener("DOMContentLoaded", () => {
    // 3 Second Loading Screen Logic
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if(loader) {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 500);
        }
    }, 3000);

    // Sidebar Logic
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    function toggleMenu() {
        if(sidebar && overlay) {
            sidebar.classList.toggle("active");
            overlay.classList.toggle("active");
        }
    }

    if(menuBtn) menuBtn.addEventListener("click", toggleMenu);
    if(closeBtn) closeBtn.addEventListener("click", toggleMenu);
    if(overlay) overlay.addEventListener("click", toggleMenu);

    // Bottom Navigation Category Popup Logic
    const catToggle = document.getElementById("cat-toggle");
    const catPopup = document.getElementById("category-popup");

    if(catToggle && catPopup) {
        catToggle.addEventListener("click", (e) => {
            e.preventDefault();
            catPopup.classList.toggle("show");
            catToggle.classList.toggle("active");
        });
    }
});
