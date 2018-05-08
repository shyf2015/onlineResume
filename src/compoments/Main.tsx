import {h,Component,render} from "preact"
import EditResume from "../containers/EditResume"
import PreView from "../compoments/PreView"
import Tool from "../compoments/Tool"

export default class extends Component<any,any>{
    render(){
        return(<div className="container">
            <div className="columns">
                <div className="column">
                    <Tool/>
                </div>
            </div>
            <div className="columns">
                <div className="column is-12">
                    <EditResume/>
                </div>
                {/* <div className="column is-6">
                    <PreView/>
                </div> */}
            </div>
        </div>)
    }
}