import BaseInfoC from "../../compoments/resume/BaseInfo"
import {connect,dispatch,getState} from "../../store"
import { BaseInfo } from "../../../interfaces"



export default connect(()=>{
    const data = getState()
    return {
        name:data.name,
        age:data.age,
        school:data.school,
        education:data.education,
        major:data.major,
        workYears:data.workYears,
        homeTown:data.homeTown,
        currentCity:data.currentCity,
        phone:data.phone,
        email:data.email
    }
})(BaseInfoC)