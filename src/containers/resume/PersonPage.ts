import PersonPageC from "../../compoments/resume/PersonPage"
import {connect,getState} from "../../store"



export default connect(()=>{
    const data = getState()
    return {
        personPage:data.personPage
    }
})(PersonPageC)