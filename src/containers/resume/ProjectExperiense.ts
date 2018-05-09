import ProjectExperienseC from "../../compoments/resume/ProjectExperiense"
import {connect,getState} from "../../store"
import { ProjectExperiense } from "../../../interfaces";

export default connect(():ProjectExperiense=>{
    const data = getState()
    return data.projectExperiense
})(ProjectExperienseC)