import creatStore,{ IPreact,Connect,DispatchAction } from "ipreact"

import { StoreState } from "../interfaces"


const initState:StoreState={
    name:"",
    age:0,
    school:"",
    education:"",
    major:"",
    workYears:"",
    homeTown:"",
    currentCity:"",
    phone:"",
    email:"",
    position:"",
    place:"",
    salary:"",
    works:[],
    projects:[],
    moudles:[]
}

const { getState,dispatch,connect }:IPreact<StoreState>= creatStore()(initState)
export { connect,getState,dispatch }