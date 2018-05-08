import WorkExperienseC from "../../compoments/resume/WorkExperiense"
import {connect,dispatch,getState} from "../../store"
import { WorkExperiense } from "../../../interfaces"

export default connect(():WorkExperiense=>{
    const data = getState()
    return {
        works:data.works
    }
})(WorkExperienseC)