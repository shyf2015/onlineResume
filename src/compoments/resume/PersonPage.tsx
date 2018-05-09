import { h,Component,render } from "preact"
import { PersonPage } from "../../../interfaces"

export default class extends Component<PersonPage,any>{
    render(){
        const { link } = this.props["personPage"]
        return(<div>
            <div><button className="button is-primary">个人主页</button></div>
            <div className="field is-horizontal">
                
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={link}/>
                        </p>
                    </div>
                </div>
            </div>

            
        </div>)
    }
}