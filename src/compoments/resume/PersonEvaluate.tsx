import { h,Component,render } from "preact"
import { PersonEvaluate } from "../../../interfaces"

export default class extends Component<PersonEvaluate,any>{
    render(){
        const { description } = this.props["personEvaluate"]
        return(<div>
            <div><button className="button is-primary">个人评价</button></div>
            <div className="field is-horizontal">
                
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={description}/>
                        </p>
                    </div>
                </div>
            </div>

            
        </div>)
    }
}