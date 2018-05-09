import { h,Component,render } from "preact"
import { Language } from "../../../interfaces"

export default class extends Component<Language,any>{
    render(){
        const { name,level } = this.props["language"]
        return(<div>
            <div><button className="button is-primary">语言能力</button></div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        语言:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={name}/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        水平:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={level}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
    }
}