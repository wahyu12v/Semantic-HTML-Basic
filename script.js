document.addEventListener('DOMContentLoaded', function() {
    
    var navLinks = document.querySelectorAll('ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = link.getAttribute('href'); 
            var targetElement = document.querySelector(targetId); 
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

