import axios from "axios";

export interface Login {
    userName: string;
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
        url: "http://localhost:5050/auth",
        headers: {
            "Content-Type": "application/json"
        },
        data: body
    }

    const response = await axios.request(options);
    if (response.status === 200) {
        const token = response.data.access_token;
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

export const getUser = async (username : string) => {
    const token = localStorage.getItem("token");
    if (!token) {
        return "Usuário não autenticado";
    }

    const options = {
        method: "GET",
        url: `http://localhost:5050/user/username/${username}`,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try {
        const response = await axios.request(options);
        if (response.status === 200) {
            return response.data;
        } else {
            console.error("Erro ao buscar usuário:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        return null;
        
    }
}