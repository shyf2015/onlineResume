import AllSkillC from "../../compoments/resume/AllSkill"
import {connect,dispatch,getState} from "../../store"
import { AllSkill } from "../../../interfaces";



export default connect(():AllSkill=>{
    const data = getState()
    return data.allSkill
})(AllSkillC)