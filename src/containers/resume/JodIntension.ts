import JobIntensionC from "../../compoments/resume/JobIntension"
import {connect,getState} from "../../store"
import { JobIntension } from "../../../interfaces";



export default connect(():JobIntension=>{
    const data = getState()
    return data.jobIntension
})(JobIntensionC)