import db from "./db"
import { dispatch } from "./store"

export const initDataBase = async ()=>{
    const list = await db.base_info.toArray();
    if(list.length===0){
        db.base_info.add({
            name:"孙悟空1",
            age:500,
            school:"",
            education:"",
            major:"",
            workYears:"",
            homeTown:"",
            currentCity:"",
            phone:"",
            email:""
        })
        db.job_intension.add({
            position:"保镖",
            place:"",
            salary:""
        })
        db.work_experiense.add({
            works:[{
                company:"天庭",
                startTime:"",
                endTime:"",
                workContent:""
            }]
        })
        db.project_experiense.add({
            projects:[{
                name:"大闹天宫",
                skill:[],
                decription:"",
                myDuty:"",
                link:""
            }]
        })
        db.editResumeProps.add({
            moudles:[{
                name:"基本信息",
                statu:"show"
            },{
                name:"求职意向",
                statu:"show"
            },{
                name:"工作经历",
                statu:"show"
            },{
                name:"项目经验",
                statu:"show"
            }]
        })
    }
}
initDataBase()
export const initData = async ()=>{
    const base_info = await db.base_info.get(1)
    const job_intension = await db.job_intension.get(1)
    const work_experiense = await db.work_experiense.get(1)
    const project_experiense = await db.project_experiense.get(1)
    const editResumeProps = await db.editResumeProps.get(1)
    dispatch(state=>{
        return {
            ...state,
            ...base_info,
            ...job_intension,
            ...work_experiense,
            ...project_experiense,
            ...editResumeProps
        }
    })
}