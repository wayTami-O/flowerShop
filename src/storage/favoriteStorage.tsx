import SwiperType from "@/components/MainPage/swipers/type/SwiperType";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface favoriteType {
    favoriteArray: SwiperType[],
    setFavoriteArray: (newArray: SwiperType[]) => void
}

export const useFavorite = create<favoriteType>()(
    persist(
        (set) => ({
            favoriteArray: [],
            setFavoriteArray: (newArray: SwiperType[]) => set({ favoriteArray: newArray }),
        }),
        {
            name: "favorite-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);