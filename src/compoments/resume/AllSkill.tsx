import { h,Component,render } from "preact"
import { AllSkill } from "../../../interfaces"

export default class extends Component<AllSkill,any>{
    render(){
        const { skills=[] } = this.props
        return(<div>
            <div><button className="button is-primary">掌握技能</button></div>
            {
                skills.map(skill=><div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <div className="label">
                                技能名称:
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={skill.name}/>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <div className="label">
                                使用时间:
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={skill.useTime}/>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <div className="label">
                                技能类型:
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={skill.type}/>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <div className="label">
                                掌握程度:
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={skill.level}/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>)
    }
}