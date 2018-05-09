import PersonEvaluateC from "../../compoments/resume/PersonEvaluate"
import {connect,getState} from "../../store"



export default connect(()=>{
    const data = getState()
    return {
        personEvaluate:data.personEvaluate
    }
})(PersonEvaluateC)