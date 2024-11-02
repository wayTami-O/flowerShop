import Footer from "../components/Footer";
import Header from "../components/Header";
import Categories from "../components/MainPage/Category";
import HeroBlock from "../components/MainPage/HeroBlock";
import SwiperWeek from "../components/MainPage/swipers/SwiperWeek";

function MainPage() {
    return (
    <>
        <Header />
        <HeroBlock />
        <SwiperWeek text="Товары недели" />
        <Categories />
        <SwiperWeek text="Скидки этого сезона" />
        <Footer />
    </>
    );
}

export default MainPage;