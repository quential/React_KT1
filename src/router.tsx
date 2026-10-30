import {createBrowserRouter} from 'react-router';
import Layout from "./components/Layout.tsx";
import HomePage from "./components/HomePage.tsx";
import AboutPage from "./components/AboutPage.tsx";
import TasksPage from "./components/TasksPage.tsx";
import Products from "./components/Products.tsx";
import LoginPage from "./components/LoginPage.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <h2>404 — Страница не найдена</h2>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'tasks',
                element: <TasksPage/>,
            },
            {
                path: 'about',
                element: (
                    <PrivateRoute>
                        <AboutPage/>
                    </PrivateRoute>
                ),
            },
            {
                path: 'products',
                element: <Products/>
            },
            {
                path: 'products/:id',
                element: <Products/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
        ],
    },
]);
