import {h,Component,render} from "preact"
import EditResume from "../containers/EditResume"
import PreView from "../compoments/PreView"
import Tool from "../compoments/Tool"

export interface MainProps{
    viewState:string
}

export default class extends Component<MainProps,any>{
    render(){
        const { viewState } = this.props
        return(<div className="container">
            <div className="columns">
                <div className="column">
                    <Tool/>
                </div>
            </div>
            <div className="columns">
                <div className={viewState=="onlyPreView"?"is-hidden":"column"}>
                    <EditResume/>
                </div>
                <div className={viewState=="onlyEdit"?"is-hidden":"column"}>
                    <PreView/>
                </div>
            </div>
            
        </div>)
    }
}