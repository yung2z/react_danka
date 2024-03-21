import { create } from "zustand";


export const useUserPopupStore = create((set) => ({
    isOpen: false,
    userInfo: null,
    setIsOpen: (isOpen, userInfo) => {
        set({isOpen, userInfo})
    }
}))