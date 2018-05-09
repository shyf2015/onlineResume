import HobbyC from "../../compoments/resume/Hobby"
import {connect,dispatch,getState} from "../../store"



export default connect(()=>{
    const data = getState()
    return {
        hobby:data.hobby
    }
})(HobbyC)