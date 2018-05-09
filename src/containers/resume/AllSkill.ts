import AllSkillC from "../../compoments/resume/AllSkill"
import {connect,dispatch,getState} from "../../store"



export default connect(()=>{
    const data = getState()
    return {
        allSkill:data.allSkill
    }
})(AllSkillC)