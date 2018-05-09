import { h,Component,render } from "preact"
import { JobIntension } from "../../../interfaces"

export default class extends Component<JobIntension,any>{
    render(){
        const { position,place,salary } = this.props["jobIntension"]
        return(<div>
            <div><button className="button is-primary">求职意向</button></div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        职位:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={position}/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        地点:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={place}/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        期望薪资:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={salary}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
    }
}