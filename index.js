// Add JavaScript code for your web site here and call it from index.html.
let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);