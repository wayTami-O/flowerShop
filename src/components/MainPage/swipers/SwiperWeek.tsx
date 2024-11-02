import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom';
import SwiperType from './type/SwiperType';

function SwiperWeek() {

    const flowets: SwiperType[] [
        {
            title: "Букет “Нежность утра”",
            price: ""
        }
    ]

    return (
        <>
            <h1 className="px-86 pt-122 pb-87 font-mons font-bold text-64 text-rose">Товары недели</h1>
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

                    <SwiperSlide className='pt-48 px-40 pb-26 rounded-20 border-3 border-pink'>
                        <Link to={'/wedding_flowers'}>
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <img src="../../public/img/weekFlowers/weekFlower.png" alt="" />
                                    <div className="flex flex-col items-center gap-5">
                                        <p className="text-kisses text-mons text-20 font-bold">Букет “Нежность утра</p>
                                        <p className="text-kisses text-mons text-16">4 600 ₽</p>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </SwiperSlide>
                    
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