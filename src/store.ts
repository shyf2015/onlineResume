import creatStore,{ IPreact,Connect,DispatchAction } from "ipreact"

import { StoreState } from "../interfaces"


const initState:StoreState={
    baseInfo:{},
    jobIntension:{},
    workExperiense:{},
    projectExperiense:{},
    allSkill:{},
    language:{},
    prizeExperiense:{},
    hobby:{},
    personPage:{},
    personEvaluate:{},
    moudles:[]
}

const { getState,dispatch,connect }:IPreact<StoreState>= creatStore()(initState)
export { connect,getState,dispatch }