import { create } from 'zustand'

const useMenu = create((set, get) => ({
isOpen: false,
setIsOpen: () => set({isOpen: !get().isOpen})
}))

export default useMenu