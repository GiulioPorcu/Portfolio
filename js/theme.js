const dataThemeAttribute = 'data-theme';

const darkTheme = 'dark';
const lightTheme = 'light';

/**
 * Toggles the system theme by changing the value of the data-theme attribute.
 */
window.toggleTheme = () => {
    const html = document.documentElement;
    const current = html.getAttribute(dataThemeAttribute);
    const next = current === darkTheme ? lightTheme : darkTheme;

    html.setAttribute(dataThemeAttribute, next);
    localStorage.setItem(dataThemeAttribute, next);
};

/**
 * Applies the data-theme attribute, if present.
 */
window.applyTheme = () => {
    const stored = localStorage.getItem(dataThemeAttribute);

    if (stored) {
        document.documentElement.setAttribute(dataThemeAttribute, stored);
    }
};