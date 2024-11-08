import { Link } from "react-router-dom";
import SwiperType from "./MainPage/swipers/type/SwiperType";
import { useFavorite } from "@/storage/favoriteStorage";
import { useBasket } from "@/storage/basketStorage";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"

function CardFlower(el: {el: SwiperType}) {
    
    const arrayBasket = useBasket((state) => state.basketArray)
    const setArrayBasket = useBasket((state) => state.setbasketArray)

    const handleBasket = () => {
        console.log('buy')
        setArrayBasket([... arrayBasket, el.el])
    }
    
    const arrayFavorite = useFavorite((state) => state.favoriteArray)
    const setArrayFavorite = useFavorite((state) => state.setFavoriteArray)
    
    const itemExists = arrayFavorite.some((i) => i.id === el.el.id)

    const handleArray = () => {
        
        if (itemExists) {
            setArrayFavorite(arrayFavorite.filter(i => i.id !== el.el.id))
        } else {
            setArrayFavorite([...arrayFavorite, el.el])
        }
    }

    return (
        <>
            <div className="relative w-460 border-3 border-pink flex flex-col items-center justify-center gap-7 px-40 py-5 rounded-20">
                <Link to={'/flower'}>
                    <img src={el.el.img} alt="" />
                </Link>
                <div className="flex flex-col items-center gap-36">
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <h1 className="font-mons text-24 font-bold text-center text-kisses whitespace-nowrap">{el.el.title}</h1>
                        <div className="flex gap-2 items-center">
                            <p className="text-plum font-mons font-medium text-20">{el.el.price}</p>
                            {
                                el.el.discount ? <p className="text-plum20 font-mons font-medium text-20 line-through">{el.el.oldPrice}</p>
                                : null
                            }
                        </div>
                    </div>
                    <div className="w-383 flex flex-col gap-2">
                        <button onClick={handleBasket} className="w-full h-52 rounded-15 bg-plum text-white text-20 font-bold">Добавить в корзину</button>
                        <Dialog>
                            <DialogTrigger>
                                <div className="w-full h-52 rounded-15 bg-white text-plum text-20 font-bold border-plum border-3 ">Быстрый просмотр</div>
                            </DialogTrigger>
                            <DialogContent className="max-w-1556 h-835 !rounded-20 items-start justify-center">
                                <DialogHeader className="relative w-1556 h-835 items-center gap-99">
                                    <DialogClose asChild className="absolute top-35 right-47">
                                        <div className="w-32 h-32 flex items-center justify-center bg-rose rounded-30">
                                            <svg className="w-18 h-18" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.99967 8.99967L2.33301 2.33301M8.99967 8.99967L15.6663 15.6663M8.99967 8.99967L15.6663 2.33301M8.99967 8.99967L2.33301 15.6663" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </DialogClose>
                                    <img className="h-628 w-647" src={el.el.img} alt="" />
                                    <div className="w-759 flex flex-col items-center justify-center gap-140">
                                        <div className="flex flex-col gap-48">
                                        <div className="flex flex-col items-center gap-48">
                                            <h1 className="font-mons h-5 text-36 font-bold text-center text-kisses whitespace-nowrap">{el.el.title}</h1>
                                                <div className="flex h-5 gap-2 items-center justify-center">
                                                    <p className="text-plum font-mons font-medium text-36">{el.el.price}</p>
                                                    {
                                                        el.el.discount ? <p className="text-plum20 font-mons font-medium text-36 line-through">{el.el.oldPrice}</p>
                                                        : null
                                                    }
                                                </div>
                                            </div>
                                            <p className="font-mons text-32 font-medium text-rose leading-32 text-center">Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст </p>
                                        </div>
                                        <button className="h-80 w-653 bg-plum rounded-20 text-white font-mons text-32 font-semibold">Добавить в корзину </button>
                                    </div>
                                    {
                                        el.el.discount ? 
                                            (
                                                <div className="h-48 w-111 flex items-center justify-center absolute left-529 top-95 rotate-28 bg-plum rounded-30 text-32 font-bold text-white">{el.el.discountValue}</div>
                                            )
                                        : null
                                    }
                                    {el.el.wishList ? (
                                        <svg className="w-36 h-36 absolute left-5 top-5" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.5 6C20.7 6 18 10.0005 18 12C18 10.0005 15.3 6 10.5 6C5.7 6 4.5 10.0005 4.5 12C4.5 22.5 18 30 18 30C18 30 31.5 22.5 31.5 12C31.5 10.0005 30.3 6 25.5 6Z" fill="#7E1037" stroke="#7E1037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )
                                    : (
                                        <svg className="w-36 h-36 absolute left-5 top-5" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.5 6C20.7 6 18 10.0005 18 12C18 10.0005 15.3 6 10.5 6C5.7 6 4.5 10.0005 4.5 12C4.5 22.5 18 30 18 30C18 30 31.5 22.5 31.5 12C31.5 10.0005 30.3 6 25.5 6Z" stroke="#7E1037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )}
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        {/* <button className="w-full h-52 rounded-15 bg-white text-plum text-20 font-bold border-plum border-3 ">Быстрый просмотр</button> */}
                    
                    </div>
                </div>
                {
                    el.el.discount ?
                        <div className="h-36 px-3 flex items-center justify-center absolute -right-3.2 top-30 bg-plum text-white font-mons font-bold rounded-l-10">20%</div> 
                    : null
                }
                {itemExists ? (
                    <svg onClick={handleArray} className="w-36 h-36 absolute left-5 top-5" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.5 6C20.7 6 18 10.0005 18 12C18 10.0005 15.3 6 10.5 6C5.7 6 4.5 10.0005 4.5 12C4.5 22.5 18 30 18 30C18 30 31.5 22.5 31.5 12C31.5 10.0005 30.3 6 25.5 6Z" fill="#7E1037" stroke="#7E1037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )
                : (
                    <svg onClick={handleArray} className="w-36 h-36 absolute left-5 top-5" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.5 6C20.7 6 18 10.0005 18 12C18 10.0005 15.3 6 10.5 6C5.7 6 4.5 10.0005 4.5 12C4.5 22.5 18 30 18 30C18 30 31.5 22.5 31.5 12C31.5 10.0005 30.3 6 25.5 6Z" stroke="#7E1037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )}
            </div>
        </>
    );
}

export default CardFlower;