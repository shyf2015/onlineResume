import BaseInfoC from "../../compoments/resume/BaseInfo"
import {connect,dispatch,getState} from "../../store"



export default connect(()=>{
    const data = getState()
    return {
        baseInfo:data.baseInfo
    }
})(BaseInfoC)