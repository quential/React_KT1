import {Link, Outlet} from 'react-router';
import { useFavoritesStore } from '../store/useFavoritesStore';

function Layout() {
    const favorites = useFavoritesStore((state) => state.favorites)

    return (
        <div>
            <nav>
                <Link to="/">Главная</Link> | <Link to="/tasks">Задачи</Link> | <Link to="/products">Товары</Link> | <Link to="/users">Пользователи</Link> | <Link to="/about">О нас</Link> | ❤️{favorites.length}
            </nav>
            <hr/>
            <Outlet/>
        </div>
    );
}

export default Layout;
