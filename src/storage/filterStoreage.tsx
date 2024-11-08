import { create } from "zustand";

interface filter {
    filterValue: filterChoose,
    setFilterValue: (newFilter: filterChoose) => void
}

export type filterChoose = "new" | "favorite" | "expensiveToCheaper" | "cheaperToExpensive" | "none"

export const useFilter = create<filter>((set) => ({
    filterValue: "none",
    setFilterValue: (newFilter: filterChoose) => set({ filterValue: newFilter })
}));