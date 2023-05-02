import api from "../configs/api";

export const login = (payload) => {
    return api.post('/auth/login', payload);
}
