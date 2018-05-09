import JobIntensionC from "../../compoments/resume/JobIntension"
import {connect,dispatch,getState} from "../../store"



export default connect(()=>{
    const data = getState()
    return {
        jobIntension:data.jobIntension
    }
})(JobIntensionC)