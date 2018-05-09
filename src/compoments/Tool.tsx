import { h,Component,render} from "preact"
import { changeView } from "../actions"

export default class extends Component<any,any>{
    render(){
        return (<div>
            <button onClick={e=>changeView("onlyPreView")} className="button is-primary">预览</button>
            <button onClick={e=>changeView("onlyEdit")} className="button is-primary">编辑</button>
            <button onClick={e=>changeView("editAndPreView")} className="button is-primary">预览+编辑</button>
        </div>)
    }
}