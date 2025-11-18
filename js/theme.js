const themeAttribute = 'theme';
const darkTheme = 'dark';
const lightTheme = 'light';
const html = document.documentElement;

/**
 * Toggles the theme by changing the value of the theme attribute.
 */
window.toggleTheme = () => {
    const other = getCurrentTheme() === darkTheme ? lightTheme : darkTheme;
    html.setAttribute(themeAttribute, other);
    setCurrentTheme(other);
};

/**
 * Applies the theme attribute from local storage, if present.
 */
window.applyStoredTheme = () => {
    const stored = getCurrentTheme();

    if (stored) {
        html.setAttribute(themeAttribute, stored);
    } else {
        setCurrentTheme(lightTheme);
        applyStoredTheme();
    }
};

/**
 * Stores the provided theme to local storage.
 */
window.setCurrentTheme = (theme) => {
    return localStorage.setItem(themeAttribute, theme);
}

/**
 * Gets the current theme from local storage.
 */
window.getCurrentTheme = () => {
    return localStorage.getItem(themeAttribute);
}

/**
 * Shorthand to check if the current theme is dark.
 */
window.isDarkTheme = () => {
    return getCurrentTheme() === darkTheme;
}