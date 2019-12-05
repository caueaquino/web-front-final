import ajax from 'ajax';

const url = 'http://localhost:3001/users/';

export const registerUser = (name, password) => {
    return ajax.post(url, {name, password});
}

export const login = (name, password) => {
    ajax.post(url + 'login', {name, password});
}

export const logout = () => {
    ajax.post(url + 'logout');
}