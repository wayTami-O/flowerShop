import SwiperType from "@/components/MainPage/swipers/type/SwiperType";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface basketType {
    basketArray: SwiperType[],
    setbasketArray: (newArray: SwiperType[]) => void
}

export const useBasket = create<basketType>()(
    persist(
        (set) => ({
            basketArray: [],
            setbasketArray: (newArray: SwiperType[]) => set({ basketArray: newArray }),
        }),
        {
            name: "basket-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);