import requester from "./requester";

const BASE_URL = "http://localhost:3030/users";

export const login = (email, password) => requester.post(`${BASE_URL}/login`, { email, password });

export const register = (email, password) => requester.post(`${BASE_URL}/register`, { email, password });

export const logout = () => requester.length(`${BASE_URL}/logout`);

export const getOneUser = (userID) => requester.get(`${BASE_URL}/${userID}`);