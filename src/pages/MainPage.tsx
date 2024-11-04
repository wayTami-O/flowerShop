
import Categories from "../components/MainPage/Category";
import HeroBlock from "../components/MainPage/HeroBlock";
import SwiperWeek from "../components/MainPage/swipers/SwiperWeek";

function MainPage() {
    return (
    <>
        <HeroBlock />
        <SwiperWeek text="Товары недели" />
        <Categories />
        <SwiperWeek text="Скидки этого сезона" />
    </>
    );
}

export default MainPage;