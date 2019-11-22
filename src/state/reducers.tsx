import {dispatchType} from './context'

type AppState ={
    loading: boolean ,
    isLoggedIn: boolean,
    isSignedUp: boolean,
    error: boolean,
}
type themeState ={
    loading:boolean,
    isLight:boolean,
}
export const themeReducer = (reducerState:themeState, actions: dispatchType):themeState =>{
    switch (actions.type){
        case 'loading':
            return {
                ...reducerState,
                loading:true,
            }
        case 'toogle':
            return {
                ...reducerState,
                loading:false,
                isLight:!reducerState.isLight,
            }
        default:
            return reducerState
    }
}
export const loginReducer = (reducerState:AppState, actions : dispatchType):AppState => {
    switch (actions.type) {
        case 'loading':
            return {
                ...reducerState,
                loading: true
            }
        case 'signup':
            return {
                ...reducerState,
                isSignedUp: true,
                loading: false,
            }
        case 'login':
            return {
                ...reducerState,
                isLoggedIn: true,
                loading: false,

            }
        case 'failed':
            return {
                ...reducerState,
                isLoggedIn: false,
                isSignedUp: false,
                loading: false,
                error: true
            }
        default:
            return reducerState
    }

}
// 