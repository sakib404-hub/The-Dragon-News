import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import CategoryNews from "../Components/LeftNavigationBar/CategoryNews";


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
                Component: CategoryNews
            }
        ]
    }
])