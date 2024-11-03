import SwiperType from "../MainPage/swipers/type/SwiperType";
import BasketCard from "./BasketFlowet";

function BasketComponent() {
    const flower: SwiperType[] = [
        {
            title: "Букет “Нежность утра”",
            price: "4 600 ₽",
            img: "../../public/img/weekFlowers/weekFlower.png",
            link: "/wedding_flowers",
            wishList: false,
            discount: false,
            discountValue: "",
            oldPrice: ""
        },
        {
            title: "Букет “Цветочный коктейль”",
            price: "5 500 ₽",
            img: "../../public/img/weekFlowers/weekFlower.png",
            link: "/wedding_flowers",
            wishList: false,
            discount: true,
            discountValue: "20%",
            oldPrice: "300 P"
        },
        {
            title: "Букет “Цветы счастья”",
            price: "7 300 ₽",
            img: "../../public/img/weekFlowers/weekFlower.png",
            link: "/wedding_flowers",
            wishList: false,
            discount: true,
            discountValue: "20%",
            oldPrice: "300 P"
        },
        {
            title: "Букет “Сладкие сны”",
            price: "4 200 ₽",
            img: "../../public/img/weekFlowers/weekFlower.png",
            link: "/wedding_flowers",
            wishList: false,
            discount: false,
            discountValue: "",
            oldPrice: ""
        }
    ]
    
    
    return (
        <>
            <div className="px-86 flex flex-col gap-89">
                <h1 className="font-mons text-64 text-rose font-bold">Корзина</h1>
                <div className="flex gap-41">
                    <div className="w-1007 flex flex-col gap-123 py-111 pr-111 border-3 border-pink rounded-30">
                        {
                            flower.map((el, index) => (
                                <BasketCard key={index} el={el} />
                            ))
                        }
                    </div>
                    <div className="w-508 h-fit flex flex-col justify-between gap-123 pt-83 pb-54 px-32 border-3 border-pink rounded-30">
                        <div className="w-full flex flex-col gap-51">
                            <div className="flex justify-between items-center">
                                <p className="font-mons font-medium text-rose text-20">Товары, 4 шт.  </p>
                                <p className="font-mons font-medium text-rose text-20">22 050 ₽</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="font-mons font-medium text-rose text-20">Скидка</p>
                                <p className="font-mons font-medium text-rose text-20">- 940 ₽</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="font-mons font-medium text-rose text-20">Промокод</p>
                                <p className="font-mons font-medium text-rose text-20">0 ₽</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="font-mons text-32 text-kissen font-bold">Итого</p>
                                <p className="font-mons text-32 text-kissen font-bold">21 110 ₽</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-9">
                            <button className="h-64 w-full rounded-20 bg-rose text-white text-32 font-bold">Заказать</button>
                            <button className="h-64 w-full rounded-20 border-3 border-rose bg-white text-rose text-32 font-bold">Ввести промокод</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BasketComponent;