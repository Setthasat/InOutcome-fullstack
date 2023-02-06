import create from 'zustand';
import { persist } from 'zustand/middleware'

let store = (set) => ({        
    
})

store = persist(store, {name: "DarkModeChange"})
const useStore = create(store)

export default useStore 