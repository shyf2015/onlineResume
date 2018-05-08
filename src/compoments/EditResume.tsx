import { h,Component,render } from "preact"
import BaseInfo from "../containers/resume/BaseInfo"
import JobIntension from "../containers/resume/JodIntension"
import WorkExperiense from "../containers/resume/WorkExperiense"
import ProjectExperiense from "../containers/resume/ProjectExperiense"
import { EditResumeProps } from "../../interfaces"

export default class extends Component<EditResumeProps,any>{
    render(){
        const {moudles=[]} = this.props
        return (<div className="columns">
            <div className="column is-11">
                <BaseInfo />
                <JobIntension />
                <WorkExperiense />
                <ProjectExperiense />
            </div>
            <div className="column is-1">
            {
                moudles.map((m)=><button className={`button ${m.statu=='show'?'is-primary':''}`}>
                    {m.name}
                </button>)
            }
            </div>
            
            {/* <div className="column is-1">
                <button className="button is-primary">基本信息</button>
                <button className="button is-primary">求职意向</button>
                <button className="button is-primary">工作经历</button>
                <button className="button is-primary">项目经验</button>
            </div> */}
        </div>)
    }
}