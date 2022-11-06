// Gets last saved theme on local storage, if null sets the theme based on the system preferences
let theme = localStorage.getItem('data-theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');

document.onreadystatechange = () => {
    // Sets the theme
    setTheme(theme);

    // Gets the element based on ID, adds 'checked' attribute if theme is dark and adds onchange event listener
    const themeToggler = document.getElementById("themeToggler");
    themeToggler.checked = theme == 'dark' ? true : false;
    themeToggler.onchange = (event) => setTheme(theme != 'light' ? 'light' : 'dark');
};

const setTheme = (newTheme) => {
    theme = newTheme; // sets newTheme to theme
    localStorage.setItem("data-theme", newTheme) // saves newTheme to local storage
    document.documentElement.setAttribute("data-theme", newTheme) // sets newTheme to data-theme
}