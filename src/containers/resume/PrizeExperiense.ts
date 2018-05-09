import PrizeExperienseC from "../../compoments/resume/PrizeExperiense"
import {connect,getState} from "../../store"

export default connect(()=>{
    const data = getState()
    return {
        prizeExperiense:data.prizeExperiense
    }
})(PrizeExperienseC)