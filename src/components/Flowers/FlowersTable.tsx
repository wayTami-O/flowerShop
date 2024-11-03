import SwiperType from "../MainPage/swipers/type/SwiperType";
import CardFlower from "../CardFlower";

function FlowersTable() {

    const flowers: SwiperType[] = [
        {
            title: "Букет “Нежность утра”",
            price: "4 600 ₽",
            img: "/img/weekFlowers/weekFlower.png",
            link: "/flower",
            wishList: false,
            discount: false,
            discountValue: "",
            oldPrice: ""
        },
        {
            title: "Букет “Цветочный коктейль”",
            price: "5 500 ₽",
            img: "/img/weekFlowers/weekFlower.png",
            link: "/flower",
            wishList: false,
            discount: true,
            discountValue: "20%",
            oldPrice: "300 P"
        },
        {
            title: "Букет “Цветы счастья”",
            price: "7 300 ₽",
            img: "/img/weekFlowers/weekFlower.png",
            link: "/flower",
            wishList: false,
            discount: true,
            discountValue: "20%",
            oldPrice: "300 P"
        },
        {
            title: "Букет “Сладкие сны”",
            price: "4 200 ₽",
            img: "/img/weekFlowers/weekFlower.png",
            link: "/flower",
            wishList: true,
            discount: false,
            discountValue: "",
            oldPrice: ""
        }
    ]

    return (
        <>
            <div className="px-86 pt-117 grid grid-cols-3 gap-y-88 gap-x-100">
                {
                    flowers.map((el, index) => (
                        <CardFlower key={index} el={el} />
                    ))
                }
            </div>
        </>
    );
}

export default FlowersTable;