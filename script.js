var languageBanner = document.getElementById("languageBanner");
var lastScrollTop = 0;

function handleScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        languageBanner.classList.add("hidden");
    } else {
        languageBanner.classList.remove("hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

window.addEventListener("scroll", handleScroll);
