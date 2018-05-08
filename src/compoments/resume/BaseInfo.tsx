import { h,Component,render } from "preact"
import { BaseInfo } from "../../../interfaces"

export default class extends Component<BaseInfo,any>{
    render(){
        const { name,age,school,major,education,workYears,homeTown,currentCity,phone,email } = this.props
        return(<div>
            <table className="table is-fullwidth is-bordered">
                <tr>
                    <td colSpan={5}>基本信息</td>
                </tr>
                <tr>
                    <td>姓名:</td>
                    <td><input type="text" value={name}/></td>
                    <td>年龄:</td>
                    <td><input type="text" value={age+""}/></td>
                    <td rowSpan={5}>图片上传</td>
                </tr>
                <tr>
                    <td>毕业院校:</td>
                    <td><input type="text" value={school}/></td>
                    <td>学历:</td>
                    <td><input type="text" value={education}/></td>
                </tr>
                <tr>
                    <td>专业:</td>
                    <td><input type="text"  value={major}/></td>
                    <td>工作年限:</td>
                    <td><input type="text" value={workYears}/></td>
                </tr>
                <tr>
                    <td>家乡:</td>
                    <td><input type="text" value={homeTown}/></td>
                    <td>现居住地:</td>
                    <td><input type="text" value={currentCity}/></td>
                </tr>
                <tr>
                    <td>手机:</td>
                    <td><input type="text" value={phone}/></td>
                    <td>邮箱:</td>
                    <td><input type="text" value={email}/></td>
                </tr>
            </table>
        </div>)
    }
}