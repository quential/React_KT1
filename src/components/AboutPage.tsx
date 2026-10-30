import {useNavigate} from "react-router";
import {logOut} from "./LoginPage.tsx";



const AboutPage = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        navigate("/login", {replace: true});
    };

    return (
        <div>
            <h2>О нас говорить нечего, просто посмотрите фильм</h2><br/>
            <iframe width="720" height="405" src="https://rutube.ru/play/embed/bef89c70015ddbfd257e42963cc49e22/"
                    allow="clipboard-write; autoplay" allowFullScreen></iframe>
            <br/>
            <button onClick={handleLogout}>
                Выйти
            </button>
        </div>
    );
};

export default AboutPage;