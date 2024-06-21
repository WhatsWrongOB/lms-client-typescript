import { User } from "../components/Navbar";


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

export const useGetUserId = (): string | null => {
    const user: string | null = localStorage.getItem("CurrentUser");
    if (!user) return null;
    return JSON.parse(user).id
}

export const useGetUser = (): User | null => {
    const user: string | null = localStorage.getItem("CurrentUser");
    if (!user) return null;
    return JSON.parse(user)
}