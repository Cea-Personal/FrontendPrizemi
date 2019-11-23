import {dispatchType} from './context'

type AppState = {
    isModalOpen:boolean,
    loading: boolean ,
    action:string
    error: boolean,
    inactive:boolean,
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
        case 'open':
            return {
                ...reducerState,
                isModalOpen:true,
                action: actions.payload,
                inactive:true,
            }
        case 'close':{
            return{
                ...reducerState,
                isModalOpen:false,
                inactive:false,
            }
        }
        case 'loading':
            return {
                ...reducerState,
                loading: true
            }
        case 'failed':
            return {
                ...reducerState,
                loading: false,
                error: true
            }
        default:
            return reducerState
    }

}
// 