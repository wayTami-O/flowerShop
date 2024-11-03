import { Link } from "react-router-dom";

function CardFlower() {
    return (
        <>
            <div className="px-86 pt-100 pb-193 flex flex-col gap-179">
                <Link to={'/'}>
                    <button className="w-444 h-84 flex items-center justify-center text-28 bg-rose rounded-40 font-mons font-bold text-white">Вернуться на главную</button>
                </Link>
                <h1 className="w-full text-center font-mons font-bold text-36 text-kisses">Букет “Весеннее пробуждение”</h1>
                <div className="relative flex items-center justify-between">
                    <img className="w-651 h-628" src="../../public/img/weekFlowers/weekFlower.png" alt="" />
                    <div className="w-759 px-53 flex flex-col items-center gap-64">
                        <div className="flex w-full gap-3">
                            <p className="text-plum font-mons font-medium text-36">3 760 ₽</p>
                            <p className="text-plum20 font-mons font-medium text-36 line-through">4 700 ₽</p>
                        {/* {
                            el.discount ? <p className="text-plum20 font-mons font-medium text-36 line-through">{el.oldPrice}</p>
                            : null
                        } */}
                        </div>
                        <p className="font-mons text-32 font-medium text-rose leading-32 text-center">Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст </p>
                        <div className="w-full flex flex-col gap-32">
                            <button className="w-full h-80 font-mons rounded-15 bg-plum text-white text-32 font-bold">Добавить в корзину</button>
                            <button className="w-full h-80 font-mons rounded-15 bg-white text-plum text-32 font-bold border-plum border-3 ">Добавить в избранное </button>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default CardFlower;