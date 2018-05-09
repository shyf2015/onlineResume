import { h,Component,render } from "preact"
import BaseInfo from "../containers/resume/BaseInfo"
import JobIntension from "../containers/resume/JodIntension"
import WorkExperiense from "../containers/resume/WorkExperiense"
import ProjectExperiense from "../containers/resume/ProjectExperiense"
import PrizeExperiense from "../containers/resume/PrizeExperiense"
import AllSkill from "../containers/resume/AllSkill"
import Language from "../containers/resume/Language"
import Hobby from "../containers/resume/Hobby"
import PersonEvaluate from "../containers/resume/PersonEvaluate"
import PersonPage from "../containers/resume/PersonPage"
import { EditResumeProps } from "../../interfaces"

export default class extends Component<EditResumeProps,any>{
    render(){
        const {moudles=[]} = this.props
        return (<div className="columns">
            <div className="column is-11">
                { moudles.length && moudles[0]['statu']=='show'?<BaseInfo />:'' }
                { moudles.length && moudles[1]['statu']=='show'?<JobIntension />:'' }
                { moudles.length && moudles[2]['statu']=='show'?<AllSkill />:'' }
                { moudles.length && moudles[3]['statu']=='show'?<WorkExperiense />:'' }
                { moudles.length && moudles[4]['statu']=='show'?<ProjectExperiense />:'' }
                { moudles.length && moudles[5]['statu']=='show'?<PrizeExperiense />:'' }
                { moudles.length && moudles[6]['statu']=='show'?<Language />:'' }
                { moudles.length && moudles[7]['statu']=='show'?<Hobby />:'' }
                { moudles.length && moudles[8]['statu']=='show'?<PersonEvaluate />:'' }
                { moudles.length && moudles[9]['statu']=='show'?<PersonPage />:'' }
                
            </div>
            <div className="column is-1">
            {
                moudles.map((m)=><button className={`button ${m.statu=='show'?'is-primary':''}`}>
                    {m.name}
                </button>)
            }
            </div>
        </div>)
    }
}