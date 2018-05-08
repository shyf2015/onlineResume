

//基本信息
export interface BaseInfo{
    name:string,
    age:number,
    school:string,
    education:string,
    major:string,
    workYears:string,
    homeTown:string,
    currentCity:string,
    phone:string,
    email:string
}
//求职意向
export interface JobIntension{
    position:string,
    place:string,
    salary:string
}
//工作经历
export interface Work{
    company:string,
    startTime:string,
    endTime:string,
    workContent:string
}
export interface WorkExperiense{
    works:Work[]
}
//项目经验
export interface ProjectExperiense{
    projects:Project[]
}
export interface Project{
    name:string,
    skill:string[],
    decription:string,
    myDuty:string,
    link:string
}
//掌握技能
export interface Skill{
    name:string,
    useTime:string,
    level:string,
    type:string
}
//兴趣爱好
export interface Hobby{
    items:string[]
}
//获奖经历
export interface PrizeExperiense{
    description:string,
    time:string
}
//语言能力
export interface Language{
    name:string,
    level:string
}
//个人主页
export interface PersonPage{
    link:string
}
//自我评价
export interface PersonEvaluate{
    description:string
}
//
export interface Resume{
    baseInfo:BaseInfo,
    jobIntension:JobIntension,
    workExperiense:WorkExperiense,
    projectExperiense:ProjectExperiense,
    skill?:Skill,
    language?:Language,
    prizeExperiense?:PrizeExperiense,
    hobby?:Hobby,
    personPage?:PersonPage,
    personEvaluate?:PersonEvaluate
}

export interface NavProps{
    showItem:"menu"|"model"
}
export interface ResumeProps{
    resume:Resume,
    isEdit:boolean
}
export interface EditResumeProps{
    moudles:ResumeMoudle[]
}
export interface MenuProps{
    menus:Menu[]
}
export interface Menu{
    show:boolean,
    name:string
}

export interface StoreState{
    name:string,
    age:number,
    school:string,
    education:string,
    major:string,
    workYears:string,
    homeTown:string,
    currentCity:string,
    phone:string,
    email:string,
    position:string,
    place:string,
    salary:string,
    works:Work[],
    projects:Project[],
    moudles:ResumeMoudle[]
}
export interface ResumeMoudle{
    name:string,
    statu:"show"|"hide"
}
