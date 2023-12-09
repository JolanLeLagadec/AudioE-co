import { create } from 'zustand'

const useCart = create((set, get) => ({
    
isOpen: false,
itemsCount: 0,
setIsOpen: () => set({isOpen: !get().isOpen}),
setItemsCount: (count) => set({itemsCount: count})

}))

export default useCart