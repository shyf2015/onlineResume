import { h,Component,render } from "preact"
import { Hobby } from "../../../interfaces"

export default class extends Component<Hobby,any>{
    render(){
        const { items } = this.props
        return(<div>
            <div><button className="button is-primary">兴趣爱好</button></div>
            <div className="field is-horizontal">
                
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={items}/>
                        </p>
                    </div>
                </div>
            </div>

            
        </div>)
    }
}