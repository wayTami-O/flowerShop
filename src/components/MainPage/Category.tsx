import { Link } from "react-router-dom";

function Categories() {
    return (
        <>
            <div className="flex pt-182 px-28 gap-5">
                <Link className="w-full" to={'/wedding_flowers'}>
                    <div className="w-full h-603 relative flex items-center justify-center bg-ipkland rounded-20 category-shadow">
                        <img src="../../public/img/categoryFlowers/categoryFlower.png" alt="" />
                        <div className="absolute w-full h-216 flex items-center justify-center bg-[#FFFFFFDE] backdrop-blur-4  top-194">
                            <div className="flex flex-col items-center justify-center gap-57">
                                <h1 className="font-bold font-mons text-claret">Букеты</h1>
                                <button className="w-291 h-48 flex items-center justify-center bg-claret font-mons text-white text-24 rounded-20">Перейти в каталог</button>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link className="w-full" to={'/wedding_flowers'}>
                    <div className="w-full h-603 relative flex items-center justify-center bg-ipkland rounded-20 category-shadow">
                        <img src="../../public/img/categoryFlowers/categoryFlower.png" alt="" />
                        <div className="absolute w-full h-216 flex items-center justify-center bg-[#FFFFFFDE] backdrop-blur-4  top-194">
                            <div className="flex flex-col items-center justify-center gap-57">
                                <h1 className="font-bold font-mons text-claret">Букеты</h1>
                                <button className="w-291 h-48 flex items-center justify-center bg-claret font-mons text-white text-24 rounded-20">Перейти в каталог</button>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link className="w-full" to={'/wedding_flowers'}>
                    <div className="w-full h-603 relative flex items-center justify-center bg-ipkland rounded-20 category-shadow">
                        <img src="../../public/img/categoryFlowers/categoryFlower.png" alt="" />
                        <div className="absolute w-full h-216 flex items-center justify-center bg-[#FFFFFFDE] backdrop-blur-4  top-194">
                            <div className="flex flex-col items-center justify-center gap-57">
                                <h1 className="font-bold font-mons text-claret">Букеты</h1>
                                <button className="w-291 h-48 flex items-center justify-center bg-claret font-mons text-white text-24 rounded-20">Перейти в каталог</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Categories;