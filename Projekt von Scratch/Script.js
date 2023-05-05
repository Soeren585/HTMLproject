window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByTagName("header")[0].classList.add("scrolled");
    } else {
        document.getElementsByTagName("header")[0].classList.remove("scrolled");
    }
}
/*const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent default form submission behavior

    const searchTerm = event.target.querySelector(".suche").value.trim().toLowerCase();
    const allHeadings = document.querySelectorAll("header h1, h1, h2, h3, h4, h5, h6");

    allHeadings.forEach((heading) => {
        if (heading.textContent.trim().toLowerCase().includes(searchTerm)) {
            heading.closest("article").style.display = "block";
        } else {
            heading.closest("article").style.display = "none";
        }
    });
});*/
document.querySelector('#search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars
    
    var input = document.querySelector('.suche');
    var value = input.value.toLowerCase();
    var headers = document.querySelectorAll('h2, h3, h4, h5, h6');
    
    for (var i = 0; i < headers.length; i++) {
        var headerText = headers[i].textContent.toLowerCase();
        
        if (headerText.indexOf(value) !== -1) { // Falls der gesuchte Text gefunden wurde
            headers[i].scrollIntoView({ behavior: 'smooth' }); // Scrolle zur Überschrift
            break; // Breche die Schleife ab, da wir das erste Ergebnis gefunden haben
        }
    }
    
    input.value = ''; // Leere das Suchfeld
});