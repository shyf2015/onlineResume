import { h,Component,render } from "preact"
import { ProjectExperiense } from "../../../interfaces"


export default class extends Component<ProjectExperiense,any>{
    render(){
        const { projects } = this.props
        return(<div>
            <table className="table is-fullwidth is-bordered">
                <tr>
                    <td colSpan={2}>项目经验</td>
                </tr>
                {
                    projects.reduce((arr,project) => arr.concat([
                        <tr>
                            <td>名称:</td>
                            <td><input type="text" value={project.name}/></td>
                        </tr>,
                        <tr>
                            <td>使用技术和工具:</td>
                            <td><input type="text" value={project.skill}/></td>
                        </tr>,
                        <tr>
                            <td>项目描述:</td>
                            <td><input type="text" value={project.decription}/></td>
                        </tr>,
                        <tr>
                            <td>我的职责:</td>
                            <td><input type="text" value={project.myDuty}/></td>
                        </tr>
                    ]), [])
                }
                
            </table>
        </div>)
    }
}