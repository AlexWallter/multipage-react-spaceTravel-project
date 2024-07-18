import {create} from 'zustand'
import { shallow } from 'zustand/shallow'

export const useNavIndex = create((set)=>({
    indexValue: 0,
    NavIndex: (e)=> set((state)=> ({indexValue: e})),
    shallow
}))

