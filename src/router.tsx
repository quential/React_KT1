import {createBrowserRouter} from 'react-router';
import Layout from "./components/Layout.tsx";
import HomePage from "./components/HomePage.tsx";
import AboutPage from "./components/AboutPage.tsx";
import TasksPage from "./components/TasksPage.tsx";
import Products from "./components/Products.tsx";
import LoginPage from "./components/LoginPage.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import NotFound from "./components/NotFound.tsx";
import Users from "./components/Users.tsx";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
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
            {
                path: 'users',
                element: <Users />
            },
            {
                path: 'users/:id',
                element: <Users />
            },
        ],
    },
    {
        path: '*',
        element: <NotFound/>
    },
]);
