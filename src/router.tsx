import { createBrowserRouter, } from "react-router-dom";
import { ProviderHeaderFooter } from "./providers/header-footer";
import MainPage from "./pages/MainPage";
import Flowers from "./pages/Flowers";
import Flower from "./pages/Flower";
import BasketFlower from "./pages/BasketFlower";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateOffice from "./pages/PrivateOffice";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProviderHeaderFooter />,  // Провайдер с хедером и футером
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/wedding_flowers",
                element: <Flowers />,
            },
            {
                path: "/flower",
                element: <Flower />,
            },
            {
                path: "/baskets_flowers",
                element: <BasketFlower />,
            },
            {
                path: "/wishList",
                element: <WishList />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/office",
                element: <PrivateOffice />,
            },
        ],
    },
]);
