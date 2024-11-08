import SwiperType from "../MainPage/swipers/type/SwiperType";
import CardFlower from "../CardFlower";
import { useFavorite } from "@/storage/favoriteStorage";

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
        oldPrice: ""
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
        oldPrice: "300 P"
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
        oldPrice: "300 P"
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
        oldPrice: ""
    }
]


interface isFavorite {
    isFavorite: boolean
}

function FlowersTable({ isFavorite }: isFavorite) {
    
    const arrayFavorite = useFavorite((state) => state.favoriteArray)
    return (
        <>
            <div className="px-86 pt-117 grid grid-cols-3 gap-y-88 gap-x-100">
                {isFavorite ?
                    arrayFavorite?.map((el, index) => (
                        <CardFlower key={index} el={el} />
                    ))
                    :
                    flowers.map((el, index) => (
                        <CardFlower key={index} el={el} />
                    ))
                }
            </div>
        </>
    );
}

export default FlowersTable;