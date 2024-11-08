import { Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue 
} from "@/components/ui/select"
import { Link } from "react-router-dom";

function Filter() {
    return (
        <>
            <div className="mx-86 pt-78 flex justify-between items-center">
                <Link to={'/'}>
                    <button className="w-444 h-84 flex items-center justify-center text-28 bg-rose rounded-40 font-mons font-bold text-white">Вернуться на главную</button>
                </Link>
                <Select>
                    <SelectTrigger className="w-548 h-84 !rounded-40 !border-3 border-pink !text-28 text-pink !font-mons !font-medium">
                        <SelectValue placeholder="Сортировать" />
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33 7.3335H11C8.9742 7.3335 7.2857 9.00183 7.7862 10.9635C8.31926 13.0422 9.30087 14.979 10.6621 16.638C12.0234 18.297 13.7313 19.6378 15.6659 20.5665C17.1747 21.2888 18.3334 22.7078 18.3334 24.3798V35.5338C18.3335 35.8462 18.4135 36.1534 18.5657 36.4262C18.7179 36.699 18.9373 36.9283 19.2031 37.0925C19.4688 37.2567 19.7721 37.3503 20.0842 37.3643C20.3963 37.3784 20.7068 37.3125 20.9862 37.1728L24.6529 35.3395C24.9574 35.1873 25.2135 34.9534 25.3925 34.664C25.5716 34.3745 25.6665 34.0409 25.6667 33.7005V24.3798C25.6667 22.7078 26.8254 21.2888 28.3324 20.5665C30.2677 19.6383 31.9763 18.2976 33.3382 16.6386C34.7001 14.9796 35.6822 13.0425 36.2157 10.9635C36.7125 9.00183 35.0222 7.3335 33 7.3335Z" stroke="url(#paint0_linear_50_836)" strokeWidth="3"/>
                            <defs>
                            <linearGradient id="paint0_linear_50_836" x1="22.0003" y1="7.3335" x2="22.0003" y2="37.3662" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#A24C61"/>
                            <stop offset="1" stopColor="#710C21"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="new">Сортировать по новизне</SelectItem>
                        <SelectItem value="pop">Сортировать по популярности </SelectItem>
                        <SelectItem value="smallBig">Сортировать по цене: от меньшего к большему</SelectItem>
                        <SelectItem value="bigSmall">Сортировать по цене: от большего к меньшему </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </>
    );
}

export default Filter;