let menuToggle = (function() {
    var html = document.querySelector("html");
    var burger = document.querySelector(".burger");
    var links = document.querySelector(".nav-links");
    burger.addEventListener("click", () => {
        html.classList.toggle("nav-active");
    }),
    links.addEventListener("click", () => {
        html.classList.toggle("nav-active");
    });
})
menuToggle();

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 768);
});

window.addEventListener("scroll", () => {
    let menuArea = document.getElementById('nav-shimmy');

    if(window.pageYOffset > 20){
        menuArea.classList.add("cus-nav");
    }else{
        menuArea.classList.remove("cus-nav")
    }
});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

 