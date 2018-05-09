import BaseInfoC from "../../compoments/resume/BaseInfo"
import {connect,dispatch,getState} from "../../store"
import { BaseInfo } from "../../../interfaces";



export default connect((): BaseInfo=>{
    const data = getState()
    return data.baseInfo
})(BaseInfoC)