import SwiperType from "../MainPage/swipers/type/SwiperType";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

function FlowersTable() {

    const flowers: SwiperType[] = [
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
            <div className="px-86 pt-117 grid grid-cols-3 gap-y-88 gap-x-100">
                {
                    flowers.map((el, index) => (
                        <div key={index} className="relative w-460 border-3 border-pink flex flex-col items-center justify-center gap-7 px-40 py-5 rounded-20">
                            <img src={el.img} alt="" />
                            <div className="flex flex-col items-center gap-36">
                                <div className="flex flex-col gap-5 items-center justify-center">
                                    <h1 className="font-mons text-24 font-bold text-center text-kisses whitespace-nowrap">{el.title}</h1>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-plum font-mons font-medium text-20">{el.price}</p>
                                        {
                                            el.discount ? <p className="text-plum20 font-mons font-medium text-20">{el.oldPrice}</p>
                                            : null
                                        }
                                    </div>
                                </div>
                                <div className="w-383 flex flex-col gap-2">
                                    <button className="w-full h-52 rounded-15 bg-plum text-white text-20 font-bold">Добавить в корзину</button>
                                    <Dialog>
                                        <DialogTrigger>
                                            <button className="w-full h-52 rounded-15 bg-white text-plum text-20 font-bold border-plum border-3 ">Быстрый просмотр</button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                                <DialogDescription>
                                                    This action cannot be undone. This will permanently delete your account
                                                    and remove your data from our servers.
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                    {/* <button className="w-full h-52 rounded-15 bg-white text-plum text-20 font-bold border-plum border-3 ">Быстрый просмотр</button> */}
                                
                                </div>
                            </div>
                            <div className="h-36 px-3 flex items-center justify-center absolute -right-3.2 top-30 bg-plum text-white font-mons font-bold rounded-l-10">20%</div> 
                            {el.discount ? (
                                <svg className="w-36 h-36 absolute left-5 top-5" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.5 6C20.7 6 18 10.0005 18 12C18 10.0005 15.3 6 10.5 6C5.7 6 4.5 10.0005 4.5 12C4.5 22.5 18 30 18 30C18 30 31.5 22.5 31.5 12C31.5 10.0005 30.3 6 25.5 6Z" fill="#7E1037" stroke="#7E1037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            )
                            : (
                                <svg className="w-36 h-36 absolute left-5 top-5" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.5 6C20.7 6 18 10.0005 18 12C18 10.0005 15.3 6 10.5 6C5.7 6 4.5 10.0005 4.5 12C4.5 22.5 18 30 18 30C18 30 31.5 22.5 31.5 12C31.5 10.0005 30.3 6 25.5 6Z" stroke="#7E1037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            )}
                            {/* Активное */}
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default FlowersTable;