import { create } from 'zustand'

const useCart = create((set, get) => ({
    
isOpen: false,
quantityUpdated: false,
setIsOpen: () => set({isOpen: !get().isOpen}),
setQuantityUpdated: () => set({quantityUpdated: new Date().getTime()})

}))

export default useCart