import { dispatch } from "./store"

export const changeView = (viewState:"onlyEdit"|"onlyPreView"|"editAndPreView")=>{
    dispatch(state=>{
        return {
            ...state,
            viewState,
        }
    })
}