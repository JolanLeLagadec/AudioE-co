import { create } from 'zustand'

const useCart = create((set, get) => ({
isOpen: false,
setIsOpen: () => set({isOpen: !get().isOpen})
}))

export default useCart