import LanguageC from "../../compoments/resume/Language"
import {connect,dispatch,getState} from "../../store"



export default connect(()=>{
    const data = getState()
    return {
        language:data.language
    }
})(LanguageC)