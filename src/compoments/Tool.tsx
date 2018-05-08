import { h,Component,render} from "preact"

export default class extends Component<any,any>{
    render(){
        return (<div>
            <button className="button is-primary">预览</button>
            <button className="button is-primary">编辑</button>
            <button className="button is-primary">预览+编辑</button>
            <div class="select is-primary">
                    <select>
                        <option>选择模板</option>
                    </select>
            </div>
            <button className="button is-primary">生成链接</button>
            <button className="button is-primary">登录</button>
            <button className="button is-primary">注册</button>
            <button className="button is-primary">退出</button>
        </div>)
    }
}