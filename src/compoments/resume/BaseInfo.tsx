import { h,Component,render } from "preact"
import { BaseInfo } from "../../../interfaces"

export default class extends Component<BaseInfo,any>{
    render(){
        const { name,age,school,major,education,workYears,homeTown,currentCity,phone,email } = this.props
        return(<div>
            <div><button className="button is-primary">基本信息</button></div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        姓名:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={name}/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        年龄:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={age+""}/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        毕业院校:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={school}/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        学历:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={education}/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        专业:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={major}/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        工作年限:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={workYears}/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        家乡:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={homeTown}/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        现居住地:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={currentCity}/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        手机:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={phone}/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <div className="label">
                        邮箱:
                    </div>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-primary" type="text" value={email}/>
                        </p>
                    </div>
                </div>
            </div>

           
        </div>)
    }
}