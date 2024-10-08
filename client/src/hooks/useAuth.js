import { login, logout } from "../components/api/auth-api";
import { AuthContext, useAuthContext } from "../context/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext(AuthContext);

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);

        changeAuthState(authData)

        return authData;
    }

    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useAuthContext(AuthContext);

    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);

        changeAuthState(authData);

        return authData;
    };

    return registerHandler;
}

export const useLogout = () => {
    const { logout: localLogout } = useAuthContext(AuthContext);

    const logoutHandler = async () => {
        await logout();
        localLogout;
    };

    return logoutHandler;
}