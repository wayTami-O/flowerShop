import CardFlower from "../CardFlower";
import SwiperType from "../MainPage/swipers/type/SwiperType";

const flowers: SwiperType[] = [
    {
        id: 1,
        title: "Букет “Нежность утра”",
        price: "4 600 ₽",
        img: "/img/weekFlowers/weekFlower.png",
        link: "/flower",
        wishList: false,
        discount: false,
        discountValue: "",
        oldPrice: "",
        filter: "favorite",
        priceNum: 4600
    },
    {
        id: 2,
        title: "Букет “Цветочный коктейль”",
        price: "5 500 ₽",
        img: "/img/weekFlowers/weekFlower.png",
        link: "/flower",
        wishList: false,
        discount: true,
        discountValue: "20%",
        oldPrice: "300 P",
        filter: "new",
        priceNum: 5500
    },
    {
        id: 3,
        title: "Букет “Цветы счастья”",
        price: "7 300 ₽",
        img: "/img/weekFlowers/weekFlower.png",
        link: "/flower",
        wishList: false,
        discount: true,
        discountValue: "20%",
        oldPrice: "300 P",
        filter: "favorite",
        priceNum: 7300
    },
    {
        id: 4,
        title: "Букет “Сладкие сны”",
        price: "4 200 ₽",
        img: "/img/weekFlowers/weekFlower.png",
        link: "/flower",
        wishList: true,
        discount: false,
        discountValue: "",
        oldPrice: "",
        filter: "new",
        priceNum: 4200
    }
]

function Recomendation() {


    return (
        <>
            <div className="px-86 flex flex-col gap-100">
                <h1 className="text-64 text-rose font-bold font-mons">Рекомендуемые товары</h1>
                <div className="grid grid-cols-3 gap-y-88 gap-x-100">
                    {
                        flowers.map((el, index) => (
                            <CardFlower key={index} el={el} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Recomendation;