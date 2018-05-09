import { h } from "preact"
import {getState,connect} from "../store"
import EditResume from "../compoments/EditResume"
import { EditResumeProps } from "../../interfaces"

export default connect(():EditResumeProps=>{
    const data = getState()
    return {
        moudles:data.moudles,
        viewState:data.viewState
    }
})(EditResume)