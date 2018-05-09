import { h } from "preact"
import {getState,connect} from "../store"
import MainC from "../compoments/Main"
import { MainProps } from "../compoments/Main"

export default connect(():MainProps=>{
    const data = getState()
    return {
        viewState:data.viewState
    }
})(MainC)