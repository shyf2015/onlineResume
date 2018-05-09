import PersonPageC from "../../compoments/resume/PersonPage"
import {connect,getState} from "../../store"
import { PersonPage } from "../../../interfaces";



export default connect(():PersonPage=>{
    const data = getState()
    return data.personPage
})(PersonPageC)