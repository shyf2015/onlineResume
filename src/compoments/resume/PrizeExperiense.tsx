import { h,Component,render } from "preact"
import { PrizeExperiense } from "../../../interfaces"

export default class extends Component<PrizeExperiense,any>{
    render(){
        const { prize=[] } = this.props["prizeExperiense"]
        return(<div>
            <div><button className="button is-primary">获奖经历</button></div>
            {
                prize.map(pri=><div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <div className="label">
                                描述:
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={pri.description}/>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <div className="label">
                                获奖时间:
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={pri.time}/>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>)
    }
}