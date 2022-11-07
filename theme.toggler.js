// getColorPreference: true (default)
// defaultTheme: 'light' (default)

// Default value of 'getColorPreference' by defining 'modifyGetColorPreference' with another value
// Same applies to 'defaultTheme', it can be modified by defining 'modifyDefaultTheme'
// This 'modify' variables declaration must be before the load of this script

const getColorPreference =  typeof modifyGetColorPreference !== 'undefined' ? modifyGetColorPreference : true;
const defaultTheme =  typeof modifyDefaultTheme !== 'undefined' ? modifyDefaultTheme : 'light';

// Gets last saved theme on local storage, if null sets the theme based on the system preferences
let theme = localStorage.getItem('data-theme') || (getColorPreference ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light') : defaultTheme);

const setTheme = (newTheme) => {
    theme = newTheme; // sets newTheme to theme
    localStorage.setItem("data-theme", newTheme) // saves newTheme to local storage
    document.documentElement.setAttribute("data-theme", newTheme) // sets newTheme to data-theme
}

// Sets the theme
setTheme(theme);

document.onreadystatechange = () => {
    // Gets the element based on ID, adds 'checked' attribute if theme is dark and adds onchange event listener
    const themeToggler = document.getElementById("themeToggler");
    themeToggler.checked = theme == 'dark' ? true : false;
    themeToggler.onchange = (event) => setTheme(theme != 'light' ? 'light' : 'dark');
};
