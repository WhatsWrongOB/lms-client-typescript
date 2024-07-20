import { toast } from "react-hot-toast";
import { User } from "../types";


export const useGetToken = (): string | null => {
    const token: string | null = localStorage.getItem("token");
    if (!token) return null;
    return token
}

export const useSetToken = (token: string): void => {
    localStorage.setItem("token", token)
}

export const useSetUser = (user: User): void => {
    localStorage.setItem("CurrentUser", JSON.stringify(user));
}

export const useGetUser = (): User | null => {
    const user: string | null = localStorage.getItem("CurrentUser");
    if (!user) return null;
    return JSON.parse(user)
}

export const useHandleAxiosError = (error: any) => {

    if (error.response) {
        toast.error(error.response.data.message);
    } else if (error.request) {
        toast.error("Server not responding. Please try again later.");
    } else {
        toast.error("An unexpected error occurred.");
    }

};

const token = useGetToken()

export const useAxiosConfiguration = () => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    }
    return config;
}