import WorkExperienseC from "../../compoments/resume/WorkExperiense"
import {connect,getState} from "../../store"

export default connect(()=>{
    const data = getState()
    return {
        workExperiense:data.workExperiense
    }
})(WorkExperienseC)