import {h,Component,render} from "preact"

export default class extends Component<any,any>{
    render(){
        return(<div>
                <div class="select is-primary">
                    <select>
                        <option>中国</option>
                        <option>外国</option>
                    </select>
                </div>
                <div class="select is-primary">
                    <select>
                        <option>北京</option>
                        <option>山西</option>
                    </select>
                </div>
            
        </div>)
    }
}