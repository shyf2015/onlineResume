

//基本信息
export interface BaseInfo{
    name?:string,
    age?:number,
    school?:string,
    education?:string,
    major?:string,
    workYears?:string,
    homeTown?:string,
    currentCity?:string,
    phone?:string,
    email?:string
}
//求职意向
export interface JobIntension{
    position?:string,
    place?:string,
    salary?:string
}
//掌握技能
export interface Skill{
    name?:string,
    useTime?:string,
    level?:string,
    type?:string
}
export interface AllSkill{
    skills?:Skill[]
}
//工作经历
export interface Work{
    company?:string,
    startTime?:string,
    endTime?:string,
    workContent?:string
}
export interface WorkExperiense{
    works?:Work[]
}
//项目经验
export interface ProjectExperiense{
    projects?:Project[]
}
export interface Project{
    name?:string,
    skill?:string[],
    decription?:string,
    myDuty?:string,
    link?:string
}
//获奖经历
export interface PrizeExperiense{
    prize?:Prize[]
}
export interface Prize{
    description?:string,
    time?:string
}
//语言能力
export interface Language{
    name?:string,
    level?:string
}
//兴趣爱好
export interface Hobby{
    items?:string[]
}
//自我评价
export interface PersonEvaluate{
    description?:string
}
//个人主页
export interface PersonPage{
    link?:string
}

//简历所有模块
export interface Resume{
    baseInfo?:BaseInfo,
    jobIntension?:JobIntension,
    workExperiense?:WorkExperiense,
    projectExperiense?:ProjectExperiense,
    allSkill?:AllSkill,
    language?:Language,
    prizeExperiense?:PrizeExperiense,
    hobby?:Hobby,
    personPage?:PersonPage,
    personEvaluate?:PersonEvaluate
}
//编辑页参数
export interface EditResumeProps{
    moudles?:ResumeMoudle[]
}
export interface ResumeMoudle{
    name:string,
    statu:"show"|"hide"
}

export interface StoreState{
    baseInfo?:BaseInfo,
    jobIntension?:JobIntension,
    workExperiense?:WorkExperiense,
    projectExperiense?:ProjectExperiense,
    allSkill?:AllSkill,
    language?:Language,
    prizeExperiense?:PrizeExperiense,
    hobby?:Hobby,
    personPage?:PersonPage,
    personEvaluate?:PersonEvaluate,
    moudles?:ResumeMoudle[]
}
