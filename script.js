

document.addEventListener('DOMContentLoaded', function() {
    // Deklarasi semua variabel dropdown
    // Sidebar responsive for mobile
        // Mobile search-bar toggle
        const mobileSearchBtn = document.querySelector('.mobile-search-btn');
        const searchBar = document.querySelector('.search');
        if (mobileSearchBtn && searchBar) {
            mobileSearchBtn.addEventListener('click', function() {
                searchBar.classList.toggle('show');
            });
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    searchBar.classList.remove('show');
                }
            });
        }
    const hamButton = document.querySelector('.ham-button');
    const sidebar = document.querySelector('.yt-menu');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    if (hamButton && sidebar && sidebarOverlay) {
        hamButton.addEventListener('click', function() {
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
        });
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
            }
        });
    }
    const subscribeBtn = document.querySelector('.subscribe-button');
    const subsMenu = document.querySelector('.subs');
    const profileBtn = document.querySelector('.profile-button');
    const profileMenu = document.querySelector('.dropdown-menu');
    const notifBtn = document.querySelector('.profile-buttons');
    const notifMenu = document.querySelector('.dropdown-menus');
    const profileImgBtn = document.querySelector('.profile-button img');
    const profileImgMenu = document.querySelector('.dropdown-menuo');
    const more = document.querySelector('.dropdown-menuq');
    const morebtn = document.querySelector('.profile-buttonq');

    function closeAllDropdowns() {
        if (subsMenu && subsMenu.classList.contains('opena')) subsMenu.classList.remove('opena');
        if (profileMenu && profileMenu.classList.contains('open')) profileMenu.classList.remove('open');
        if (notifMenu && notifMenu.classList.contains('opens')) notifMenu.classList.remove('opens');
        if (profileImgMenu && profileImgMenu.classList.contains('openo')) profileImgMenu.classList.remove('openo');
        if(more && more.classList.contains('openq')) more.classList.remove('openq');
    }

    if (subscribeBtn && subsMenu) {
        subscribeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAllDropdowns();
            subsMenu.classList.toggle('opena');
        });
        subsMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    if (morebtn && more) {
        morebtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAllDropdowns();
            more.classList.toggle('openq');
        });
        more.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    if (profileBtn && profileMenu) {
        profileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAllDropdowns();
            profileMenu.classList.toggle('open');
        });
        profileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    if (notifBtn && notifMenu) {
        notifBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAllDropdowns();
            notifMenu.classList.toggle('opens');
        });
        notifMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    if (profileImgBtn && profileImgMenu) {
        profileImgBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAllDropdowns();
            profileImgMenu.classList.toggle('openo');
        });
        profileImgMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Global click to close all dropdowns
    document.addEventListener('click', function() {
        closeAllDropdowns();
    });
});
let desc = document.querySelector('.video-description');

if (desc){
    desc.addEventListener('click', function(e){
        e.stopPropagation();
        desc.classList.toggle('show');
    });
    desc.addEventListener('click' , function(e){
        e.stopPropagation()
    });
}
const menuButtons = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".main-layout .screen-overlay");
const themeButton = document.querySelector(".navbar .theme-button i");
const searchButton = document.querySelector("#search-button");
const searchBackButton = document.querySelector("#search-back-button");
// Toggle sidebar visibility when menu buttons are clicked
menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });
});
// Toggle sidebar visibility when screen overlay is clicked
screenOverlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hidden");
});
// Initialize dark mode based on localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeButton.classList.replace("uil-moon", "uil-sun");
} else {
  themeButton.classList.replace("uil-sun", "uil-moon");
}
// Toggle dark mode when theme button is clicked
themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  themeButton.classList.toggle("uil-sun", isDarkMode);
  themeButton.classList.toggle("uil-moon", !isDarkMode);
});
// Show sidebar on large screens by default
if (window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hidden");
}
// Toggle search bar on click on mobile
const toggleSearchBar = () => {
  document.body.classList.toggle("show-mobile-search");
};
searchButton.addEventListener("click", toggleSearchBar);
searchBackButton.addEventListener("click", () => searchButton.click());