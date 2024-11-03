import CardFlower from "../CardFlower";
import SwiperType from "../MainPage/swipers/type/SwiperType";

function Recomendation() {

    const flowers: SwiperType[] = [
        {
            title: "Букет “Нежность утра”",
            price: "4 600 ₽",
            img: "/public/img/weekFlowers/weekFlower.png",
            link: "/flower",
            wishList: false,
            discount: false,
            discountValue: "",
            oldPrice: ""
        },
        {
            title: "Букет “Цветочный коктейль”",
            price: "5 500 ₽",
            img: "/public/img/weekFlowers/weekFlower.png",
            link: "/flower",
            wishList: false,
            discount: true,
            discountValue: "20%",
            oldPrice: "300 P"
        },
        {
            title: "Букет “Цветы счастья”",
            price: "7 300 ₽",
            img: "/public/img/weekFlowers/weekFlower.png",
            link: "/flower",
            wishList: false,
            discount: true,
            discountValue: "20%",
            oldPrice: "300 P"
        },
        {
            title: "Букет “Сладкие сны”",
            price: "4 200 ₽",
            img: "/public/img/weekFlowers/weekFlower.png",
            link: "/flower",
            wishList: true,
            discount: false,
            discountValue: "",
            oldPrice: ""
        }
    ]

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