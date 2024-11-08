import SwiperType from "../MainPage/swipers/type/SwiperType";
import { useBasket } from "@/storage/basketStorage";

function BasketCard({el}: {el: SwiperType}) {

    const arrayBasket = useBasket((state) => state.basketArray)
    const setArrayBasket = useBasket((state) => state.setbasketArray)


    const handleArray = () => {
        
        setArrayBasket(arrayBasket.filter(i => i.id !== el.id)) 
    }

    return (
        <>
            <div className="w-full h-270 flex justify-between">
                <div className="h-full flex items-center">
                    <img src={el.img} className="h-270" alt="" />
                    <div className="flex flex-col gap-120">
                        <h2 className="font-mons text-20 font-bold text-kisses">Букет “Весеннее пробуждение”</h2>
                        <div className="flex items-center gap-28">
                            <button onClick={handleArray} className="w-40 h-40 rounded-10 bg-rose text-white">-</button>
                            <p className="font-mons text-20 font-bold text-black">1</p>
                            <button className="w-40 h-40 rounded-10 bg-rose text-white">+</button>
                        </div>
                    </div>
                </div>
                <div className="pt-49 h-fit flex items-center gap-2">
                    <p className="text-plum font-mons font-medium text-20">{el.price}</p>
                    {
                        el.discount ? 
                        <p className="text-plum20 font-mons font-medium text-20 line-through">{el.oldPrice}</p>
                        : null
                    }
                </div>
            </div>
        </>
    );
}

export default BasketCard;