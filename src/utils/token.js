const TOKEN = "token";

export const getToken = () => {
    const tokenString = localStorage.getItem(TOKEN);
    return JSON.parse(tokenString);
};

export const setToken = token => {
    localStorage.setItem(TOKEN, JSON.stringify(token));
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN);
}
