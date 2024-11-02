import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom';
import SwiperType from './type/SwiperType';
import "swiper/swiper-bundle.css"

function SwiperWeek({text}: {text: string}) {

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
            <h1 className="px-86 pt-122 pb-87 font-mons font-bold text-64 text-rose">{text}</h1>
            <div className="flex relative gap-34">
                <div id='prevElWeek' className="my-auto ml-33 w-80 h-80 flex items-center justify-center bg-rose rounded-60">
                    <svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6667 3.33337L3 20L19.6667 36.6667" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <Swiper 
                    className="w-1434 mx-auto"
                    navigation={{
                        nextEl: '#nextElWeek',
                        prevEl: '#prevElWeek'
                    }}
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={96}
                    loop
                >
                    {flowers.map((el, index) => (
                        <SwiperSlide key={index} className="relative pt-48 px-40 pb-26 rounded-20 border-3 border-pink">
                            <Link to={el.link}>
                                <div className="flex flex-col gap-32 justify-center items-center">
                                    <div className="flex flex-col gap-2 justify-center items-center">
                                        <img src={el.img} alt={el.title} />
                                        <div className="flex flex-col items-center gap-5">
                                            <p className="text-kisses text-mons text-20 font-bold">{el.title}</p>
                                            <p className="flex gap-2 text-kisses text-mons text-16">{el.price} {el.discount ? <p className=" text-plum20  text-mons text-16">{el.oldPrice}</p> : null}</p>
                                        </div>
                                    </div>
                                    <button className="w-full h-52 font-bold bg-plum text-white font-mons rounded-15">Добавить в корзину</button>
                                    { el.discount ?      
                                        <div className="h-36 px-3 flex items-center justify-center absolute -right-41 top-0 bg-plum text-white">{el.discountValue}</div> 
                                        : null
                                    }
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div id='nextElWeek' className="my-auto mr-33 w-80 h-80 flex items-center justify-center bg-rose rounded-60 rotate-180">
                    <svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6667 3.33337L3 20L19.6667 36.6667" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default SwiperWeek;