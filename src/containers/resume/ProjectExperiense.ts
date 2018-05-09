import ProjectExperienseC from "../../compoments/resume/ProjectExperiense"
import {connect,getState} from "../../store"

export default connect(()=>{
    const data = getState()
    return {
        projectExperiense:data.projectExperiense
    }
})(ProjectExperienseC)