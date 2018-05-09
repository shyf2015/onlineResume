import Dexie from 'dexie'
import { BaseInfo,JobIntension,AllSkill,WorkExperiense,ProjectExperiense,PrizeExperiense,Language,Hobby,PersonEvaluate,PersonPage,AllMoudle } from '../interfaces'

export class MyDataBase extends Dexie{
    base_info:Dexie.Table<BaseInfo,number>
    job_intension:Dexie.Table<JobIntension,number>
    all_skill:Dexie.Table<AllSkill,number>
    work_experiense:Dexie.Table<WorkExperiense,number>
    project_experiense:Dexie.Table<ProjectExperiense,number>
    prize_experiense:Dexie.Table<PrizeExperiense,number>
    language:Dexie.Table<Language,number>
    hobby:Dexie.Table<Hobby,number>
    person_evaluate:Dexie.Table<PersonEvaluate,number>
    person_page:Dexie.Table<PersonPage,number>
    all_moudle:Dexie.Table<AllMoudle,number>

    constructor(){
        super("resume_data")
        this.version(1).stores({
            base_info:"++id",
            job_intension:"++id",
            all_skill:"++id",
            work_experiense:"++id",
            project_experiense:"++id",
            prize_experiense:"++id",
            language:"++id",
            hobby:"++id",
            person_evaluate:"++id",
            person_page:"++id",
            all_moudle:"++id"
        })
    }
}

export default new MyDataBase()