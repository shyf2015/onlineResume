import { h,Component,render } from "preact"
import BaseInfo from "../containers/resume/BaseInfo"
import JobIntension from "../containers/resume/JodIntension"
import WorkExperiense from "../containers/resume/WorkExperiense"
import ProjectExperiense from "../containers/resume/ProjectExperiense"


export default class extends Component<any,any>{
    render(){
        return (<div >
            <BaseInfo />
            <JobIntension />
            <WorkExperiense />
            <ProjectExperiense />
        </div>)
    }
}