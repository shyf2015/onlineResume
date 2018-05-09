import PersonEvaluateC from "../../compoments/resume/PersonEvaluate"
import {connect,getState} from "../../store"
import { PersonEvaluate } from "../../../interfaces";



export default connect(():PersonEvaluate=>{
    const data = getState()
    return data.personEvaluate
})(PersonEvaluateC)