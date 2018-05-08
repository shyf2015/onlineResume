import { h,Component,render } from "preact"
import { WorkExperiense } from "../../../interfaces"

export default class extends Component<WorkExperiense,any>{
    render(){
        const { works } = this.props
        return(<div>
            <table className="table is-fullwidth is-bordered">
                <tr>
                    <td colSpan={6}>工作经历</td>
                </tr>
                {
                    works.map(work=><tr>
                        <td>公司:</td>
                        <td><input type="text" value={work.company}/></td>
                        <td>时间:</td>
                        <td><input type="text" value={work.startTime+'至'+work.endTime}/></td>
                        <td>工作内容:</td>
                        <td><input type="text" value={work.workContent}/></td>
                    </tr>)
                }
            </table>
        </div>)
    }
}