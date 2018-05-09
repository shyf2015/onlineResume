import { h,Component,render } from "preact"
import { WorkExperiense } from "../../../interfaces"

export default class extends Component<WorkExperiense,any>{
    render(){
        const { works=[] } = this.props
        return(<div>
            <div><button className="button is-primary">工作经历</button></div>
            {
                works.map(work=><div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <div className="label">
                                公司:
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={work.company}/>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <div className="label">
                                起止时间:
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={`${work.startTime}至${work.endTime}`}/>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <div className="label">
                                工作内容:
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={work.workContent}/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>)
            }


        </div>)
    }
}