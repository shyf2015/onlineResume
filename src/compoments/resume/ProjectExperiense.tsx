import { h,Component,render } from "preact"
import { ProjectExperiense } from "../../../interfaces"


export default class extends Component<ProjectExperiense,any>{
    render(){
        const { projects=[] } = this.props
        return(<div>
            <div><button className="button is-primary">项目经验</button></div>
            {
                projects.map(project=><div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <div className="label">
                                项目名称:
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={project.name}/>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <div className="label">
                                使用到的技术:
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={project.skill}/>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <div className="label">
                                项目描述:
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={project.description}/>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <div className="label">
                                我的职责:
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={project.myDuty}/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>)
    }
}