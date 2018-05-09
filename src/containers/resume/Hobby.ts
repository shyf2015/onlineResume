import HobbyC from "../../compoments/resume/Hobby"
import {connect,dispatch,getState} from "../../store"
import { Hobby } from "../../../interfaces";



export default connect(():Hobby=>{
    const data = getState()
    return data.hobby
})(HobbyC)