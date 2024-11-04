import Filter from "../components/Flowers/Fliter";
import FlowersTable from "../components/Flowers/FlowersTable";
// import { useState } from "react";

function Flowers() {

//     const [data,setData] = useState([
//         {
//             title: "Букет “Нежность утра”",
//             price: "4 600 ₽",
//             img: "/img/weekFlowers/weekFlower.png",
//             link: "/flower",
//             wishList: false,
//             discount: false,
//             discountValue: "",
//             oldPrice: ""
//         },
//         {
//             title: "Букет “Цветочный коктейль”",
//             price: "5 500 ₽",
//             img: "/img/weekFlowers/weekFlower.png",
//             link: "/flower",
//             wishList: false,
//             discount: true,
//             discountValue: "20%",
//             oldPrice: "300 P"
//         },
//         {
//             title: "Букет “Цветы счастья”",
//             price: "7 300 ₽",
//             img: "/img/weekFlowers/weekFlower.png",
//             link: "/flower",
//             wishList: false,
//             discount: true,
//             discountValue: "20%",
//             oldPrice: "300 P"
//         },
//         {
//             title: "Букет “Сладкие сны”",
//             price: "4 200 ₽",
//             img: "/img/weekFlowers/weekFlower.png",
//             link: "/flower",
//             wishList: true,
//             discount: false,
//             discountValue: "",
//             oldPrice: ""
//         }
//     ]
// )

    return (
        <>
            <Filter />
            <FlowersTable />
        </>
    );
}

export default Flowers;