import { createContext , useContext} from 'react';

   export type dispatchType = {
        type:string,
        payload?:any
    }

export const authContext = {
    state:{
    isModalOpen:false,
    loading: false,
    error: false,
    action: 'Signup',
    inactive: false,
    },
    dispatch :({}: dispatchType): any => {}
}
export const themeContext = {
    state:{
        loading:false,
        isLight:true
    },
    dispatch :({}: dispatchType): any => {}
}
export const themes= {
    dark:{
        background:'',
        foreground:'',

    },
    light:{
        background:'',
        foreground:'',
    }
}
export const ThemeContext = createContext(themeContext)

export const LoginContext = createContext(authContext)


