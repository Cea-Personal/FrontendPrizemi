import { createContext} from 'react';

   export type dispatchType = {
        type:string,
        payload?:any
    }
export const scrollContext = {
    state:{
        isScroll:false,
        scrollTop:0,
        scrollHeight:0
    },
    dispatch:({}:dispatchType):any => {}
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
export const ScrollContext = createContext(scrollContext)
export const LoginContext = createContext(authContext)


