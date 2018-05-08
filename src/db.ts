import Dexie from 'dexie'
import { BaseInfo,JobIntension,WorkExperiense,ProjectExperiense,EditResumeProps } from '../interfaces'

export class MyDataBase extends Dexie{
    base_info:Dexie.Table<BaseInfo,number>
    job_intension:Dexie.Table<JobIntension,number>
    work_experiense:Dexie.Table<WorkExperiense,number>
    project_experiense:Dexie.Table<ProjectExperiense,number>
    editResumeProps:Dexie.Table<EditResumeProps,number>

    constructor(){
        super("resume_data")
        this.version(1).stores({
            base_info:"++id",
            job_intension:"++id",
            work_experiense:"++id",
            project_experiense:"++id",
            editResumeProps:"++id"
        })
    }
}

export default new MyDataBase()