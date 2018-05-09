import PrizeExperienseC from "../../compoments/resume/PrizeExperiense"
import {connect,getState} from "../../store"
import { PrizeExperiense } from "../../../interfaces";

export default connect(():PrizeExperiense=>{
    const data = getState()
    return data.prizeExperiense
})(PrizeExperienseC)