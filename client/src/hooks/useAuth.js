import { login, logout } from "../components/api/auth-api";
import { AuthContext, useAuthContext } from "../context/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext(AuthContext);

    const loginHandler = async (email, password) => {
        const result= await login(email, password);

        changeAuthState(result)

        return result;
    }

    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useAuthContext(AuthContext);

    const registerHandler = async (email, password) => {
        const result = await register(email, password)

        changeAuthState(result);

        return result;
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