/* Load the Navbar HTML into the page when it's called*/
fetch("components/navbar.html")  /* Get the HTML file */
  .then(response => response.text()) /* Convert to text */
  .then(data => {  /* Inject into page */
    document.getElementById("navbar-container").innerHTML = data; 
  });