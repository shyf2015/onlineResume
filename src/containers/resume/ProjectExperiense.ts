import ProjectExperienseC from "../../compoments/resume/ProjectExperiense"
import {connect,dispatch,getState} from "../../store"
import { ProjectExperiense } from "../../../interfaces"

export default connect(():ProjectExperiense=>{
    const data = getState()
    return {
        projects:data.projects
    }
})(ProjectExperienseC)