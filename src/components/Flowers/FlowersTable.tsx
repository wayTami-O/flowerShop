import SwiperType from "../MainPage/swipers/type/SwiperType";
import CardFlower from "../CardFlower";
import { useFavorite } from "@/storage/favoriteStorage";
import { useFilter, filterChoose } from "@/storage/filterStoreage";

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


interface isFavorite {
    isFavorite: boolean,
    filter: boolean

}

function FlowersTable({ isFavorite, filter }: isFavorite) {
    
    const arrayFavorite = useFavorite((state) => state.favoriteArray)
    
    const filterValue = useFilter((state) => state.filterValue)

    const renderArray = isFavorite ? arrayFavorite?.map(el => (el)) : flowers.map(el => (el))

    let filtersArray: SwiperType[] = []

    switch (filterValue) {
        case "new":
            filtersArray = renderArray.filter(i => i.filter == "new")
            break;
    
        case "favorite":
            filtersArray = renderArray.filter(i => i.filter == "favorite")
            break;

        case "expensiveToCheaper":
            filtersArray = renderArray.sort((a, b) => b.priceNum - a.priceNum)
            break;

        case "expensiveToCheaper":
            filtersArray = renderArray.sort((a, b) => a.priceNum - b.priceNum)
            break;

        default:
            filtersArray = renderArray
            break;
    }

    return (
        <>
            <div className="px-86 pt-117 grid grid-cols-3 gap-y-88 gap-x-100">
                {
                    filter ? 
                    filtersArray.map((el, index) => (
                        <CardFlower key={index} el={el} />
                    ))
                    :
                    renderArray.map((el, index) => (
                        <CardFlower key={index} el={el} />
                    ))
                }
            </div>
        </>
    );
}

export default FlowersTable;