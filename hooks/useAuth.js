import {create} from 'zustand'


const useAuth = create((set,get) => ({
    currentUser: {},
    login: () => ({}),
    logout: () => ({})
}))