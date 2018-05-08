import JobIntensionC from "../../compoments/resume/JobIntension"
import {connect,dispatch,getState} from "../../store"
import { JobIntension } from "../../../interfaces"



export default connect(():JobIntension=>{
    const data = getState()
    return {
        position:data.position,
        place:data.place,
        salary:data.salary
    }
})(JobIntensionC)