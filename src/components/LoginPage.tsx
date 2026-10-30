import {useLocation, useNavigate} from "react-router";

type LoginState = {
    from?: string;
};

const logIn = () => {
    localStorage.setItem("isAuthenticated", "true");
};

export const logOut = () => {
    localStorage.setItem("isAuthenticated", "false");
};


const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const state = location.state as LoginState | null;
    const targetPath = state?.from ?? "/about";

    const handleLogin = () => {
        logIn()
        navigate(targetPath, {replace: true});
    };

    return (
        <div>
            <h1>Страница входа</h1>
            <button onClick={handleLogin}>
                Войти
            </button>
        </div>
    );
};

export default LoginPage;