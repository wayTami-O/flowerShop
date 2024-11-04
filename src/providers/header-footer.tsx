import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export function ProviderHeaderFooter() {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}