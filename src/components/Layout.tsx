import {Link, Outlet} from 'react-router';

function Layout() {
    return (
        <div>
            <nav>
                <Link to="/">Главная</Link> | <Link to="/tasks">Задачи</Link> | <Link to="/products">Товары</Link> | <Link to="/about">О нас</Link>
            </nav>
            <hr/>
            <Outlet/>
        </div>
    );
}

export default Layout;
