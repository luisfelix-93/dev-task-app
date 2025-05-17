import axios from "axios";

export interface Login {
    username: string;
    password: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
}

export const login = async (body: Login) => {
    const options = {
        method: "POST",
        url: "http://localhost:8080/api/login",
        headers: {
            "Content-Type": "application/json"
        },
        data: body
    }

    const response = await axios.request(options);
    if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        return token;
    }
    return new Error("Login failed");
}

export const register = async (body: User) => {
    let isUserNew = false;
    const options = {
        method: "POST",
        url: "http://localhost:8080/api/register",
        headers: {
            "Content-Type": "application/json"
        },
        data: body
    }

    const response = await axios.request(options);
    if (response.status === 201) {
        isUserNew = true;
        return isUserNew;
    }
    return isUserNew;
}


export const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
}