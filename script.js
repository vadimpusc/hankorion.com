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


// back to yoppy


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// loader 

document.addEventListener("DOMContentLoaded", function() {
  var loaderOverlay = document.getElementById("loaderOverlay");
  var content = document.getElementById("content");

  // Function to check if the connection is slow
  function isSlowConnection() {
      var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
          var effectiveType = connection.effectiveType;
          // Assume "slow-2g" or "2g" as slow connection types
          return (effectiveType === "slow-2g" || effectiveType === "2g");
      }
      // Default to false if connection information is not available
      return false;
  }

  // Show loader if connection is slow
  if (isSlowConnection()) {
      loaderOverlay.style.display = "block";
      content.style.display = "none";
  } else {
      // Hide loader if connection is not slow
      loaderOverlay.style.display = "none";
      content.style.display = "block";
  }

  // Show content after 5 seconds even if the connection is slow
  setTimeout(function() {
      loaderOverlay.style.display = "none";
      content.style.display = "block";
  }, 5000);
});

