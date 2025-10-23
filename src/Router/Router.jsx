import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import CategoryNews from "../Components/LeftNavigationBar/CategoryNews";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: async () => {
                    const res = await fetch('/news.json');
                    if (!res.ok) throw new Error('Failed to load categories');
                    return res.json();
                }
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                index: true,
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader: () => fetch('/news.json')
    }
])