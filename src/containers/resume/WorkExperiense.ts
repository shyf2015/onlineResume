import WorkExperienseC from "../../compoments/resume/WorkExperiense"
import {connect,getState} from "../../store"
import { WorkExperiense } from "../../../interfaces";

export default connect(():WorkExperiense=>{
    const data = getState()
    return data.workExperiense
    
})(WorkExperienseC)