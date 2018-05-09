import LanguageC from "../../compoments/resume/Language"
import {connect,dispatch,getState} from "../../store"
import { Language } from "../../../interfaces";



export default connect(():Language=>{
    const data = getState()
    return data.language
})(LanguageC)