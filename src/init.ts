import db from "./db"
import { dispatch } from "./store"

//初始化数据库
export const initDataBase = async ()=>{
    const list = await db.base_info.toArray();
    if(list.length===0){
        db.base_info.add({
            name:"聂离",
            age:13,
            school:"妖灵师学院",
            education:"天才班",
            major:"灵魂力",
            workYears:"在校生",
            homeTown:"天痕",
            currentCity:"光辉",
            phone:"11111111111",
            email:"11111111111@163.com"
        })
        db.job_intension.add({
            position:"炼丹师",
            place:"光辉",
            salary:"5000妖灵币"
        })
        db.all_skill.add({
            skills:[{
                name:"炼丹",
                useTime:"13年",
                type:"法术",
                level:"精通"
            }]
        })
        db.work_experiense.add({
            works:[{
                company:"光辉之城",
                startTime:"1234年",
                endTime:"4321年",
                workContent:"学习"
            }]
        })
        db.project_experiense.add({
            projects:[{
                name:"黑暗时代",
                skill:["1","2"],
                description:"世界差点毁灭",
                myDuty:"保卫世界和平",
                link:""
            }]
        })
        db.prize_experiense.add({
            prize:[{
                description:"青铜一星称号",
                time:"4321年"
            }]
        })
        db.language.add({
            name:"普通话",
            level:"4级"
        })
        db.hobby.add({
            items:["打游戏","打怪兽"]
        })
        db.person_evaluate.add({
            description:"牛逼到不行"
        })
        db.person_page.add({
            link:"http://baidu.com"
        })
        db.all_moudle.add({
            moudles:[{
                name:"基本信息",
                statu:"show",
                component:"baseInfo"
            },{
                name:"求职意向",
                statu:"show",
                component:"jobIntension"
            },{
                name:"掌握技能",
                statu:"hide",
                component:"allSkill"
            },{
                name:"工作经历",
                statu:"show",
                component:"workExperiense"
            },{
                name:"项目经验",
                statu:"show",
                component:"projectExperiense"
            },{
                name:"获奖经历",
                statu:"show",
                component:"prizePeriense"
            },{
                name:"语言能力",
                statu:"show",
                component:"language"
            },{
                name:"兴趣爱好",
                statu:"show",
                component:"hobby"
            },{
                name:"自我评价",
                statu:"show",
                component:"personEvaluate"
            },{
                name:"个人主页",
                statu:"show",
                component:"personPage"
            }]
        })
    }
}
initDataBase()

//初始化数据
export const initData = async ()=>{
    const baseInfo = await db.base_info.get(1)
    const jobIntension = await db.job_intension.get(1)
    const allSkill = await db.all_skill.get(1)
    const workExperiense = await db.work_experiense.get(1)
    const projectExperiense = await db.project_experiense.get(1)
    const prizeExperiense = await db.prize_experiense.get(1)
    const language = await db.language.get(1)
    const hobby = await db.hobby.get(1)
    const personEvaluate = await db.person_evaluate.get(1)
    const personPage = await db.person_page.get(1)
    const allMoudle = await db.all_moudle.get(1)
    
    dispatch(state=>{
        return {
            ...state,
            baseInfo,
            jobIntension,
            allSkill,
            workExperiense,
            projectExperiense,
            prizeExperiense,
            language,
            hobby,
            personEvaluate,
            personPage,
            ...allMoudle
        }
    })
}