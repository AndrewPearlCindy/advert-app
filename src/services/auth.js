import { apiCLinet } from "./config"

export const apiSignup = async(payload) => {
    return apiCLinet.post("/users/register", payload)
};

export const apiLogin = async(payload) => {
    return apiCLinet.post("/users/login", payload)
}