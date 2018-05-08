import { h,Component,render } from "preact"
import { JobIntension } from "../../../interfaces"

export default class extends Component<JobIntension,any>{
    render(){
        const { position,place,salary } = this.props
        return(<div>
            <table className="table is-fullwidth is-bordered">
                <tr>
                    <td colSpan={6}>求职意向</td>
                </tr>
                <tr>
                    <td>职位:</td>
                    <td><input type="text" value={position}/></td>
                    <td>工作地点:</td>
                    <td><input type="text" value={place}/></td>
                    <td>期望薪资:</td>
                    <td><input type="text" value={salary}/></td>
                </tr>
                
            </table>
        </div>)
    }
}