import { dispatch,getState } from "./store"
import { ResumeMoudle,AllMoudle } from "../interfaces"
import db from "./db"
import { initData } from "./init"

export const changeView = (viewState:"onlyEdit"|"onlyPreView"|"editAndPreView")=>{
    dispatch(state=>{
        return {
            ...state,
            viewState,
        }
    })
}

export const changeMoudle = async (moudle:ResumeMoudle)=>{
    const {moudles} = getState()
    moudles.map(m=>{
        m.name==moudle.name?(m.statu=m.statu=="show"?"hide":"show"):""
    })
    const allMoudle:AllMoudle={
        moudles
    }
    await db.all_moudle.update(1,allMoudle);
    initData();
}