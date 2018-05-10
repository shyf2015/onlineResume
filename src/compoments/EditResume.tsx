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
import { changeMoudle } from "../actions"

export const moudleMap = {
    baseInfo:<BaseInfo />,
    jobIntension:<JobIntension />,
    workExperiense:<WorkExperiense/>,
    projectExperiense:<ProjectExperiense/>,
    allSkill:<AllSkill/>,
    language:<Language/>,
    prizeExperiense:<PrizeExperiense/>,
    hobby:<Hobby/>,
    personPage:<PersonPage/>,
    personEvaluate:<PersonEvaluate/>
}

export default class extends Component<EditResumeProps,any>{
    render(){
        const {viewState,moudles=[]} = this.props
        return (<div className="columns">
            <div className={viewState=="onlyEdit"?"column is-11":"column is-12"}>
                {
                    moudles.map(moudle=>{
                        return moudle.statu=="show" && moudleMap[moudle.component]
                    })
                }
                
            </div>
            <div className={viewState=="onlyEdit"?"column is-1":"is-hidden"}>
            {
                moudles.map((m)=><button onClick={e=>changeMoudle(m)} className={`button ${m.statu=='show'?'is-primary':''}`}>
                    {m.name}
                </button>)
            }
            </div>
        </div>)
    }
}