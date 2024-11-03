import BasketComponent from "@/components/BasketPage/BasketComponent";
import PayMethods from "@/components/BasketPage/PayMethods";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function BasketFlower() {
    return (
        <>
            <Header />

            <BasketComponent />

            <PayMethods />

            <Footer />
        </>
    );
}

export default BasketFlower;